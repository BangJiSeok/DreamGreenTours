import React, { useEffect, useRef, useState } from "react";
import S from "./style";

const SeatComponent = ({ setSeatComponent, setSelectedSeat }) => {
    const [selectedSeat, setSelectedSeatInternal] = useState("일반석");

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setSeatComponent(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSeatSelection = (seatType) => {
        setSelectedSeatInternal(seatType);
        setSelectedSeat(seatType); // 상위 컴포넌트로 선택된 좌석 정보 업데이트
    };

    const handleFinishClick = () => {
        setSeatComponent(false);
    };

    return (
        <S.DivSeatChoice ref={ref}>
            <S.DivSeatFrame>
                <S.DivSeatTitle1>자석 등급 선택</S.DivSeatTitle1>
                <S.DivSeatTitle2>좌석 선택</S.DivSeatTitle2>
                <S.ButtonGroup>
                    <S.ButtonNormalSeat onClick={() => handleSeatSelection("일반석")}>
                        <S.DivNormalSeat>일반석</S.DivNormalSeat>
                    </S.ButtonNormalSeat>
                    <S.ButtonPremiumNormalSeat onClick={() => handleSeatSelection("프리미엄 일반석")}>
                        <S.DivPremiumNormalSeat>프리미엄 일반석</S.DivPremiumNormalSeat>
                    </S.ButtonPremiumNormalSeat>
                    <S.ButtonFirstSeat onClick={() => handleSeatSelection("일등석")}>
                        <S.DivFirstSeat>일등석</S.DivFirstSeat>
                    </S.ButtonFirstSeat>
                    <S.ButtonBusinessSeat onClick={() => handleSeatSelection("비즈니스석")}>
                        <S.DivBusinessSeat>비즈니스석</S.DivBusinessSeat>
                    </S.ButtonBusinessSeat>
                </S.ButtonGroup>
                <S.ButtonSeatChoiceFinish onClick={handleFinishClick}>
                    <S.DivSeatChoiceFinish>선택완료</S.DivSeatChoiceFinish>
                </S.ButtonSeatChoiceFinish>
            </S.DivSeatFrame>
        </S.DivSeatChoice>
    );
};

export default SeatComponent;
