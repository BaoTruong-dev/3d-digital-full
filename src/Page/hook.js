import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getMatches = useCallback((query) => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    function handleChange() {
      setMatches(getMatches(query));
    }

    handleChange();
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query, getMatches]);

  return matches;
}
