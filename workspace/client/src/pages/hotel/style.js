import styled from "styled-components";
import {
    flexCenterColumn,
    flexCenterRow,
    flexEvenlyCenter,
    flexSpaceAroundCenter,
} from "../../global/common";
import theme from "../../global/theme";

const S = {};

S.AirHotelTabDiv = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;

    & * {
        box-sizing: border-box;
    }
`;

S.AirTabHeadingDiv = styled.div`
    width: 100px;
    height: 50px;
    position: absolute;
    left: 198px;
    bottom: 8px;
    top: 7px;
`;

S.AirTabHeading = styled.div`
    color: #bdbfbf;
    text-align: left;
    font-family: ${theme.FONT_FAMILY.heading};
    font-size: 42px;
    line-height: 42px;
    font-weight: 700;
    position: absolute;
    left: 9px;
    top: calc(50% - 21px);
    width: 94px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.HotelTabHeadingDiv = styled.div`
    width: 100px;
    height: 50px;
    position: absolute;
    left: 311px;
    bottom: 8px;
    top: 7px;
`;

S.HotelTabHeading = styled.div`
    color: #37a551;
    text-align: left;
    font-family: ${theme.FONT_FAMILY.heading};
    font-size: 42px;
    line-height: 42px;
    font-weight: 700;
    position: absolute;
    width: 94px;
    left: 17px;
    top: calc(50% - 21px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;
//HotelSwiper=====================================
S.DivHotelSwiper = styled.div`
    position: relative;
    &* {
        box-sizing: border-box;
    }
`;

S.DivHotelSwiperContainer = styled.div`
    margin-top: 20px;
    width: 1920px;
    height: 490px;
    position: absolute;
    left: calc(50% - 960px);
    bottom: 0px;
    top: 0px;
    overflow: hidden;
`;

S.DivHotelSwiperBackGround = styled.div`
    background: #94b396;
    width: 578px;
    height: 490px;
    position: absolute;
    left: calc(50% - 960px);
    top: 0px;
`;

S.DivHotelSwiperImage = styled.div`
    background: rgba(255, 255, 255, 0);
    width: 1342px;
    position: absolute;
    left: calc(90%);
    bottom: 0px;
    top: 0px;
    box-shadow: -10px 10px 15px 0px rgba(17, 17, 17, 0.17);
`;

S.DivImageExplanation = styled.div`
    width: 1200px;
    position: absolute;
    left: calc(50% - 600px);
    bottom: 0px;
    top: 0px;
    overflow: hidden;
`;

S.ImageHotelSwiper = styled.img`
    width: 1342px;
    height: 490px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;

// SearchContainer=================================================

S.DivSearch = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    position: absolute;
    left: 0px;
    top: 800px;
    overflow: hidden;
`;

S.DivSearchContainer = styled.div`
    background: ${theme.PALLETE.bannerBackgroundColor.paleMint};
    border-radius: 20px;
    border: solid 2px;
    border-color: ${theme.PALLETE.primary.borderGreen300};
    width: 1200px;
    height: ${({ isExpanded }) => (isExpanded ? "400px" : "239px")};
    position: relative;
    box-shadow: 0px 3px 6px 0px rgba(17, 17, 17, 0.1);
    cursor: pointer;
    & * {
        box-sizing: border-box;
    }
`;

S.DivSearchForm = styled.div`
    width: 1086px;
    height: 100px;
    position: absolute;
    right: 57px;
    left: 57px;
    top: 40px;
