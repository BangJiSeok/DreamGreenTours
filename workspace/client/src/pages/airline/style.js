import styled from "styled-components";
import {
    flexCenter,
    flexCenterColumn,
    flexCenterRow,
    flexEvenlyCenter,
    flexSpaceAroundCenter,
} from "../../global/common";
import theme from "../../global/theme";

const S = {};

S.DivVisualRoll = styled.div`
    padding: 30px 0px 30px 0px;
    gap: 10px;
    position: relative;
    width: 1907px;
    height: 550px;
    left: calc(50% - 947px);
    top: calc(50% - 3023px);
    overflow: hidden;
    ${flexCenterColumn}
    & * {
        box-sizing: border-box;
    }
`;

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
    font-family: ${theme.FONT_FAMILY.heading};
    width: 100px;
    height: 50px;
    position: absolute;
    left: 198px;
    bottom: 8px;
    top: 7px;
`;

S.AirTabHeading = styled.div`
    color: #37a551;
    text-align: left;
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
    font-family: ${theme.FONT_FAMILY.heading};
    width: 100px;
    height: 50px;
    position: absolute;
    left: 311px;
    bottom: 8px;
    top: 7px;
`;

S.HotelTabHeading = styled.div`
    color: #bdbfbf;
    text-align: left;
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

S.SearchDiv = styled.div`
    box-sizing: border-box;
    background: ${theme.PALLETE.bannerBackgroundColor.paleMint};
    width: 1296px;
    height: 322px;
    border: solid 3px;
    border-color: ${theme.PALLETE.primary.borderGreen300};
    border-radius: 20px;
    position: relative;
    margin: 20px auto;
    margin-top: 40px;
    margin-bottom: 20px;
    & * {
        box-sizing: border-box;
    }
`;

S.DivSlide = styled.div`
    flex-shrink: 0;
    width: 1907px;
    height: 450px;
    position: relative;
    overflow: hidden;
`;

S.SlideImage = styled.img`
    border-radius: 20px;
    width: 1327px;
    height: 450px;
    position: relative;
    object-fit: cover;
    left: 90px;
`;

S.DivSlideImage = styled.div``;

S.Tablist = styled.div`
    width: 756px;
    height: 32px;
    position: absolute;
    left: 100px;
    top: calc(50% - 119px);
    overflow: hidden;
`;

S.DivAntTabsTab1 = styled.div`
    width: 38.03px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    top: 0px;
`;
S.DivAntTabsTab2 = styled.div`
    width: 38.03px;
    position: absolute;
    left: 70.03px;
    bottom: 0px;
    top: 0px;
`;
S.DivAntTabsTab3 = styled.div`
    width: 57.05px;
    position: absolute;
    left: 140.06px;
    bottom: 0px;
    top: 0px;
`;
S.RoundTripTab = styled.div`
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    text-align: left;
    font-family: ${theme.FONT_FAMILY.heading};
    font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h3"]};
    position: relative;
    width: 40px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.OnewayTab = styled.div`
    color: ${theme.PALLETE.fontNatural["50"]};
    font-family: ${theme.FONT_FAMILY.heading};
    text-align: left;
    font-size: ${theme.FONT_SIZE["h5"]};
    line-height: ${theme.FONT_LINE["h3"]};
    position: relative;
    width: 40px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.MultipleTripTab = styled.div`
    color: ${theme.PALLETE.fontNatural["50"]};
    font-family: ${theme.FONT_FAMILY.heading};
    text-align: left;
    font-size: ${theme.FONT_SIZE["h5"]};
    line-height: ${theme.FONT_LINE["h3"]};
    position: relative;
    width: 60px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivAntTabsInkBar = styled.div`
    color: ${theme.PALLETE.primary["mainGreen100"]};
    width: 38px;
    height: 2px;
    position: absolute;
    left: 0px;
    bottom: 0px;
`;
S.TabPanel = styled.div`
    color: ${theme.PALLETE.primary["mainGreen100"]};
    text-align: left;
    font-size: ${theme.FONT_SIZE["h6"]};
    line-height: 20px;
    font-weight: 600;
    position: absolute;
    left: 90px;
    top: 104px;
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.Tabpanel2 = styled.div`
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    text-align: left;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h4"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["400"]};
    position: absolute;
    left: 100px;
    top: 250px;
    width: 70px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
`;
S.Tabpanel3 = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["20"]};
    text-align: left;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h4"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["400"]};
    position: absolute;
    left: 200.5px;
    top: 250px;
    width: 220px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
