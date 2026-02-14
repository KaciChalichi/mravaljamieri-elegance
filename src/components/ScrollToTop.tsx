import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    // Some environments (preview iframes, mobile browsers) can keep scroll position
    // across SPA navigations. Make this brutally reliable.
    const scrollNow = () => {
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
