import { useEffect, useState } from "react";

const calculateScrollDistance = () => {
  if (typeof window !== "undefined") {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = getDocumentHeight();

    const totalDocumentScrollHeight = documentHeight - windowHeight;
    const scrollPosition = Math.floor(
      (scrollTop / totalDocumentScrollHeight) * 100
    );

    return scrollPosition;
  }
};

const getDocumentHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

const useScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollPercentage(calculateScrollDistance())
    );
  }, []);

  return { scrollPercentage };
};

export default useScrollProgress;
