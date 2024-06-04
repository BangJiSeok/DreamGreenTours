import React from "react";
import { useMediaQuery } from 'react-responsive';
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Tour = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });

  return (
    <>
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
  );
};

export default Tour;
