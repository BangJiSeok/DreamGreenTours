import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../../global/common";

const S = {};

S.DivHederImage = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    right: 0px;
    left: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    ${flexCenter}
`;

S.DivHearderInImage = styled.div`
    color: #ffffff;
    font-size: 33.8671875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: calc(50% - 98.75px);
    top: calc(50% - 39px);
    width: 61.97px;
    height: 41px;
    text-align: center;
    ${flexCenter}
`;

S.DivDeaArrFrame = styled.div`
    width: 197.7px;
    height: 41px;
    position: absolute;
    ${flexCenter}
`;

S.ImageChangeArrow = styled.img`
    width: 26px;
    height: 26px;
    position: relative;
`;
S.DivChageArrowInSide = styled.div`
    color: #333333;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 50011.98px);
    top: calc(50% - 15px);
    width: 25.47px;
    height: 17px;
    ${flexCenter}
`;

S.DivDeaArrFont1 = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 33.8671875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: calc(50% - 98.85px);
    top: calc(50% - 20.5px);
    width: 70px;
    height: 41px;
    ${flexCenter}
`;

S.DivDeaArrFont2 = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 33.8671875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: calc(40% - -46.01px);
    top: calc(50% - 20.5px);
    height: 41px;
    ${flexCenter}
`;

S.DivSchduelFrame = styled.div`
    width: 1200px;
    height: 21px;
    position: absolute;
    ${flexCenter}
    top: 58px;
`;

S.DivChangeFrame = styled.div`
    border-radius: 10px;
    border-style: solid;
    border-color: #ffffff;
    border-width: 1px;
    width: 100px;
    height: 40px;
    position: absolute;
    left: calc(50% - -537px);
    top: 34px;
`;

S.DivAirListFrame = styled.div`
    width: 1220px;
    height: 1371px;
    position: absolute;
    left: 206px;
    top: 200px;
    overflow: hidden;
`;

S.DivFilterFrame = styled.div`
    width: 924px;
    height: 58px;
    left: 302px;
    top: 15px;
    position: absolute;
    overflow: hidden;
    ${flexCenter}
`;

S.ImageFilter = styled.div`
    width: 17px;
    height: 17px;
    position: absolute;
    left: 8px;
    top: calc(50% - 8px);
    object-fit: cover;
`;

S.DivFilter = styled.div`
    color: #111111;
    text-align: left;
    font-size: 17px;
    line-height: 17px;
    font-weight: 400;
    position: absolute;
    left: 31px;
    top: 18px;
    width: 35.19px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivFilterCounterFrame = styled.div`
    background: #37a561;
    border-radius: 12px;
    width: 24px;
    height: 24.5px;
    position: absolute;
    left: 64px;
    top: calc(50% - 12px);
`;

S.DivFilterCounter = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    position: absolute;
    left: 9.35px;
    top: calc(50% - 12.25px);
    width: 5.51px;
    height: 24px;
    ${flexCenter}
`;

S.DivFilterActive = styled.div`
    background: #eef0f3;
    border-radius: 10px;
    width: 90px;
    height: 30px;
    position: absolute;
    left: 91px;
    top: 13px;
    cursor: pointer;
`;

S.DivFilterActiveFont = styled.div`
    color: #333333;
    text-align: left;
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
    position: absolute;
    left: 10px;
    top: 7px;
    width: 76.73px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

// FliterConatainer==============================================================
S.DivFilterContainerFrame = styled.div`
    width: 244px;
    height: 1230px;
    position: absolute;
    left: 0;
    top: 0;
`;

S.DivFilterHeader = styled.div`
    width: 244px;
    height: 18px;
    position: absolute;
    left: 0px;
    top: 0px;
`;

S.DivResultInSearch = styled.div`
    text-align: left;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivInitializationFrame = styled.div`
    width: 52.51px;
    height: 15px;
    position: absolute;
    left: 112px;
    top: 2px;
`;

S.DivInitializationImage = styled.div`
    width: 18px;
    height: 18px;
    position: absolute;
    left: 0px;
    overflow: hidden;
`;

S.ImageInitialization = styled.img`
    height: auto;
    position: absolute;
    left: 1.38px;
    overflow: visible;
`;

S.DivInitiakuzationFont = styled.div`
    color: #333333;
    text-align: left;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    position: absolute;
    left: 20px;
    top: 0px;
    width: 36px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.ButtonAllClose = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    color: #111111;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    text-decoration: underline;
    position: absolute;
    left: 75px;
    width: 60px;
    height: 15px;
    ${flexCenter}
`;

S.DivWholeFrame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 240px;
    height: 190px;
    top: 50px;
    position: relative;
`;

S.DivWholeTitleTogleFrame = styled.div`
    width: 240px;
    height: 24px;
    position: absolute;
    left: 0px;
    top: 20px;
`;

