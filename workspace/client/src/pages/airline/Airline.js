import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../global/theme";
import Layout from "../layout/Layout";
import S from "./style";
import TapComponent from "./TapComponent";
import AirWeekSale from "./AirWeekSale";
import { Link, Outlet } from "react-router-dom";
import AirSwiper from "./AirSwiper";

const Airline = () => {
    return (
        <ThemeProvider theme={theme}>
            <Outlet/>
            <Layout />

            <S.AirHotelTabDiv>
                <S.AirTabHeadingDiv>
                    <Link to="/airline">
                        <S.AirTabHeading>항공</S.AirTabHeading>
                    </Link>
                </S.AirTabHeadingDiv>
                <S.HotelTabHeadingDiv>
                    <Link to="/hotel">
                        <S.HotelTabHeading>호텔</S.HotelTabHeading>
                    </Link>
                </S.HotelTabHeadingDiv>
            </S.AirHotelTabDiv>

            {/* AirSwiper */}
            <AirSwiper />

            {/* TapComponent */}
            <TapComponent />

            <S.AirBanner1>
                <S.AirBannerImage src="/img/airbanner.png"></S.AirBannerImage>
            </S.AirBanner1>
            {/* AirWeekSale */}
            <AirWeekSale />
        </ThemeProvider>
    );
};

export default Airline;
