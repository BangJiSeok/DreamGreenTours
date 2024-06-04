import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../../global/common";
import theme from "../../../global/theme";
const S = {};

S.DivListContainer = styled.div`
    max-width: 1920px;
    position: relative;
    ${flexCenter}
    margin: 0 auto;
    margin-top: 40px;
`;

S.DivListFrame = styled.div`
    width: 1200px;
    height: 2000px;
    position: absolute;
    top: 0;
    margin: 0 auto;
`;

S.DivListFormBar = styled.div`
    border-style: solid;
    border-color: #111111;
    border-width: 0px 0px 2px 0px;
    height: 52.19px;
    position: absolute;
    right: 940px;
    left: 0px;
    top: 130px;
`;

S.DivListForm = styled.div`
    width: 260px;
    height: 1110px;
    position: absolute;
    right: 940px;
    left: 0px;
    top: 180px;
`;

S.DivListFormTitle = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 15px;
    line-height: 25.5px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 24.75px;
    width: 260px;
    height: 25.5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivListFrom1 = styled.div`
    width: 260px;
    height: 85.75px;
    position: absolute;
    left: 0px;
`;

S.DivListFormInputFrame = styled.div`
    background: rgba(255, 255, 255, 0);
    border-style: solid;
    border-color: #cdcdcd;
    border-width: 1px;
    width: 260px;
    height: 86px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 20px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;

S.InputListForm = styled.input`
    background: #f2f3f7;
    border-radius: 6px;
    border-style: solid;
    border-color: #cdcdcd;
    border-width: 1px;
    opacity: 0.6000000238418579;
    width: 255px;
    height: 42px;
    position: absolute;
    left: 0px;
    top: 35px;
    outline: none;
`;

S.DivListFormSearch = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 6px;
    position: absolute;
    left: calc(50% - -95px);
    top: calc(50% - 1px);
    object-fit: cover;
    cursor: pointer;
    .icon {
        width: 24px;
        height: 24px;
    }
`;

S.DivListForm2 = styled.div`
    width: 260px;
    height: 168.87px;
    position: absolute;
    left: 0px;
    top: 116px;
`;

S.DivListForm2Title = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 15px;
    line-height: 25.5px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivListForm2Frame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 260px;
    height: 120px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 50.2px;
`;

S.DivLocal1 = styled.div`
    color: ${(props) =>
        props.isActive
            ? theme.PALLETE.fontNatural[20]
            : theme.PALLETE.fontNatural[70]};
    text-align: center;
    font-size: 13px;
    line-height: 16.9px;
    font-weight: 400;
    position: absolute;
    left: 8px;
    top: 5.55px;
    width: 40px;
    height: 16.9px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivLocal2 = styled.div`
    color: ${(props) =>
        props.isActive
            ? theme.PALLETE.fontNatural[20]
            : theme.PALLETE.fontNatural[70]};
    text-align: center;
    font-size: 13px;
    line-height: 16.9px;
    font-weight: 400;
    position: absolute;
    left: 9px;
    top: 5.55px;
    width: 26px;
    height: 16.9px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

S.HorizontalContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 55px;
`;

S.LabelLengthTwo = styled.label`
    background-color: ${(props) =>
        props.isActive
            ? theme.PALLETE.primary.bannerBack
            : theme.PALLETE.backgroundColor.white};
    border-radius: 10px;
    border-style: solid;
    border-color: ${theme.PALLETE.primary.borderGreen300};
    border-width: 1px;
    width: 45.13px;
    height: 28.89px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

S.LabelLengthThree = styled(S.LabelLengthTwo)`
    width: 56.69px;
    height: 28.89px;
`;

S.DivListForm3 = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 240px;
    height: 169px;
    position: absolute;
    left: 4.5px;
    top: 286.31px;
`;

S.DivListForm3TitleFrame = styled.div`
    height: 25px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
`;
S.DivListForm3Title = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 14px;
    line-height: 15px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 24.5px;
    width: 30px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivListForm3Icon = styled.div`
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    top: 25px;
`;

S.DivHotelPriceMinMaxFrame = styled.div`
    width: 236px;
    height: 24px;
    position: absolute;
    left: 0px;
    top: 0px;
    margin-bottom: 10px;
`;

S.DivHotelPriceSlider = styled.div`
    width: 237px;
    height: 112px;
    position: absolute;
    left: 0px;
    top: 45px;
`;

