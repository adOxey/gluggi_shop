import { useEffect, useState } from "react";

export default function useResponsiveSvgIcons() {
  const getIconSize = () => (window.innerWidth < 600 ? "25" : "32");
  const [iconSize, setIconSize] = useState(getIconSize);

  useEffect(() => {
    const onResize = () => {
      setIconSize(getIconSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return iconSize;
}
