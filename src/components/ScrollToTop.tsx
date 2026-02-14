import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    // Some environments (preview iframes, mobile browsers) can keep scroll position
    // across SPA navigations. Make this brutally reliable.
    const scrollNow = () => {
      // Prefer an explicit top anchor so we scroll the *correct* scroll container
      // (works even if the app is inside an iframe or a custom scroll parent).
      const topAnchor = document.getElementById("page-top");
      if (topAnchor) {
        try {
          topAnchor.scrollIntoView({ block: "start", behavior: "auto" });
        } catch {
          // ignore
        }
      }

      // Window
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } catch {
        // ignore
      }
      // Document fallbacks
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 1) Immediately (before paint)
    scrollNow();
    // 2) Next frame (after layout)
    requestAnimationFrame(scrollNow);
    // 3) One more tick (after any state-driven reflows)
    setTimeout(scrollNow, 0);
  }, [pathname, search]);

  return null;
}
