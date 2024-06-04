import React, { useState, useEffect, useRef } from "react";
import S from "./style";
import RoundTapFormPopUp, { airportData } from "./RoundTapFormPopUp";

const RoundTapForm = () => {
    const [selectedDepartureAirport, setSelectedDepartureAirport] = useState(
        airportData[0]
    );
    const [selectedArrivalAirport, setSelectedArrivalAirport] = useState(null); // 선택된 도착지 공항 정보를 저장하는 상태

    // 공항 선택 시 상태 업데이트
    const handleAirportSelect = (airport, type) => {
        if (type === "departure") {
            setSelectedDepartureAirport(airport);
        } else if (type === "arrival") {
            setSelectedArrivalAirport(airport);
        }
    };

    const [departureValue, setDepartureValue] = useState("");
    const [arrivalValue, setArrivalValue] = useState("");

    const handleDepartureClick = () => {
        if (!departureValue) {
            // 입력 값이 없을 때만 플레이스홀더를 지움
            setDepartureValue("");
        }
    };

    const handleArrivalClick = () => {
        if (!arrivalValue) {
            // 입력 값이 없을 때만 플레이스홀더를 지움
            setArrivalValue("");
        }
    };

    const [showAirport, setShowAirport] = useState(false);
    const popupRef = useRef(null);
    const [currentType, setCurrentType] = useState("departure");
    const handleAirpotPopup = (type) => {
        setShowAirport(true); // 팝업을 보여주도록 상태를 true로 설정
        setCurrentType(type); // 현재 선택 유형을 상태로 관리 (예: 'departure' 또는 'arrival')
    };

    const handleClickOutside = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setShowAirport(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <S.DivDepartureArrival>
            <S.DivDeparture>
                <S.DivDepartureFrame>
                    <S.DivRoundTripStart
                        onClick={() => handleAirpotPopup("departure")}
                    >
                        {selectedDepartureAirport &&
                            selectedDepartureAirport.airportKor}
                    </S.DivRoundTripStart>

                    <S.DivDepartureInput
                        value={
                            selectedDepartureAirport
                                ? selectedDepartureAirport.airportEng
                                : departureValue
                        }
                        onChange={(e) => setDepartureValue(e.target.value)}
                        onClick={handleDepartureClick}
                        placeholder=""
                    />
                </S.DivDepartureFrame>
            </S.DivDeparture>
            <S.ChangeIconButton>
                <S.ChangeIconSpan>
                    <S.ChangeIconDiv>
                        <S.ChangeIconImg src="/img/icon/changeButton.jpg" />
                    </S.ChangeIconDiv>
                </S.ChangeIconSpan>
            </S.ChangeIconButton>
            <S.DivArrival>
                <S.DivArrivalFrame>
                    <S.DivRoundTripLast
                        onClick={() => handleAirpotPopup("arrival")}
                    >
                        {selectedArrivalAirport
                            ? selectedArrivalAirport.airportKor
                            : "도착지"}
                    </S.DivRoundTripLast>
                    <S.DivArrivalInput
                        value={
                            selectedArrivalAirport
                                ? selectedArrivalAirport.airportEng
                                : arrivalValue
                        }
                        onChange={(e) => setArrivalValue(e.target.value)}
                        onClick={handleArrivalClick}
                        placeholder=""
                    />
                </S.DivArrivalFrame>
            </S.DivArrival>
            {showAirport && (
                <RoundTapFormPopUp
                    onAirportSelect={handleAirportSelect}
                    setShowAirport={setShowAirport}
                    currentType={currentType}
                />
            )}
        </S.DivDepartureArrival>
    );
};

export default RoundTapForm;
