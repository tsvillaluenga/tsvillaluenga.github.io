/* Theme toggle + scroll reveal. No dependencies.
   Reveal is defensive on purpose: content must never stay hidden.
   1. Anything already on screen is revealed immediately.
   2. IntersectionObserver handles the rest on scroll.
   3. If the observer never fires at all, everything is revealed. */
(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var meta = document.querySelector('meta[name="theme-color"]');
  var BG = { dark: "#0A0E14", light: "#FBFAF8" };

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function activeTheme() {
    return root.getAttribute("data-theme") || systemTheme();
  }
  function sync() {
    var t = activeTheme();
    if (meta) meta.setAttribute("content", BG[t]);
    if (btn) {
      var next = t === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", "Switch to " + next + " theme");
      btn.setAttribute("title", "Switch to " + next + " theme");
    }
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var next = activeTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  }

  var mqLight = window.matchMedia("(prefers-color-scheme: light)");
  var onSchemeChange = function () { if (!root.getAttribute("data-theme")) sync(); };
  if (mqLight.addEventListener) mqLight.addEventListener("change", onSchemeChange);
  else if (mqLight.addListener) mqLight.addListener(onSchemeChange);

  sync();

  /* ---- scroll reveal ---- */
  var targets = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!targets.length) return;

  function show(el) { el.classList.add("in"); }
  function showAll() { targets.forEach(show); }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) { showAll(); return; }

  // 1. reveal what is already visible, without waiting for the observer
  function onScreen(el) {
    var r = el.getBoundingClientRect();
    var vh = window.innerHeight || root.clientHeight;
    return r.top < vh * 0.95 && r.bottom > 0;
  }
  targets.forEach(function (el) { if (onScreen(el)) show(el); });

  // 2. observe the remainder
  var observerFired = false;
  var io = new IntersectionObserver(function (entries) {
    observerFired = true;
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        show(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  var pending = targets.filter(function (el) { return !el.classList.contains("in"); });
  pending.forEach(function (el) { io.observe(el); });

  // 3. failsafe — if the observer never reports, do not leave anything hidden
  window.setTimeout(function () {
    if (!observerFired) showAll();
  }, 2500);
})();