S.DivHotelPriceMin = styled.div`
    color: #666666;
    text-align: left;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelPriceMax = styled.div`
    color: #666666;
    text-align: left;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    position: absolute;
    left: 190px;
    top: 0px;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivSliderFrame = styled.div`
    width: 230px;
    height: 30px;
    position: absolute;
    top: 26px;
    margin-top: 5px;
`;
S.DivSliderBarFrame = styled.div`
    width: 100%;
    height: 13.33%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 43.33%;
    top: 43.33%;
    overflow: hidden;
`;

S.DivSliderBar = styled.div`
    background: linear-gradient(
        to right,
        #dddddd 0%,
        #dddddd ${(props) => props.start}%,
        #94b396 ${(props) => props.start}%,
        #94b396 ${(props) => props.end}%,
        #dddddd ${(props) => props.end}%,
        #dddddd 100%
    );
    width: 230px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    top: 0px;
`;

S.DivSliderCircle1 = styled.div`
    background: #ffffff;
    border-radius: 10px;
    width: 20px;
    height: 66.67%;
    position: absolute;
    bottom: 16.67%;
    top: 16.67%;
    box-shadow: 0.2px 1px 3px 0px rgba(0, 0, 0, 0.4);
`;

S.DivSliderCircle2 = styled.div`
    background: #ffffff;
    border-radius: 10px;
    width: 20px;
    height: 66.67%;
    position: absolute;
    left: -7px;
    bottom: 16.67%;
    top: 16.67%;
    box-shadow: 0.2px 1px 3px 0px rgba(0, 0, 0, 0.4);
`;

S.DivPriceInputFrame = styled.div`
    width: 237px;
    height: 36px;
    position: absolute;
    left: 0px;
    top: 76px;
`;
S.InputPriceMin = styled.input`
    background: #f2f3f7;
    border-radius: 6px;
    border-style: solid;
    border-color: #cdcdcd;
    border-width: 1px;
    opacity: 0.6000000238418579;
    width: 103px;
    height: 36px;
    position: absolute;
    left: 0px;
    top: 0px;
    outline: none;
`;

S.DivPriceMinMaxBetween = styled.div`
    color: #333333;
    text-align: center;
    font-size: 13px;
    line-height: 36px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 5.89px);
    width: 7.97px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.InputPriceMax = styled.input`
    background: #f2f3f7;
    border-radius: 6px;
    border-style: solid;
    border-color: #cdcdcd;
    border-width: 1px;
    opacity: 0.6000000238418579;
    width: 104px;
    height: 36px;
    position: absolute;
    left: 133px;
    top: 0px;
    outline: none;
`;

S.DivListForm4 = styled.div`
    width: 260px;
    height: 134.98px;
    position: absolute;
    left: 0px;
    top: 463.25px;
`;

S.DivListForm4Title = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 15px;
    line-height: 25.5px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 260px;
    height: 33.95px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelGradeFrame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 100%;
    height: 90px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 50.2px;
`;

S.LabelGrade = styled(S.LabelLengthTwo)`
    width: 56.69px;
    height: 28.89px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

S.GradeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    gap: 10px;
`;

S.DivListForm5 = styled.div`
    width: 260px;
    height: 150px;
    position: absolute;
    left: 0px;
    top: 614.53px;
`;

S.DivListForm5Title = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 15px;
    line-height: 25.5px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 260px;
    height: 33.95px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelTypeFrame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 260px;
    height: 100.89px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 50.2px;
`;

S.LabelType = styled(S.LabelLengthTwo)`
    width: 70px;
    height: 28.89px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

S.TypeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    gap: 10px;
`;

S.DivListForm6 = styled.div`
    width: 260px;
    height: 472.22px;
    position: absolute;
    left: 0px;
    top: 802px;
`;

S.DivListForm6Title = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 15px;
    line-height: 25.5px;
    font-weight: 600;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 260px;
    height: 33.95px;
    display: flex;
    align-items: center;
`;

S.DivAmenitiesFrame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 260px;
    height: 120px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 50.2px;
`;

S.LabelAmenities = styled(S.LabelLengthThree)`
    width: 70px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

S.LabelAmenitiesLong = styled(S.LabelLengthThree)`
    width: 100px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

S.AmenitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    gap: 10px;
`;

