import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global/global";
import theme from "../../global/theme";
import Layout from "../layout/Layout";
import S from "./style";
import { Link } from "react-router-dom";
import HotelSwiper from "./HotelSwiper";
import HotelSearchContainer from "./HotelSearchContainer";
import MdRecommand from "./MdRecommand";
import PopularHotelSwiper from "./PopularHotelSwiper";


const Hotel = () => {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
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

            <HotelSwiper />
            <HotelSearchContainer />

            <S.DivHotelBanner1>
                <S.ImageHotelBanner1 src="/img/hotelBanner1.png"></S.ImageHotelBanner1>
            </S.DivHotelBanner1>

            <MdRecommand />

            <PopularHotelSwiper />
        </ThemeProvider>
    );
};

export default Hotel;