`;

S.DivSearchFormTitle = styled.div`
    font-family: ${theme.FONT_FAMILY.heading};
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: ${theme.FONT_SIZE.h6};
    line-height: ${theme.FONT_LINE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 65px;
    height: 21px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivChoiceRegion = styled.div`
    background-color: ${theme.PALLETE.backgroundColor.white};
    border-radius: 20px;
    border-color: ${theme.PALLETE.backgroundColor.white};
    border-width: 1px;
    width: 284px;
    position: absolute;
    left: 84px;
    bottom: 0px;
    top: 0px;
    &:hover {
        border-color: ${theme.PALLETE.primary.mainGreen100};
    }
`;
S.InputChoiceRegion = styled.input`
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.regular};
    width: 220px;
    position: absolute;
    left: calc(50% - 110px);
    bottom: 40px;
    top: 40px;
    overflow: hidden;
    border: none;
    ${flexCenterColumn}
    text-align: center;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${theme.PALLETE.fontNatural[30]};
        text-align: center;
    }
`;

S.DivCheckInout = styled.div`
    background-color: ${theme.PALLETE.backgroundColor.white};
    border-radius: 20px;
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 1px;
    width: 240px;
    position: absolute;
    left: 388px;
    bottom: 0px;
    top: 0px;
    &:hover {
        border-color: #37a551;
    }
`;
S.DivCheckIn = styled.div`
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 0px 0px 1px 0px;
    height: 51px;
    position: absolute;
    right: 1px;
    left: 1px;
    top: 1px;
    cursor: pointer;
    &:hover {
        border-color: #37a551;
    }
`;

S.DivCheckInTitle = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: ${theme.FONT_SIZE.h9};
    line-height: 16px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 20px;
    top: 17.5px;
    width: 36px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivCheckInDate = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: ${theme.FONT_SIZE.h8};
    line-height: 19px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 95px;
    top: 15.5px;
    width: 113.12px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivCheckOutTitle = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    text-align: left;
    font-size: ${theme.FONT_SIZE.h9};
    line-height: 16px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 21px;
    top: 69.5px;
    width: 48px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivCheckOutDate = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: ${theme.FONT_SIZE.h8};
    line-height: 19px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 96px;
    top: 67.5px;
    width: 113.12px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivPerson = styled.div`
    background-color: ${theme.PALLETE.backgroundColor.white};
    border-radius: 20px;
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 1px;
    width: 100px;
    height: 102px;
    left: 648px;
    position: relative;
    cursor: pointer;
    &:hover {
        border-color: #37a551;
    }
`;

S.DivImagePerson = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 34px);
    overflow: hidden;
`;
S.ImagePerson = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
`;

S.DivPersonCount = styled.div`
    color: ${theme.PALLETE.fontNatural[70]};
    font-size: ${theme.FONT_SIZE.h7};
    line-height: 19px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    top: 65.5px;
    width: 100px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivRoom1 = styled.div`
    background-color: ${theme.PALLETE.backgroundColor.white};
    border-radius: 20px;
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 1px;
    width: 100px;
    height: 102px;
    position: absolute;
    left: 768px;
    top: 0px;
    cursor: pointer;
    &:hover {
        border-color: #37a551;
    }
`;

S.DivImageRoom1 = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 15px);
    top: calc(50% - 30px);
    overflow: hidden;
`;

S.ImageRoom = styled.img`
    width: 80%;
    height: 80%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
`;

S.DivRoomCount = styled.div`
    color: ${theme.PALLETE.fontNatural[70]};
    font-size: ${theme.FONT_SIZE.h7};
    line-height: 19px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 30.44px;
    top: 65.5px;
    width: 45px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.ButtonRoomSearch = styled.button`
    background-color: ${theme.PALLETE.primary.buttonBack};
    border-radius: 5px;
    width: 172px;
    height: 44px;
    position: absolute;
    left: calc(50% - -371px);
    top: calc(50% - 22px);
    cursor: pointer;
`;

S.DivRoomSearch = styled.div`
    color: ${theme.PALLETE.fontNatural[10]};
    font-size: 15px;
    line-height: 19px;
    font-weight: 600;
    position: absolute;
    left: calc(50% - 27.66px);
    top: 12.5px;
    width: 55.51px;
    height: 19px;
    ${flexCenterColumn}
`;

S.DivLatelySearchTitle = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: 15.9375px;
    line-height: 21px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 52px;
    top: 170px;
    width: 70px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivLatelySearchList = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: ${theme.FONT_SIZE.h7};
    line-height: 20px;
    font-weight: ${theme.FONT_WEIGHT.regular};
    position: absolute;
    left: 141px;
    top: 170px;
    width: 300px;
    height: 20px;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
`;

//HotelSlider===================================================