S.DivAmenitiesFrame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    height: 420px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 50.2px;
`;

S.DivCounseling = styled.div`
    border-radius: 6px;
    border-style: solid;
    border-color: #dcdcdc;
    border-width: 3px;
    width: 260px;
    height: 295px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 1500px;
`;

S.DivCounselingTitle = styled.div`
    color: #333333;
    text-align: left;
    font-size: 21px;
    line-height: 35.7px;
    font-weight: 700;
    position: absolute;
    left: 15px;
    top: 16px;
    width: 200px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivCounselingBar1 = styled.div`
    border-style: solid;
    border-color: #e1e1e1;
    border-width: 1px 0px 0px 0px;
    height: 1px;
    position: absolute;
    right: 15px;
    left: 15px;
    top: 64px;
`;

S.DivCounselingBar2 = styled.div`
    border-style: solid;
    border-color: #e1e1e1;
    border-width: 1px 0px 0px 0px;
    height: 1px;
    position: absolute;
    right: 15px;
    left: 15px;
    top: 120px;
    overflow: hidden;
`;

S.DivHotelCallNumberFrame = styled.div`
    width: 260px;
    height: 30px;
    position: absolute;
    right: 15px;
    left: 15px;
    top: 77px;
`;

S.DivHotelCallNumberTitle = styled.div`
    color: #888888;
    text-align: left;
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivHotelCallNumber = styled.div`
    color: #333333;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    left: 140px;
    top: 0px;
    width: 91px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivOfficeHour = styled.div`
    color: #222222;
    text-align: left;
    font-size: 16px;
    line-height: 28px;
    font-weight: 800;
    position: absolute;
    left: 15px;
    top: 132px;
    width: 240px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivInforDetailHourFrame = styled.div`
    width: 260px;
    height: 120px;
    position: absolute;
    top: 170px;
`;

S.DivInforDetailHour1 = styled.div`
    width: 260px;
    height: 30px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
`;

S.DivInforDetailHour2 = styled.div`
    width: 260px;
    height: 30px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 30px;
`;

S.DivWeekday = styled.div`
    color: #888888;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    left: 15px;
    top: -0.5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.DivWeekdayTime = styled.div`
    color: #333333;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    left: 153.14px;
    top: 0px;
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivLunch = styled.div`
    color: #888888;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    left: 15px;
    top: -0.5px;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivLunchTime = styled.div`
    color: #333333;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    position: absolute;
    left: 155.36px;
    top: 0px;
    width: 75.42px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivAdviceFrame = styled.div`
    width: 200px;
    height: 60px;
    position: absolute;
    left: 0px;
    top: 65px;
`;

S.DivAdvice = styled.div`
    color: ${theme.PALLETE.primary.mainGreen100};
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 800;
    position: absolute;
    left: 15px;
    top: 0px;
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivListMainHeader = styled.div`
    width: 1200px;
    height: 12%;
    padding: 0px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    right: -4px;
    left: 4px;
    top: 10px;
`;

S.DivListMainHeaderResult = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivListMainHeaderTitle = styled.div`
    color: #111111;
    text-align: left;
    font-size: 24.4765625px;
    line-height: 32px;
    font-weight: 800;
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivLocalFrame1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivLocalFrame2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivLocalSchduelBackground = styled.div`
    background: #f5f6f6;
    border-radius: 22px;
    padding: 12px 30px 12px 30px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
`;

S.DivLocalFrame3 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivLocalFrame4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivLocalDropDown = styled.div`
    color: #111111;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivLocalDropdownFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
`;
S.DivSchdeulImage = styled.div`
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;

S.DivSchdeulFrame1 = styled.div`
    padding: 0px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivSchdeulFrame2 = styled.div`
    border-style: solid;
    border-color: #aaaaaa;
    border-width: 0px 0px 0px 1px;
    padding: 0px 0px 0px 21px;
    display: flex;
    flex-direction: row;
    gap: 7.99px;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;
S.DivSchdeulFrame3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivSchdeul = styled.div`
    color: #111111;
    text-align: left;
    font-family: "Inter-Medium", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivSchdeulImageFrame1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    max-width: 244.58px;
    position: relative;
    overflow: hidden;
`;

S.DivSchdeulImageFrame2 = styled.div`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;

S.ImageSchdeul = styled.img`
    width: 78.58%;
    height: 78.57%;
    position: absolute;
    right: 10.71%;
    left: 10.71%;
    bottom: 10.72%;
    top: 10.71%;
    overflow: visible;
