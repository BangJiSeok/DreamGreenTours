import React, { useState } from "react";
import S from "./style";
import theme from "../../global/theme";
import SchduleComponent from "./SchduleComponent";
import RoundTapForm from "./RoundTapForm";
import { Link, useNavigate } from "react-router-dom";
import PersonComponent from "./PersonComponent";
import SeatComponent from "./SeatComponent";
import OnewayTapForm from "./OnewayTapForm";
import OnewaySchduleComponent from "./OnewaySchduleComponent";

const TapComponent = () => {
    const navigate = useNavigate();

    const handleMoveClick = () => {
        navigate("/airline/search");
    };

    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState("");
    const [kidCount, setKidCount] = useState("");
    const [showSeatComponent, setSeatComponent] = useState(false);
    const [showPersonComponent, setPersonComponent] = useState(false);
    const [selectedSeat, setSelectedSeat] = useState("일반석");

    const handleUpdatePersonCounts = ({ adults, children, kids }) => {
        setAdultCount(adults);
        setChildrenCount(children);
        setKidCount(kids);
    };

    const handleSeatComponent = () => {
        setSeatComponent(!showSeatComponent);
    };

    const handlePersonComponent = () => {
        setPersonComponent(!showPersonComponent);
    };

    const [selectedTab, setSelectedTab] = useState("RoundTrip");
    const [tabColors, setTabColors] = useState({
        RoundTrip: "#37a551",
        Oneway: "#bdbfbf",
        Multiple: "#bdbfbf",
    });

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
        const newColors = Object.keys(tabColors).reduce((acc, key) => {
            acc[key] = key === tabName ? "#37a551" : "#bdbfbf";
            return acc;
        }, {});
        setTabColors(newColors);
    };

    const renderPersonCountText = () => {
        let text = `성인 ${adultCount}`;
        if (childrenCount > 0) text += `, 아동 ${childrenCount}`;
        if (kidCount > 0) text += `, 유아 ${kidCount}`;
        return text;
    };

    const renderSelectedSeatText = () => {
        return `${selectedSeat}`;
    };

    const renderContent = () => {
        return selectedTab === "RoundTrip" ? (
            <S.RoundTabPanelForm
                selectedTab={selectedTab}
                onClick={() => handleTabClick("RoundTrip")}
                style={{
                    color: tabColors.RoundTrip,
                    fontWeight:
                        selectedTab === "RoundTrip"
                            ? theme.FONT_WEIGHT["bold"]
                            : theme.FONT_WEIGHT["regular"],
                }}
            >
                <RoundTapForm />
                <SchduleComponent />
            </S.RoundTabPanelForm>
        ) : selectedTab === "Oneway" ? (
            <S.OnewayTabPanelForm
                selectedTab={selectedTab}
                onClick={() => handleTabClick("Oneway")}
                style={{
                    color: tabColors.Oneway,
                    fontWeight:
                        selectedTab === "Oneway"
                            ? theme.FONT_WEIGHT["bold"]
                            : theme.FONT_WEIGHT["regular"],
                }}
            >
                <OnewayTapForm />
                <OnewaySchduleComponent />
            </S.OnewayTabPanelForm>
        ) : (
            <S.RoundTabPanelForm
                selectedTab={selectedTab}
                onClick={() => handleTabClick("RoundTrip")}
                style={{
                    color: tabColors.RoundTrip,
                    fontWeight:
                        selectedTab === "RoundTrip"
                            ? theme.FONT_WEIGHT["bold"]
                            : theme.FONT_WEIGHT["regular"],
                }}
            />
        );
    };

    return (
        <S.SearchDiv>
            {showSeatComponent && (
                <SeatComponent
                    setSeatComponent={setSeatComponent}
                    setSelectedSeat={setSelectedSeat}
                />
            )}
            {showPersonComponent && (
                <PersonComponent
                    updatePersonCounts={handleUpdatePersonCounts}
                    setPersonVisible={setPersonComponent}
                    setPersonComponent={setPersonComponent}
                />
            )}

            <S.Tablist>
                <S.DivAntTabsTab1>
                    <S.RoundTripTab
                        onClick={() => handleTabClick("RoundTrip")}
                        style={{
                            color: tabColors.RoundTrip,
                            fontWeight:
                                selectedTab === "RoundTrip"
                                    ? theme.FONT_WEIGHT["bold"]
                                    : theme.FONT_WEIGHT["regular"],
                        }}
                    >
                        왕복
                    </S.RoundTripTab>
                </S.DivAntTabsTab1>

                <S.DivAntTabsTab2>
                    <S.OnewayTab
                        onClick={() => handleTabClick("Oneway")}
                        style={{
                            color: tabColors.Oneway,
                            fontWeight:
                                selectedTab === "Oneway"
                                    ? theme.FONT_WEIGHT["bold"]
                                    : theme.FONT_WEIGHT["regular"],
                        }}
                    >
                        편도
                    </S.OnewayTab>
                </S.DivAntTabsTab2>
            </S.Tablist>
            <S.TabPanel>항공권 검색</S.TabPanel>
            <S.TabPanelForm2>
                <S.DivPeson onClick={handlePersonComponent}>
                    <span className="span">
                        <div className="img">
                            <S.ImageFill></S.ImageFill>
                        </div>
                        <S.IconPerson_40_svg>
                            <S.IconPerson_40 src="/img/icon/person.png" />
                        </S.IconPerson_40_svg>
                    </span>
                </S.DivPeson>
                <S.TabPanelForm2Div>
                    <S.TabPanelForm2DivFont>
                        {renderPersonCountText()}
                    </S.TabPanelForm2DivFont>
                </S.TabPanelForm2Div>
            </S.TabPanelForm2>
            <S.TabPanelForm3>
                <S.DivSeat onClick={handleSeatComponent}>
                    <span>
                        <image>
                            <S.ImageFill2></S.ImageFill2>
                        </image>
                        <S.IconSeat_40_svg>
                            <S.IconSeat_40 src="/img/icon/seat.png" />
                        </S.IconSeat_40_svg>
                    </span>
                </S.DivSeat>
                <S.TabPanelForm3Div>
                    <S.TabPanelForm3DivFont>
                        {renderSelectedSeatText()}
                    </S.TabPanelForm3DivFont>
                </S.TabPanelForm3Div>
            </S.TabPanelForm3>
            <S.SearchButton onClick={handleMoveClick}>
                <S.SearchButtonDiv>검색하기</S.SearchButtonDiv>
            </S.SearchButton>
            <S.Tabpanel2>최근 검색</S.Tabpanel2>
            <S.Tabpanel3>최근 검색한 내용이 없습니다.</S.Tabpanel3>
            {renderContent()}
        </S.SearchDiv>
    );
};

export default TapComponent;