`;

S.RoundTabPanelForm = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 698px;
    left: 198px;
    top: 104px;
`;

S.OnewayTabPanelForm = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 698px;
    left: 198px;
    top: 104px;
    overflow: hidden;
`;

S.MultiTabPanelForm = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 698px;
    left: 198px;
    top: 104px;
    overflow: hidden;
`;

S.DivDepartureArrival = styled.div`
    width: 177.25px;
    height: 66px;
    position: relative;
`;

S.DivDeparture = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    position: relative;
    top: 4px;
    left: 5px;
    ${flexCenterColumn}
`;

S.DivDepartureFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`;

S.DivRoundTripStart = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    position: absolute;
    left: calc(50% - 88px);
    top: 10px;
    width: 170px;
    height: 20px;
    ${flexCenterColumn}
    cursor: pointer;
`;

S.DivDepartureInput = styled.input`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h8"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    text-align: center;
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    border-radius: 2px;
    width: 177.25px;
    height: 20px;
    border: none;
    position: absolute;
    left: calc(50% - 93px);
    top: calc(50% - -35px);
    ${flexCenterColumn}
    outline: none;
    text-align: center;
    &::placeholder {
    }
`;

S.DivArrivalFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`;

S.DivSchdule = styled.div`
    border-style: solid;
    border-color: ${({ theme }) => theme.PALLETE.primary["borderGreen300"]};
    border-width: 2px 0px 0px 0px;
    width: 393px;
    height: 47px;
    position: absolute;
    top: calc(50% - -9.5px);
    ${flexCenter}
`;

S.DivSchduleStartButton = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    width: 160px;
    position: absolute;
    left: 5px;
    bottom: 13px;
    top: 14px;
`;

S.DivSchduleLastButton = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    width: 160px;
    position: absolute;
    left: 230px;
    bottom: 13px;
    top: 14px;
    ${flexCenterColumn}
`;

S.DivSchduleStartDay1 = styled.input`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h6"]};
    font-weight: 600;
    position: absolute;
    top: 0px;
    width: 150px;
    height: 20px;
    border: none;
    outline: none;
    ${flexCenterColumn}
    text-align: center;
    cursor: pointer;
`;
S.DivSchduleStartDay2 = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h6"]};
    font-weight: 600;
    position: absolute;
    top: 0px;
    width: 150px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
`;

S.CalendarContainer = styled.div`
    background-color: white;
    position: absolute;
    left: 0px;
    top: 50px;
`;

S.ChangeIconButton = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    width: 43.5px;
    height: 66px;
    position: relative;
    left: 177.25px;
    bottom: 0px;
    top: 0px;
    & * {
        box-sizing: border-box;
    }
`;

S.ChangeIconSpan = styled.span`
    width: 34px;
    height: 34px;
    position: absolute;
    left: calc(50% - 17px);
    top: calc(50% - 17px);
    overflow: hidden;
    ${flexCenterColumn}
`;

S.ChangeIconDiv = styled.span`
    width: 34px;
    height: 34px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;
S.ChangeIconImg = styled.img`
    width: 34px;
    height: 34px;
    position: absolute;
    left: 0.17%;
    bottom: 0.41%;
    top: 0.41%;
    overflow: visible;
    ${flexCenterColumn}
`;

S.CalendarIconButton = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    width: 67px;
    position: absolute;
    align-items: center;
    top: 15px;
`;

S.CalendarIconSpan = styled.span`
    width: 24px;
    height: 24px;
    position: absolute;
    left: calc(50% - 9px);
    top: calc(50% - 9px);
    overflow: hidden;
`;

S.CalendarIconDiv = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

S.CalendarIconImage = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 3.51%;
    left: 1.17%;
    bottom: 0.41%;
    top: 0.41%;
    overflow: visible;
`;

S.DivArrival = styled.div`
    position: absolute;
    right: 0px;
    left: 220.75px;
    bottom: 0px;
    top: 0px;
`;

S.DivRoundTripLast = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    width: 170px;
    height: 26px;
    position: absolute;
    left: calc(50% - 88.62px);
    top: calc(50% - 21px);
    cursor: pointer;
`;

S.DivArrivalFrame = styled.div`
    width: 170px;
    height: 66px;
    position: absolute;
    left: 0px;
`;

S.DivArrivalInput = styled.input`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h8"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    border-radius: 2px;
    width: 170px;
    height: 16px;
    position: absolute;
    left: calc(50% - 88.62px);
    top: calc(50% - -6px);
    ${flexCenterColumn}
    border: none;
    outline: none;
    text-align: center;
    &::placeholder {
        text-align: center;
        color: ${({ theme }) => theme.PALLETE.fontNatural["20"]};
    }
`;