S.DivHotelSlider = styled.div`
    background: #ffffff;
    width: 1920px;
    height: 635px;
    position: relative;
    overflow: hidden;
    &* {
        box-sizing: border-box;
    }
`;

S.DivHotelSliderTitle = styled.div`
    color: #111111;
    font-size: 28.2421875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: 353px;
    top: 38px;
    width: 200px;
    height: 34px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelSliderContainer = styled.div`
    width: 1200px;
    height: 484px;
    position: absolute;
    left: calc(50% - 607px);
    top: 113px;
    overflow: hidden;
`;

//HotelBanner1===================================================
S.DivHotelBanner1 = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px;
    top: ${({ isExpanded }) => (isExpanded ? "1120px" : "1050px")};
    overflow: hidden;
    z-index: -1000;
`;
S.ImageHotelBanner1 = styled.img`
    border-radius: 20px;
    width: 1320px;
    height: 270px;
    margin-top: 40px;
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    z-index: -10;
`;

// MDRecommand=============================================

S.DivMdRecommand = styled.div`
    background: #f8f8f8;
    width: 100%;
    height: 705px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 1130px;
    margin-top: 20px;
    &* {
        box-sizing: border-box;
    }
`;
S.DivMdRecommandContainer = styled.div`
    width: 1625px;
    height: 705px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 20px;
`;

S.DivMdRecommandTitle = styled.div`
    color: ${theme.PALLETE.fontNatural[100]};
    font-size: ${theme.FONT_SIZE.h3};
    line-height: ${theme.FONT_LINE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    position: absolute;
    left: 130px;
    top: 0px;
    width: 140px;
    height: 36px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivHotelCardContainer = styled.div`
    width: 1225px;
    height: 585px;
    position: absolute;
    left: calc(50% - 612.5px);
    top: 80px;
    overflow: hidden;
`;

S.DivHotelCard = styled.div`
    width: 384px;
    height: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
S.DivHotelCardFirst = styled.div`
    width: 384px;
    position: absolute;
    left: 0px;
    bottom: 128px;
    top: 37px;
    overflow: hidden;
`;
S.ImageHotelCardFirst = styled.img`
    border-radius: 10px;
    width: 384px;
    height: 420px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
    &* {
        box-sizing: border-box;
    }
    &:hover {
        transform: scale(1.2);
    }
`;
S.DivHotelCardFirstContainer = styled.div`
    background: #ffffff;
    border-radius: 10px 10px 0px 10px;
    width: 330px;
    height: 198px;
    position: absolute;
    right: 841px;
    bottom: 42px;
    box-shadow: 10px 10px 25px 0px rgba(18, 18, 18, 0.3);
`;

S.ButtonHotelCardFirst = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    width: 270px;
    height: 54px;
    position: absolute;
    right: 30px;
    left: 30px;
    top: 30px;
    overflow: hidden;
`;

S.DivHotelCardFirstContent = styled.div`
    color: #000000;
    text-align: left;
    font-size: 20.625px;
    line-height: 30px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 263.04px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivHotelCardFirstNameContainer = styled.div`
    width: 270px;
    height: 20px;
    position: absolute;
    right: 30px;
    left: 30px;
    top: 108px;
    overflow: hidden;
`;
S.DivHotelCardFirstName = styled.div`
    color: #888888;
    text-align: left;
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 270px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelCardFirstPrice = styled.div`
    color: #000000;
    text-align: right;
    font-size: 23.4375px;
    line-height: 30px;
    font-weight: 700;
    position: absolute;
    right: 64.64px;
    top: 147.5px;
    width: 150.22px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivHotelCardFirstWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 18.75px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    right: 29.8px;
    top: 149px;
    width: 35.04px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
S.DivHotelCardSecond = styled.div`
    width: 384px;
    position: absolute;
    left: 404px;
    bottom: 128px;
    top: 37px;
    overflow: hidden;
`;
S.ImageHotelCardSecond = styled.img`
    border-radius: 10px;
    width: 384px;
    height: 420px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;
S.DivHotelCardSecondContainer = styled.div`
    background: #ffffff;
    border-radius: 10px 10px 0px 10px;
    width: 330px;
    height: 198px;
    position: absolute;
    right: 437px;
    bottom: 42px;
    box-shadow: 10px 10px 25px 0px rgba(18, 18, 18, 0.3);