`;

S.DivPesonRoomContainer = styled.div`
    padding: 0px 0px 0px 12px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivPersonRoomframe1 = styled.div`
    background: #f5f6f6;
    border-radius: 22px;
    padding: 12px 30px 12px 30px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
`;

S.DivPersonRoomImage = styled.div`
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
`;

S.ImagePersonRoom = styled.img`
    width: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
`;

S.DivPersonRoom = styled.div`
    padding: 0px 0px 0px 8px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivPersonRoomframe2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivPersonRoomFont = styled.div`
    color: #111111;
    text-align: left;
    font-size: 15.75px;
    line-height: 20px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivShowMapContainer1 = styled.div`
    border-radius: 22px;
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 1px;
    padding: 14px 31px 14px 31px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
    right: 10px;
`;

S.DivShowMapImageFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    max-width: 155px;
    position: relative;
    overflow: hidden;
`;

S.DivImageShowMap1 = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    overflow: visible;
    right: 10px;
    left: 0%;
    bottom: 0%;
    top: 0%;
`;

S.DivShowMapFontFrame = styled.div`
    padding: 0px 0px 0px 8px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
`;

S.DivShowMapFont = styled.div`
    color: #111111;
    text-align: left;
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .mapIcon {
        width: 16px;
        height: 16px;
        & path {
            color: ${theme.PALLETE.primary.mainGreen100};
        }
    }
`;

S.DivListMiddleContainer = styled.div`
    border-style: solid;
    border-color: #dddddd;
    border-width: 0px 0px 1px 0px;
    height: 40px;
    position: absolute;
    right: -4px;
    left: 300px;
    top: 60px;
`;
S.DivListBotomContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    align-self: stretch;
    flex-shrink: 0;
    height: 48px;
    position: relative;
`;

S.DivRecommandFrame = styled.div`
    width: 45px;
    height: 27px;
    position: absolute;
    right: 105.03px;
    top: 9.5px;
    overflow: hidden;
    cursor: pointer;
`;

S.DivRecommand = styled.div`
    color: #37a551;
    text-align: center;
    font-size: 14px;
    line-height: 26px;
    font-weight: 600;
    position: absolute;
    right: -0.43px;
    top: 0px;
    width: 45px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivPriceFrame1 = styled.div`
    width: 45px;
    height: 27px;
    position: absolute;
    right: 52.52px;
    top: 9.5px;
    overflow: hidden;
    cursor: pointer;
`;

S.DivPrice = styled.div`
    color: #111111;
    text-align: center;
    font-size: 14px;
    line-height: 26px;
    font-weight: 600;
    position: absolute;
    right: -0.43px;
    top: 0px;
    width: 45px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.DivRoomGradeFrame = styled.div`
    width: 45px;
    height: 27px;
    position: absolute;
    right: 0px;
    top: 9.5px;
    overflow: hidden;
    cursor: pointer;
`;

S.DivRoomGrade = styled(S.DivPrice)`
    width: 45px;
    height: 27px;
`;

S.DivListCountTitleFrame = styled.div`
    width: 904px;
    height: 22px;
    position: absolute;
    left: 300px;
    top: 121px;
`;

S.DivListCountTitle1 = styled.div`
    color: #000000;
    text-align: left;
    font-size: 13px;
    line-height: 22.1px;
    font-weight: 400;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivListCountTitle2 = styled.div`
    color: #37a551;
    text-align: right;
    font-size: 13px;
    line-height: 22.1px;
    font-weight: 400;
    position: absolute;
    left: 19.03px;
    top: 0px;
    width: 35px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

S.DivListCountTitle3 = styled.div`
    color: #000000;
    text-align: left;
    font-size: 13px;
    line-height: 22.1px;
    font-weight: 400;
    position: absolute;
    left: 55px;
    top: 0px;
    width: 160px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelInfoContainer1 = styled.div`
    border-style: solid;
    border-color: #d3dbd9;
    border-width: 0px 0px 1px 0px;
    padding: 30px 0px 31px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 900px;
    position: absolute;
    left: 300px;
    top: 161px;
`;

S.DivHotelInfoImageContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 335px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border: solid 1px greenyellow;
`;

S.DivHotelInfoImageFrame = styled.div`
    flex-shrink: 0;
    width: 335px;
    height: 200px;
    position: relative;
    overflow: hidden;