S.DivSchduleLastDay = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h6"]};
    font-weight: 600;
    left: 9.36px;
    top: 0px;
    width: 65px;
    height: 20px;
    ${flexCenterColumn}
`;

S.TabPanelForm2 = styled.div`
    background: #ffffff;
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 508px;
    left: 618px;
    top: 104px;
    &:hover {
        border-color: #37a551;
    }
`;

S.SearchButton = styled.div`
    background: #94b396;
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    width: 172px;
    height: 44px;
    position: absolute;
    right: 100px;
    top: calc(50% - 22px);
    cursor: pointer;
    & * {
        box-sizing: border-box;
    }
`;

S.SearchButtonDiv = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["10"]};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    position: absolute;
    left: calc(50% - 27.66px);
    top: 10px;
    width: 65px;
    height: 19px;
    ${flexCenterColumn}
`;

S.DivPeson = styled.div`
    width: 138px;
    height: 40px;
    position: absolute;
    left: calc(50% - 69px);
    top: calc(50% - 38px);
    cursor: pointer;
    & * span {
        width: 40px;
        position: absolute;
        left: calc(50% - 20px);
        bottom: 0px;
        top: 0px;
        overflow: hidden;
        pointer-events: none;
    }
    & * img {
        height: 40px;
        position: absolute;
        right: 0px;
        left: 0px;
        top: 0px;
        overflow: hidden;
        pointer-events: none;
    }
`;

S.ImageFill = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
    pointer-events: none;
`;

S.IconPerson_40_svg = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
    pointer-events: none;
`;
S.IconPerson_40 = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
    pointer-events: none;
`;
S.TabPanelForm2Div = styled.div`
    width: 150px;
    height: 22px;
    position: absolute;
    left: calc(15% - 14.56px);
    top: calc(50% - -16px);
    cursor: pointer;
`;
S.TabPanelForm2DivFont = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: 0px;
    top: 2px;
    width: 100%;
    height: 18px;
    cursor: pointer;
`;
S.TabPanelForm3 = styled.div`
    background: #ffffff;
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 318px;
    left: 808px;
    top: 104px;
    cursor: pointer;
    &:hover {
        border-color: #37a551;
    }
`;

S.DivSeat = styled.div`
    width: 138px;
    height: 40px;
    position: absolute;
    left: calc(50% - 69px);
    top: calc(50% - 38px);
    cursor: pointer;
    & * span {
        width: 40px;
        position: absolute;
        left: calc(50% - 20px);
        bottom: 0px;
        top: 0px;
        overflow: hidden;
    }
    & * image {
        height: 40px;
        position: absolute;
        right: 0px;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }
`;

S.ImageFill2 = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
    cursor: pointer;
`;

S.IconSeat_40_svg = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
    cursor: pointer;
`;
S.IconSeat_40 = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
    cursor: pointer;
`;
S.TabPanelForm3Div = styled.div`
    width: 100%;
    height: 22px;
    position: absolute;
    left: calc(10% - 16.56px);
    top: calc(50% - -16px);
    cursor: pointer;
`;
S.TabPanelForm3DivFont = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: 0px;
    top: 2px;
    width: 100%;
    height: 18px;
    cursor: pointer;
`;

S.DivAirportWrapper = styled.div`
    background: #f3fcf4;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 3px;
    padding: 10px 20px 10px 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 568px;
    height: 230px;
    position: relative;
    overflow: hidden;
    top: 80px;
    &* {
        box-sizing: border-box;
    }
`;

S.DivAirport = styled.div`
    padding: 15px 9px 15px 9px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 528px;
    position: relative;
    overflow: hidden;
`;
S.DivAirportButtonActive = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    border-width: 1px;
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    flex-shrink: 0;
    width: 90px;
    height: 50px;
    position: relative;
`;

S.DivAirportButtonDeactive = styled.button`
    background: #ffffff;
    color: ${({ theme }) => theme.PALLETE.fontNatural["20"]};
    border-radius: 10px;
    border-style: solid;
    border-color: #cacaca;
    border-width: 1px;
    flex-shrink: 0;
    width: 90px;
    height: 50px;
    position: relative;
    ${flexCenterColumn}
