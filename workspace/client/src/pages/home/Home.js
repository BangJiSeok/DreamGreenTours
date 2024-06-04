import React from "react";
import { useMediaQuery } from 'react-responsive';
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });

  return (
    <>
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
  )
}
export default Home;