S.DivWholeTitle = styled.div`
    color: #111111;
    text-align: left;
    font-size: 14.8828125px;
    line-height: 15px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    width: 59.09px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivActiveTogle = styled.div`
    background: var(--green-200-accent, #37a551);
    border-radius: 12px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: flex-end;
    width: 48px;
    position: absolute;
    left: 192px;
    top: 0px;
`;

S.DivActiveTogleCircle = styled.div`
    background: var(--system-white, #ffffff);
    border-radius: 50%;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    position: relative;
`;

S.DivDeactiveTogle = styled.div`
    background: var(--gray-50, #d6d7d9);
    border-radius: 12px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: flex-start;
    width: 48px;
    position: relative;
`;

S.DivDeactiveTogleCircle = styled.div`
    background: var(--system-white, #ffffff);
    border-radius: 50%;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    position: relative;
`;

S.DivDirectCountFrame = styled.div`
    border-radius: 6px;
    height: 24px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 70px;
`;

// ListContainer=================================
S.DivAirListConatainer = styled.div`
    width: 924px;
    height: 1268px;
    position: absolute;
    left: 296px;
    top: 103px;
`;

S.DivAirListHeaderFrame = styled.div`
    border-style: solid;
    border-color: #eeeeee;
    border-width: 0px 0px 1px 0px;
    width: 917px;
    height: 40px;
    position: absolute;
    right: 7px;
    left: 0px;
    top: 0px;
`;

S.DivAirListHeaderTitle = styled.div`
    color: #111111;
    text-align: left;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: -0.4px;
    font-weight: 700;
    position: absolute;
    top: 3px;
    width: 170px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAirListSchduel = styled.div`
    color: #666666;
    text-align: left;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 170px;
    top: 9px;
    width: 97.96px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAirListPriceNotice = styled.div`
    color: #666666;
    text-align: left;
    font-size: 13px;
    line-height: 19.5px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 729.06px;
    top: 4px;
    width: 150px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAirListHeaderDefArrFrame = styled.div`
    width: 162.59px;
    height: 23px;
    position: absolute;
    left: 270px;
    top: 6px;
`;

S.DivAirListHeaderDot = styled.div`
    background: #cccccc;
    border-radius: 1.5px;
    width: 3px;
    height: 13.04%;
    position: absolute;
    left: 0px;
    bottom: 45.65%;
    top: 41.3%;
`;

S.DivAirListHeaderDefArr = styled.div`
    color: #666666;
    text-align: left;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 9px;
    top: 3px;
    width: 153.91px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAirListCountFilterContainer = styled.div`
    width: 924px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 58px;
    overflow: hidden;
`;

S.DivAirListConutFrame = styled.div`
    text-align: left;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.4px;
    font-weight: 700;
    position: absolute;
    left: 14px;
    top: 11px;
    width: 49px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.SpanAirListConut1 = styled.span`
    color: #111111;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.4px;
    font-weight: 700;
`;

S.SpanAirListConut2 = styled.span`
    color: #006516;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.4px;
    font-weight: 700;
`;

S.SpanAirListConut3 = styled.span`
    color: #111111;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.4px;
    font-weight: 700;
`;

S.DivAirListFilterFrame = styled.div`
    width: 600px;
    height: 17px;
    position: absolute;
    left: 490px;
    top: 12px;
`;

S.DivAirListFilterList1 = styled.div`
    color: #006516;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 45px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivAirListFilterList2 = styled.div`
    color: #333333;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 57.45px;
    top: 0px;
    width: 70px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivAirListFilterList3 = styled.div`
    color: #333333;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 140px;
    top: 0px;
    width: 100px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivAirListFilterList4 = styled.div`
    color: #37a591;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 250px;
    width: 110px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivAirListCardContainer = styled.div`
    width: 924px;
    height: 1161px;
    position: absolute;
    left: 0px;
    top: 107px;
    overflow: hidden;
`;

S.DivBestContainer = styled.div`
    background: #37a551;
    border-radius: 8px;
    height: 22px;
    position: absolute;
    right: 810.69px;
    left: 0px;
    top: 0px;
`;

S.DivAirListCardFrame = styled.div`
    border-radius: 8px;
    border-style: solid;
    border-color: #37a561;
    border-width: 1px;
    height: 140px;
    position: relative;
    top: 9px;
`;

S.DivBest1 = styled.div`
    color: #ffffff;
    text-align: left;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 6px;
    top: 4px;
    width: 29.12px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivBest2 = styled.div`
    background: #ffffff;
    opacity: 0.5;
    width: 2px;
    height: 2px;
    position: absolute;
    left: 36.75px;
    top: 10px;
`;

S.DivBest3 = styled.div`
    color: #ffffff;
    text-align: left;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 40.75px;
    top: 4px;
    width: 50px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivListContainer = styled.div`
    width: 808px;
    height: 73px;
    position: absolute;
    left: 41px;
    top: 39px;
`;

S.DivDetailSchduelContainer = styled.div`
    border-radius: 10px;
    border-style: solid;
    border-color: #37a551;
    border-width: 1px;
    height: 28px;
    position: absolute;
    right: 715px;
    left: 21px;
    top: 45px;
`;

S.DivDetailSchduel = styled.div`
    color: #111111;
    text-align: center;
    font-family: "NotoSansKr-DemiLight", sans-serif;
    font-size: 13px;
    line-height: 26px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 36px);
    top: 6px;
    width: 72.94px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivAirListCardImageFlight = styled.div`
    width: 100px;
    height: 16px;
    position: absolute;
    left: 0px;
    top: 0px;
`;

S.ImageFlight = styled.img`
    width: 20px;
    height: 14px;
    position: relative;
    left: 0px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;

S.DivAirListCardFlightName = styled.div`
    color: #111111;
    text-align: left;
    font-size: 15.875px;
    line-height: 16px;
    letter-spacing: -0.32px;
    font-weight: 700;
    position: absolute;
    left: 37px;
    top: 0px;
    width: 65px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAirListCardDefContainer = styled.div`
    width: 262.3px;
    height: 44px;
    position: absolute;
    left: 212px;
    top: 19.5px;
`;

S.DivAirListCardDefFrame = styled.div`
    width: 51.12px;
    height: 44px;
    position: absolute;
    left: 0px;
    top: 0px;
`;

S.DivAirListCardDefTime = styled.div`
    color: #111111;
    text-align: center;
    font-family: "NotoSansKr-Bold", sans-serif;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.4px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 51.12px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivAirListCardDefFlight = styled.div`
    color: #111111;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 11.72px);
    top: 30px;
    width: 23.57px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivAirListCardArrFrame = styled.div`
    width: 50px;
    height: 44px;
    position: absolute;
    left: 214.83px;
    top: 0px;
`;

S.DivAirListCardArrTime = styled.div`
    color: #111111;
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.4px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 47.47px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivAirListCardArrFlight = styled.div`
    color: #111111;
    text-align: center;
    font-family: "NotoSansKr-DemiLight", sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 13.4px);
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivAirListCardFlightTimeContainer = styled.div`
    width: 121px;
    height: 10px;
    position: absolute;
    left: 71.47px;
    top: 9px;
`;

S.DivAirListCardFlightTimeFrame = styled.div`
    width: 121px;
    height: 100%;
    position: absolute;
    left: 0px;
    bottom: 0%;
    top: 0%;
`;

S.ImgaeAirListCardFlightTime = styled.img`
    width: 118px;
    height: 6px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
S.DivAirListCardFlightTime = styled.div`
    color: #888888;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 27.14px);
    top: -22px;
    width: 54.65px;
    height: 12px;
    display: flex;
    align-items: center;
`;

S.DivAirListCardFlightDirect = styled.div`
    color: #666666;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 11.14px);
    top: 13px;
    width: 25px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivAirListCardPriceFrame = styled.div`
    width: 99.12px;
    height: 27px;
    position: absolute;
    left: 607.2px;
    top: 12.5px;
`;
S.DivAirListCardPrice = styled.div`
    color: #333333;
    text-align: right;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.4px;
    font-weight: 700;
    position: absolute;
    right: 24.5px;
    top: 0px;
    width: 74.61px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
S.DivAirListCardPriceWon = styled.div`
    color: #333333;
    text-align: right;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    right: 0px;
    top: 4px;
    width: 30px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivAirListCardChoiceFrame = styled.div`
    background: #94b396;
    border-radius: 10px;
    width: 62px;
    height: 46px;
    position: absolute;
    left: 746px;
    top: 3px;
`;

S.DivAirListCardChoice = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 14.33px);
    top: 13px;
    width: 35px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

S.FlightSchduelFrame = styled.div`
    color: #ffffff;
    width: 515px;
    height: 34px;
`;

S.ImageFlightSchduel = styled.img`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`;

S.ImageFlightSchdue2 = styled.img`
    margin-left: 20px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
`;

S.DivFilterInitContainer = styled.div`
    background: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #c2c2c2;
    border-width: 1px;
    width: 100px;
    height: 32px;
    position: absolute;
    left: 190px;
    top: 13px;
    cursor: pointer;
`;

S.ImageFilterInit = styled.div`
    background: #ffffff;
    border-radius: 6px;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 11px;
    top: calc(50% - 7.27px);
    object-fit: cover;
    cursor: pointer;
`;

S.DivFilterInit = styled.div`
    color: #666666;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: -0.4px;
    font-weight: 400;
    position: absolute;
    left: 30px;
    top: 8px;
    width: 60px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export default S;
