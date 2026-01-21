import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that scrolls the page to the top whenever the route changes.
 * Works on all devices including mobile.
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};