`;

S.DivAirportEngActive = styled.div`
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    font-size: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    line-height: ${({ theme }) => theme.FONT_WEIGHT["h7"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    ${flexCenterColumn}
`;

S.DivAirportEngDeactive = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["C6C6C6"]};
    font-size: 14px;
    line-height: 15px;
    font-weight: 400;
    left: 15px;
    top: 2px;
    width: 61px;
    height: 35px;
    display: flex;
    ${flexCenterColumn}
`;

S.AirBanner1 = styled.div`
    width: 734px;
    height: 240px;
    margin-top: 20px;
    left: 80px;
    display: flex;
    align-items: center;
`;

S.AirBannerImage = styled.img`
    border-radius: 20px;
`;

S.AirWeekSaleDiv = styled.div`
    margin-top: 20px;
    height: 795px;
    & * {
        box-sizing: border-box;
    }
`;

S.AirWeekTitleDiv = styled.div`
    width: 100%;
    height: 85px;
    position: relative;
    top: 0px;
    overflow: hidden;
`;

S.AirWeekSaleTitle = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: left;
    line-height: 26px;
    font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    position: absolute;
    left: 224px;
    top: 15px;
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.List_Grop = styled.div`
    background: #fcfbfa;
    height: 712.37px;
    position: relative;
    justify-content: "flex-start";
`;
S.List_Grop_Div = styled.div`
    border-style: solid;
    border-color: #e5e5e5;
    border-width: 0px 1px 0px 0px;
    width: 338px;
    height: 610px;
    position: relative;
    left: 20px;
    bottom: 38.37px;
    top: 39px;
    overflow: hidden;
`;

S.List_Grop_Div_Link = styled.div`
    border-radius: 20px;

    height: 440px;
    right: 21px;
    left: 20px;
    top: 7px;
`;

S.List_Group_Div_Img = styled.img`
    border-radius: 20px;
    width: 320px;
    height: 440px;
    right: 21px;
    left: 21px;
    top: 13px;
    overflow: hidden;
    object-fit: cover;
`;

S.Frame_Div = styled.div`
    width: 337px;
    height: 163px;
    overflow: hidden;
    left: 20px;
    top: 461px;
    & * {
        box-sizing: border-box;
    }
`;

S.HachTag = styled.p`
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 3px;
    width: 90px;
    height: 40px;
    left: 17px;
    bottom: 14px;
    top: 311px;
    pointer-events: none;
`;

S.HachTagFont = styled.div`
    color: #94b396;
    text-align: left;
    font-size: 15.625px;
    font-weight: 400;
    position: relative;
    width: 80px;
    height: 20px;
    top: 7.5px;
    left: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
`;

S.List_Group_Heading_Div = styled.div`
    width: 300px;
    height: 33px;
    overflow: hidden;
`;

S.List_Group_Heading_Div2 = styled.div`
    width: 200px;
    height: 33px;
    right: 0px;
    left: 0px;
    overflow: hidden;
`;

S.List_Group_Heading_Font = styled.p`
    color: #000000;
    text-align: left;
    font-size: 24.2734375px;
    font-weight: 700;
    position: relative;
    left: 0px;
    top: 0px;
    width: 252.15px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: end;
`;

S.List_Group_Heading_Img = styled.image`
    width: 20px;
    height: 14px;
    position: relative;
    left: 93px;
    top: 9px;
    overflow: hidden;
    object-fit: cover;
`;

S.List_Group_Price_Date = styled.div`
    width: 337px;
    height: 50px;
    position: relative;
    overflow: hidden;
`;
S.List_Group_Price_Date_Font1 = styled.p`
    color: #111111;
    text-align: left;
    font-size: 17px;
    line-height: 27px;
    font-weight: 500;
    position: relative;
    left: 0px;
    top: -4px;
    width: 337px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.List_Group_Price_Date_Font2 = styled.p`
    color: #111111;
    text-align: left;
    font-size: 17px;
    line-height: 27px;
    font-weight: 500;
    position: relative;
    left: 0px;
    top: 4px;
    width: 337px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export default S;

// Claendar Style=====================================
S.Calendar = styled.div`
    width: 790px;
    height: 560px;
    display: flex;
    flex-direction: row;
    margin-top: 80px;
`;

// PersonComponent style==================================

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
    height: 380px;
    left: 410px;
    top: 240px;
    position: relative;
    overflow: hidden;
`;

S.DivPersonChoiceFrame = styled.div`
    padding: 15px 9px 15px 9px;
    flex-shrink: 0;
    width: 331px;
    height: 350px;
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

S.PesonChoiceTitle2 = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h8"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h5"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    position: absolute;
    text-align: left;
    left: 0px;
    top: 73px;
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
    top: 125px;
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

S.DivKid = styled.div`
    width: 331px;
    height: 48px;
    position: absolute;
    left: 0px;
    top: 96px;
    overflow: hidden;
`;
S.DivKidTitle = styled.div`
    color: #000000;
    text-align: left;
    font-size: 12px;
    line-height: 19px;
    font-weight: 400;
    position: absolute;
    left: 7px;
    top: 14px;
    width: 100px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivImageKid = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 110px;
    top: 18px;
    overflow: visible;
`;
S.ButtonKid = styled.button`
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
S.InputKidCount = styled.input`
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
S.MinusButtonKid = styled.button`
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

S.DivMinusButtonKid = styled.div`
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

S.PlusButtonKid = styled.button`
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
S.DivPlusButtonKid = styled.div`
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

S.ButtonChoiceFinish = styled.button`
    background: #94b396;
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    width: 172px;
    height: 44px;
    position: absolute;
    left: 79px;
    top: 284px;
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
`;
// SeatComponent style==================================

S.DivSeatChoice = styled.div`
    background: #f3fcf4;
    border-radius: 10px;
    border-style: solid;
    border-color: #94b396;
    border-width: 3px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 371px;
    height: 340px;
    left: 810px;
    top: 240px;
    position: relative;
    overflow: hidden;
    &* {
        box-sizing: border-box;
    }
`;

S.DivSeatFrame = styled.div`
    padding: 15px 9px 15px 9px;
    flex-shrink: 0;
    width: 331px;
    height: 300px;
    position: relative;
    overflow: hidden;
`;

S.DivSeatTitle1 = styled.div`
    color: #000000;
    font-size: 15px;
    line-height: 19px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 128px;
    height: 22px;
    ${flexCenterColumn}
`;

S.DivSeatTitle2 = styled.div`
    color: #000000;
    text-align: left;
    font-size: 13px;
    line-height: 19px;
    font-weight: 100;
    position: absolute;
    left: 0px;
    top: 73px;
    width: 331px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.ButtonGroup = styled.div`
    position: absolute;
    inset: 0;
`;
S.ButtonNormalSeat = styled.button`
    background-color: "#f5f6f6";
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 36px;
    position: absolute;
    right: 185px;
    left: 13px;
    top: 120px;
    cursor: pointer;
    &:hover {
        border-color: #37a551;
    }
`;
S.DivNormalSeat = styled.div`
    color: #000000;
    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    position: absolute;
    left: 3px;
    top: 9px;
    width: 127px;
    height: 17px;
    ${flexCenterColumn}
`;

S.ButtonPremiumNormalSeat = styled.button`
    background-color: "#f5f6f6";
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 36px;
    position: absolute;
    right: 31px;
    left: 167px;
    top: 120px;
    cursor: pointer;
    &:hover {
        border-color: #37a551;
    }
`;

S.DivPremiumNormalSeat = styled.div`
    color: #000000;
    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    position: absolute;
    left: 2px;
    top: 9px;
    width: 129px;
    height: 17px;
    ${flexCenterColumn}
`;

S.ButtonFirstSeat = styled.button`
    background-color: "#f5f6f6";
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 36px;
    position: absolute;
    right: 185px;
    left: 13px;
    top: 178px;
    &:hover {
        border-color: #37a551;
    }
`;

S.DivFirstSeat = styled.div`
    color: #000000;
    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    position: absolute;
    left: 4px;
    top: 9px;
    width: 125px;
    height: 17px;
    ${flexCenterColumn}
`;

S.ButtonBusinessSeat = styled.button`
    background-color: "#f5f6f6";
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 36px;
    position: absolute;
    right: 31px;
    left: 167px;
    top: 178px;
    &:hover {
        border-color: #37a551;
    }
`;
S.DivBusinessSeat = styled.div`
    color: #000000;
    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    position: absolute;
    left: 3px;
    top: 9px;
    width: 125px;
    height: 17px;
    ${flexCenterColumn}
`;

S.ButtonSeatChoiceFinish = styled.button`
    background-color: #94b396;
    border-radius: 10px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    width: 172px;
    height: 44px;
    position: absolute;
    right: 80px;
    top: calc(50% - -103px);
    cursor: pointer;
`;

S.DivSeatChoiceFinish = styled.div`
    color: #ffffff;
    font-size: 15px;
    line-height: 19px;
    font-weight: 600;
    position: absolute;
    left: calc(50% - 83px);
    top: 13px;
    width: 166px;
    height: 19px;
    cursor: pointer;
    ${flexCenterColumn}
`;

S.AirCalendarContainer = styled.div`
    margin-top: 60px;
`;