`;

S.ButtonHotelCardSecond = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    width: 270px;
    height: 54px;
    right: 30px;
    left: 30px;
    top: 30px;
    position: relative;
    overflow: hidden;
`;

S.DivHotelCardSecondContent = styled.div`
    color: #000000;
    text-align: left;
    font-size: 20.625px;
    line-height: 30px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 119.51px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelCardSecondNameContainer = styled.div`
    width: 270px;
    height: 20px;
    position: absolute;
    right: 30px;
    left: 30px;
    top: 108px;
    overflow: hidden;
`;

S.DivHotelCardSecondName = styled.div`
    color: #888888;
    text-align: left;
    font-size: 15.8046875px;
    line-height: 23px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 230px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelCardSecondPrice = styled.div`
    color: #000000;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    position: absolute;
    right: 64.64px;
    top: 147.5px;
    width: 150px;
    height: 30px;
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: flex-end;
`;

S.DivHotelCardSecondWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 18.75px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    right: 29.8px;
    top: 149px;
    width: 35.04px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivHotelCardThird = styled.div`
    width: 384px;
    position: absolute;
    left: 808px;
    bottom: 128px;
    top: 37px;
    overflow: hidden;
`;

S.ImageHotelCardThird = styled.img`
    border-radius: 10px;
    width: 384px;
    height: 420px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;
S.DivHotelCardThirdContainer = styled.div`
    background: #ffffff;
    border-radius: 10px 10px 0px 10px;
    width: 330px;
    height: 198px;
    position: absolute;
    right: 33px;
    bottom: 42px;
    box-shadow: 10px 10px 25px 0px rgba(18, 18, 18, 0.3);
`;

S.ButtonHotelCardThird = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    width: 270px;
    height: 54px;
    right: 30px;
    left: 30px;
    top: 30px;
    position: relative;
    overflow: hidden;
`;

S.DivHotelCardThirdContent = styled.div`
    color: #000000;
    text-align: left;
    font-size: 20.625px;
    line-height: 30px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 220.78px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelCardThirdNameContainer = styled.div`
    width: 300px;
    height: 20px;
    position: absolute;
    right: 30px;
    left: 30px;
    top: 108px;
    overflow: hidden;
`;
S.DivHotelCardThirdName = styled.div`
    color: #888888;
    text-align: left;
    font-size: 15.8046875px;
    line-height: 23px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 300px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelCardThirdPrice = styled.div`
    color: #000000;
    text-align: right;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    position: absolute;
    right: 64.64px;
    top: 147.5px;
    width: 150px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivHotelCardThirdWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 18.75px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    right: 29.8px;
    top: 149px;
    width: 35.04px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// PopularHotelSwiper=====================================

S.DivPopluarHaveTo = styled.div`
    background: #f8f8f8;
    width: 100%;
    height: 950px;
    top: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    &* {
        box-sizing: border-box;
    }
`;

S.DivPopluarHaveToFrame = styled.div`
    width: 1276px;
    height: 948px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

S.DivPopluarTitle = styled.div`
    color: #000000;
    text-align: left;
    font-size: 28.2421875px;
    line-height: 36px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 195.53px;
    height: 34px;
`;

S.DivPopluarContainer = styled.div`
    background: #fbfbfb;
    border-radius: 10px;
    width: 583px;
    height: 832px;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    position: absolute;
    right: 177px;
    left: 10px;
    top: 100px;
    box-shadow: 0px 0px 6px 0px rgba(17, 17, 17, 0.15);
`;
S.DivPopluarFrame = styled.div`
    width: 417px;
    height: 724px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(50% - 207.5px);
    top: 60px;
    overflow: hidden;
`;

S.ButtonPopluarFirst = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    width: 196.5px;
    height: 330px;
    position: absolute;
    right: 220.5px;
    left: 0px;
    top: 0px;
`;
S.DivPopluarFirstTitleFrame = styled.div`
    width: 196.5px;
    height: 19px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 190px;
    overflow: hidden;