`;

S.ImageHotelInfo = styled.img`
    width: 335px;
    height: 200px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;
S.DivImageHotelInfo = styled.div`
    width: 335px;
    height: 200px;
    position: absolute;
    left: calc(50% - 167.5px);
    top: calc(50% - 100px);
    overflow: hidden;
`;

S.DivHotelInfoContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    width: 541px;
    position: relative;
`;

S.DivHotelInfoFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivHotelGrade = styled.div`
    background: #ffffff;
    border-radius: 4px;
    border-style: solid;
    border-color: #e3e8e7;
    border-width: 1px;
    padding: 6px 11px 6px 11px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    height: 25px;
    position: relative;
`;

S.DivHotelGradeFont = styled.div`
    color: #000000;
    text-align: left;
    font-size: 12.6953125px;
    line-height: 16px;
    font-weight: 600;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHeartImageFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivHeartImage = styled.div`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    overflow: visible;
    cursor: pointer;
`;

S.DivHotelInfoNameContainer = styled.div`
    padding: 10px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivHotelInfoNameFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
`;

S.DivHotelInfoName = styled.div`
    color: #111111;
    text-align: left;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelInfoEngNameContainer = styled.div`
    padding: 12px 0px 35px 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivHotelInfoEngNameFrame = styled(S.DivHotelInfoNameFrame)``;

S.DivHotelInfoEngName = styled.div`
    color: #111111;
    text-align: left;
    font-size: 15.125px;
    line-height: 19px;
    font-weight: 400;
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivHotelInfoAddrMargin = styled.div`
    padding: 6px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivHotelInfoAddrContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: flex-start;
    align-self: stretch;
    position: relative;
`;
S.DivHotelInfoAddrImageFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    max-width: 541px;
    position: relative;
    overflow: hidden;
`;

S.DivHotelInfoAddrImage = styled.div`
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    position: relative;
    overflow: visible;
`;

S.DivHotelInfoAddrFrame = styled.div`
    padding: 0px 0px 0px 4px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 126px;
    position: relative;
`;

S.DivHotelInfoAddr = styled.div`
    color: rgba(0, 0, 0, 0.85);
    width: 541px;
    text-align: left;
    font-size: 13.125px;
    line-height: 17px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivShoWMapPriceMargin = styled.div`
    padding: 4px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;
S.DivShoWMapPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivShowMapContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex-shrink: 0;
    width: 93px;
    position: relative;
`;

S.DivImageShowMap2 = styled.div`
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    position: relative;
    overflow: visible;
`;

S.DivShowToMapFrame = styled.div`
    padding: 0px 0px 0px 8px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivShowToMap = styled.div`
    color: #009c75;
    text-align: left;
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPriceMargin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-end;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
`;

S.DivPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
`;

S.DivPriceFrame2 = styled.div`
    align-self: stretch;
    flex-shrink: 0;
    width: 130px;
    position: relative;
`;

S.DivPriceFont = styled.div`
    color: rgba(0, 0, 0, 0.85);
    text-align: left;
    font-size: 22px;
    line-height: 27px;
    font-weight: 800;
    position: absolute;
    right: 30px;
    top: -10px;
    width: 110px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPriceWonFont = styled.div`
    color: rgba(0, 0, 0, 0.85);
    text-align: left;
    font-size: 22px;
    line-height: 27px;
    font-weight: 800;
    position: absolute;
    left: 92.58px;
    top: -10px;
    width: 50px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivPriceNoticeFrame = styled.div`
    padding: 4px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
    top: 10px;
`;

S.DivPriceNotice = styled.div`
    color: #888888;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 11.25px;
    line-height: 15px;
    font-weight: 400;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

// SearchContainer=================================================

S.DivSearch = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: 0px;
    top: 130px;
    overflow: hidden;
`;

S.DivSearchContainer = styled.div`
    background: ${theme.PALLETE.bannerBackgroundColor.paleMint};
    border-radius: 20px;
    border: solid 2px;
    border-color: ${theme.PALLETE.primary.borderGreen300};
    width: 1000px;
    height: 239px;
    left: -100px;
    box-shadow: 0px 3px 6px 0px rgba(17, 17, 17, 0.1);
    padding: 0px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    & * {
        box-sizing: border-box;
    }
    z-index: 10;
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
// ================================================================================
export default S;
