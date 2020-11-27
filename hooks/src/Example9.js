import React, { useState, useEffect, useCallback } from "react";

function UseWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    heigth: document.documentElement.clientHeight,
  });

  // const onResize = useCallback(() => {
  //   setSize({
  //     width: document.documentElement.clientWidth,
  //     heigth: document.documentElement.clientHeight,
  //   });
  // }, []);
  let onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      heigth: document.documentElement.clientHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
  return size;
}

export default function Example9() {
  const size = UseWinSize()
  return <div>
    Size: {size.width} : {size.heigth}
  </div>;
}