`;
S.DivPopluarFirstTitle = styled.div`
    color: #009c75;
    text-align: left;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 55.51px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarFirstNameFrame = styled.div`
    width: 196.5px;
    height: 45px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 215px;
    overflow: hidden;
`;

S.DivPopluarFirstName = styled.div`
    color: #000000;
    text-align: left;
    font-size: 16.875px;
    line-height: 24px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 133.2px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarFirstPrice = styled.div`
    color: #000000;
    text-align: right;
    font-size: 20px;
    line-height: 19px;
    font-weight: 700;
    position: absolute;
    right: 27.67px;
    top: 305.5px;
    width: 84.39px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivPopluarFirstWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 15px;
    line-height: 19px;
    font-weight: 400;
    position: absolute;
    right: -0.21px;
    top: 307px;
    width: 28.08px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivPopluarFirst = styled.div`
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    bottom: 150px;
    top: 0px;
    overflow: hidden;
`;
S.ImagePopluarFirst = styled.img`
    border-radius: 10px;
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;

S.ButtonPopluarSecond = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    height: 330px;
    width: 196.5px;
    position: absolute;
    right: 220.5px;
    left: 0px;
    top: 370px;
`;
S.DivPopluarSecond = styled.div`
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    bottom: 150px;
    top: 0px;
    overflow: hidden;
`;
S.ImagePopluarSecond = styled.img`
    border-radius: 10px;
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;
S.DivPopluarSecondTitleFrame = styled.div`
    width: 196.5px;
    height: 19px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 190px;
    overflow: hidden;
`;
S.DivPopluarSecondTitle = styled.div`
    color: #009c75;
    text-align: left;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 55.51px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarSecondNameFrame = styled.div`
    width: 196.5px;
    height: 45px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 215px;
    overflow: hidden;
`;

S.DivPopluarSecondName = styled.div`
    color: #000000;
    text-align: left;
    font-size: 16.875px;
    line-height: 24px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 195.43px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarSecondPrice = styled.div`
    color: #000000;
    text-align: right;
    font-size: 20px;
    line-height: 19px;
    font-weight: 700;
    position: absolute;
    right: 27.67px;
    top: 305.5px;
    width: 84.39px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
S.DivPopluarSecondWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 15px;
    line-height: 19px;
    font-weight: 400;
    position: absolute;
    right: -0.21px;
    top: 307px;
    width: 28.08px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.ButtonPopluarThird = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    width: 196.5px;
    height: 330px;
    position: absolute;
    right: 0px;
    left: 220.5px;
    top: 0px;
`;

S.DivPopluarThirdName = styled.div`
    color: #000000;
    text-align: left;
    font-size: 16.875px;
    line-height: 24px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 168.59px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarThirdPrice = styled.div`
    color: #000000;
    font-size: 20px;
    line-height: 19px;
    font-weight: 700;
    position: absolute;
    right: 27.67px;
    top: 305.5px;
    width: 84.39px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
S.ImagePopluarThird = styled.img`
    border-radius: 10px;
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;
S.DivPopluarThird = styled.div`
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    bottom: 150px;
    top: 0px;
    overflow: hidden;
`;

S.DivPopluarThridTitleFrame = styled.div`
    width: 196.5px;
    height: 19px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 190px;
    overflow: hidden;
`;
S.DivPopluarThridTitle = styled.div`
    color: #009c75;
    text-align: left;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 55.51px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarThirdNameFrame = styled.div`
    width: 196.5px;
    height: 45px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 215px;
    overflow: hidden;
`;

S.DivPopluarThridWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 15px;
    line-height: 19px;
    font-weight: 400;
    position: absolute;
    right: -0.21px;
    top: 307px;
    width: 28.08px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.ButtonPopluarFourth = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    width: 196.5px;
    height: 330px;
    position: absolute;
    right: 0px;
    left: 220.5px;
    top: 370px;
`;
S.DivPopluarFourth = styled.div`
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    bottom: 150px;
    top: 0px;
    overflow: hidden;
`;
S.ImagePopluarFourth = styled.img`
    border-radius: 10px;
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;

S.DivPopluarThridFourthFrame = styled.div`
    width: 196.5px;
    height: 19px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 190px;
    overflow: hidden;
`;
S.DivPopluarFourthTitle = styled.div`
    color: #009c75;
    text-align: left;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 55.51px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarFourthNameFrame = styled.div`
    width: 196.5px;
    height: 45px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 215px;
    overflow: hidden;
`;
S.DivPopluarFourthName = styled.div`
    color: #000000;
    text-align: left;
    font-size: 16.875px;
    line-height: 24px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 157.31px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPopluarFourthPrice = styled.div`
    color: #000000;
    text-align: right;
    font-size: 20px;
    line-height: 19px;
    font-weight: 700;
    position: absolute;
    right: 27.67px;
    top: 305.5px;
    width: 84.39px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivPopluarFourthWon = styled.div`
    color: #000000;
    text-align: right;
    font-size: 15px;
    line-height: 19px;
    font-weight: 400;
    position: absolute;
    right: -0.21px;
    top: 307px;
    width: 28.08px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivPopluarArrowFrame1 = styled.div`
    background: #ffffff;
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 1px;
    width: 36px;
    height: 4.32%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 21px;
    bottom: 47.24%;
    top: 48.44%;
`;

S.DivPopluarArrowLeft = styled.div`
    width: 94.44%;
    height: 94.67%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2.78%;
    left: 2.78%;
    bottom: 2.54%;
    top: 2.78%;
    overflow: visible;
`;

S.ImagePopluarArrowRight = styled.div`
    width: 94.44%;
    height: 94.67%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2.78%;
    left: 2.78%;
    bottom: 2.54%;
    top: 2.78%;
    overflow: visible;
`;

S.DivPopluarArrowFrame2 = styled.div`
    background: #ffffff;
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 1px;
    width: 36px;
    height: 4.32%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    bottom: 47.24%;
    top: 48.44%;
`;

S.DivHaveToGoHere = styled.div`
    color: #000000;
    text-align: left;
    font-size: 28.2421875px;
    line-height: 36px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 650px;
    width: 250.22px;
    height: 34px;
`;
S.DivHaveToGoHereContainer = styled.div`
    background: rgba(255, 255, 255, 0);
    border-radius: 10px;
    width: 583px;
    height: 832px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 650px;
    top: 100px;
    box-shadow: 0px 0px 6px 0px rgba(17, 17, 17, 0.15);
`;

S.DivHaveToGoHereFrame = styled.div``;

S.ButtonHaveToGoHere = styled.button`
    background-color: ${theme.PALLETE.backgroundColor.white};
    height: 632px;
    width: 417px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 20px;
`;

S.DivHaveToGoHereHotelFrame = styled.div`
    width: 417px;
    height: 22px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 468px;
    overflow: hidden;
`;

S.DivHaveToGoHereHotel = styled.div`
    color: #009c75;
    text-align: left;
    font-size: 16.875px;
    line-height: 22px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 65px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHaveToGoHereHotelNameFrame = styled.div`
    width: 417px;
    height: 29px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 506px;
    overflow: hidden;
`;

S.DivHaveToGoHereHotelName = styled.div`
    color: #000000;
    text-align: left;
    font-size: 22.5px;
    line-height: 30px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: -0.5px;
    width: 245.45px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHaveToGoHereHotelPrice = styled.div`
    color: #000000;
    text-align: right;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
    position: absolute;
    right: 38.13px;
    top: 600.5px;
    width: 160px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivHaveToGoHereImageFrame = styled.div`
    width: 416px;
    height: 452px;
    position: absolute;
    left: 0px;
    bottom: 180px;
    top: 0px;
    overflow: hidden;
`;
S.ImageHaveToGoHere = styled.img`
    border-radius: 10px;
    width: 416px;
    height: 452px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

// HotelLocation Style========================================================
S.DivHotelLocationtWrapper = styled.div`
    background: ${({ theme }) =>
        theme.PALLETE.bannerBackgroundColor["paleMint"]};
    border-radius: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.PALLETE.primary["buttonBack"]};
    border-width: 3px;
    width: 550px;
    height: 230px;
    position: absolute;
    top: 110px;
    z-index: 10;
    &* {
        box-sizing: border-box;
    }
`;

S.DivHotelLocationFrame = styled.div`
    height: 210px;
    margin: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`;
S.DivHotelLocationTitleFrame = styled.div`
    display: flex;
    flex-direction: row;
    width: 55px;
    left: 110px;
`;
S.DivHotelLocationTitle = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural[100]};
    width: 70px;
    height: 24px;
    position: relative;
    text-align: center;
`;
S.DivHotelLocationItemFrame = styled.div`
    display: flex;
    flex-direction: row; // 아이템들을 가로 방향으로 나열
    flex-wrap: wrap; // 필요시 다음 줄로 넘김
    gap: 20px; // 아이템 간 간격 조정
`;

S.DivHotelLocation = styled.div`
    background-color: white;
    border-radius: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    border-width: 2px;
    color: ${({ theme }) => theme.PALLETE.fontNatural[10]};
    width: 70px;
    height: 35px;
    display: flex;
    flex-direction: row; // 아이템들을 가로 방향으로 나열
    flex-wrap: wrap; // 필요시 다음 줄로 넘김
    gap: 20px; // 아이템 간 간격 조정
    text-align: center;
    margin-top: 10px;
`;

S.DivCityRow = styled.div`
    padding: 10px;
    width: 100%; // 전체 너비 사용
`;

// HotelCalrendar Style========================================================

// PersonSeatComponent Style==================================================

S.DivPesonChoice = styled.div`
    background: ${({ theme }) =>
        theme.PALLETE.bannerBackgroundColor["paleMint"]};
    border-radius: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.PALLETE.primary["buttonBack"]};
    border-width: 3px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 371px;
    height: 240px;
    left: 650px;
    top: 10px;
    position: relative;
    overflow: hidden;
    z-index: 1000;
`;
S.DivRoomChoice = styled.div`
    background: ${({ theme }) =>
        theme.PALLETE.bannerBackgroundColor["paleMint"]};
    border-radius: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.PALLETE.primary["buttonBack"]};
    border-width: 3px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 371px;
    height: 200px;
    left: 770px;
    top: 10px;
    position: relative;
    overflow: hidden;
    z-index: 1000;
`;

S.DivPersonChoiceFrame = styled.div`
    padding: 15px 9px 15px 9px;
    flex-shrink: 0;
    width: 331px;
    height: 250px;
    position: relative;
    overflow: hidden;
`;

S.DivRoomChoiceFrame = styled.div`
    padding: 15px 9px 15px 9px;
    flex-shrink: 0;
    width: 331px;
    height: 150px;
    position: relative;
    overflow: hidden;
`;

S.PesonChoiceTitle1 = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: left;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: 0px;
    top: 0px;
    width: 331px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.RoomChoiceTitle1 = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: left;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: 0px;
    top: 0px;
    width: 331px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAdultFrame = styled.div`
    width: 331px;
    height: 144px;
    position: absolute;
    left: 0px;
    top: 35px;
`;

S.DivAdult = styled.div`
    width: 331px;
    height: 48px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

S.DivAdultTitle = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    position: absolute;
    left: 7px;
    top: 14px;
    width: 30px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivImageAdult = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 38px;
    top: 17px;
    overflow: visible;
`;

S.DivAdultCountFrame = styled.div`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 68px;
    height: 40px;
    position: absolute;
    left: 199px;
    top: 2px;
`;

S.InputAdultCount = styled.input`
    border-radius: 10px;
    color: #006516;
    text-align: center;
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    left: 2px;
    top: 2px;
    width: 61px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
`;

S.ButtonAdult = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 273px;
    top: 10px;
`;
S.ButtonAdultInput = styled.input`
    color: #006516;
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    left: 4px;
    top: 2px;
    width: 61px;
    height: 35px;
    ${flexCenterColumn}
`;
S.MinusButtonAdult = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 169px;
    top: 11px;
    cursor: pointer;
`;
S.DivMinusButtonAdult = styled.div`
    color: #006516;
    font-size: 24px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    right: 9px;
    left: 10px;
    top: -1px;
    height: 20px;
    ${flexCenterColumn}
`;
S.PlusButtonAdult = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 273px;
    top: 10px;
    cursor: pointer;
`;
S.DivPlusButtonAdult = styled.div`
    color: #006516;
    font-size: 24px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    right: 9px;
    left: 9px;
    bottom: 3px;
    top: 0px;
    ${flexCenterColumn}
`;

S.DivChildren = styled.div`
    width: 331px;
    height: 48px;
    position: absolute;
    left: 0px;
    top: 48px;
    overflow: hidden;
`;
S.DivChildrenTitle = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    position: absolute;
    left: 7px;
    top: 14px;
    width: 30px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivImageChildren = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 38px;
    top: 17px;
    overflow: visible;
`;
S.ButtonChildren = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 68px;
    height: 40px;
    position: absolute;
    left: 199px;
    top: 2px;
`;
S.InputChildrenCount = styled.input`
    color: #006516;
    border-radius: 10px;
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    left: 2px;
    top: 2px;
    width: 61px;
    height: 35px;
    border: none;
    outline: none;
    text-align: center;
    ${flexCenterColumn}
`;
S.MinusButtonChildren = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 169px;
    top: 11px;
`;
S.DivMinusButtonChildren = styled.div`
    color: #006516;
    text-align: center;
    font-size: 24px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    right: 9px;
    left: 10px;
    top: -1px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
S.PlusButtonChildren = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 273px;
    top: 11px;
`;
S.DivPlusButtonChildren = styled.div`
    color: #006516;
    font-size: 20px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    right: 9px;
    left: 10px;
    bottom: 4px;
    top: 0px;
    ${flexCenterColumn}
`;

S.DivRoomFrame = styled.div`
    width: 331px;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 35px;
`;

S.DivRoom2 = styled.div`
    width: 331px;
    height: 48px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

S.DivRoomTitle = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    position: absolute;
    left: 7px;
    top: 14px;
    width: 30px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivImageRoom2 = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 38px;
    top: 17px;
    overflow: visible;
`;

S.DivRoomCountFrame = styled.div`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 68px;
    height: 40px;
    position: absolute;
    left: 199px;
    top: 2px;
`;

S.InputRoomCount = styled.input`
    border-radius: 10px;
    color: #006516;
    text-align: center;
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    left: 2px;
    top: 2px;
    width: 61px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
`;

S.ButtonRoom = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 273px;
    top: 10px;
`;
S.ButtonRoomInput = styled.input`
    color: #006516;
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    left: 4px;
    top: 2px;
    width: 61px;
    height: 35px;
    ${flexCenterColumn}
`;
S.MinusButtonRoom = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 169px;
    top: 11px;
    cursor: pointer;
`;
S.DivMinusButtonRoom = styled.div`
    color: #006516;
    font-size: 24px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    right: 9px;
    left: 10px;
    top: -1px;
    height: 20px;
    ${flexCenterColumn}
`;
S.PlusButtonRoom = styled.button`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 1px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 273px;
    top: 10px;
    cursor: pointer;
`;
S.DivPlusButtonRoom = styled.div`
    color: #006516;
    font-size: 24px;
    line-height: 15px;
    font-weight: 400;
    position: absolute;
    right: 9px;
    left: 9px;
    bottom: 3px;
    top: 0px;
    ${flexCenterColumn}
`;

S.DivChoiceFinish = styled.div`
    color: #ffffff;
    font-size: 15px;
    line-height: 19px;
    font-weight: 600;
    position: absolute;
    left: calc(50% - 27.66px);
    top: 12.5px;
    width: 55.51px;
    height: 19px;
    ${flexCenterColumn}
    overflow: hidden;
`;

S.ButtonChoiceFinish1 = styled.button`
    background: #94b396;
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    width: 172px;
    height: 44px;
    position: absolute;
    left: 79px;
    top: 154px;
`;

S.ButtonChoiceFinish2 = styled.button`
    background: #94b396;
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    width: 172px;
    height: 44px;
    position: absolute;
    left: 79px;
    top: 104px;
`;
export default S;
