import React, { useEffect, useRef, useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const PersonComponent = ({
    setPersonComponent,
    updatePersonCounts,
    setPersonVisible,
}) => {
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [kidCount, setKidCount] = useState(0);
    const handleIncreaseAdult = () => {
        setAdultCount((prevCount) => prevCount + 1);
    };

    const handleDecreaseAdult = () => {
        setAdultCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const handleIncreaseChildren = () => {
        setChildrenCount((prevCount) => prevCount + 1);
    };

    const handleDecreaseChildren = () => {
        setChildrenCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const handleIncreasekid = () => {
        setKidCount((prevCount) => prevCount + 1);
    };

    const handleDecreaseKid = () => {
        setKidCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const ref = useRef(null);

    // 외부 클릭 감지를 위한 핸들러
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setPersonComponent(false);
        }
    };

    useEffect(() => {
        // 이벤트 리스너를 문서에 추가
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // 빈 배열은 이펙트가 마운트될 때 한 번만 실행

    const handleFinishClick = () => {
        // 성인, 아동, 유아 인원 수를 객체로 전달
        updatePersonCounts({
            adults: adultCount,
            children: childrenCount,
            kids: kidCount,
        });
        setPersonVisible(false); // 컴포넌트 숨김
    };

    return (
        <S.DivPesonChoice ref={ref}>
            <S.DivPersonChoiceFrame>
                <S.PesonChoiceTitle1>인원 등급 선택</S.PesonChoiceTitle1>
                <S.PesonChoiceTitle2>인원 선택</S.PesonChoiceTitle2>

                <S.DivAdultFrame>
                    <S.DivAdult>
                        <S.DivAdultTitle>성인</S.DivAdultTitle>
                        <S.DivImageAdult>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </S.DivImageAdult>
                        <S.PlusButtonAdult onClick={handleIncreaseAdult}>
                            <S.DivPlusButtonAdult>+</S.DivPlusButtonAdult>
                        </S.PlusButtonAdult>
                        <S.DivAdultCountFrame>
                            <S.InputAdultCount value={adultCount} readOnly />
                        </S.DivAdultCountFrame>
                        <S.MinusButtonAdult onClick={handleDecreaseAdult}>
                            <S.DivMinusButtonAdult>-</S.DivMinusButtonAdult>
                        </S.MinusButtonAdult>
                    </S.DivAdult>

                    <S.DivChildren>
                        <S.DivChildrenTitle>아동</S.DivChildrenTitle>
                        <S.DivImageChildren>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </S.DivImageChildren>
                        <S.PlusButtonChildren onClick={handleIncreaseChildren}>
                            <S.DivPlusButtonChildren>+</S.DivPlusButtonChildren>
                        </S.PlusButtonChildren>
                        <S.ButtonChildren>
                            <S.InputChildrenCount
                                value={childrenCount}
                                readOnly
                            />
                        </S.ButtonChildren>
                        <S.MinusButtonChildren onClick={handleDecreaseChildren}>
                            <S.DivMinusButtonChildren>
                                -
                            </S.DivMinusButtonChildren>
                        </S.MinusButtonChildren>
                    </S.DivChildren>

                    <S.DivKid>
                        <S.DivKidTitle>유아(만 2세미만)</S.DivKidTitle>
                        <S.DivImageKid>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </S.DivImageKid>
                        <S.PlusButtonKid onClick={handleIncreasekid}>
                            <S.DivPlusButtonKid>+</S.DivPlusButtonKid>
                        </S.PlusButtonKid>
                        <S.ButtonKid>
                            <S.InputKidCount value={kidCount} readOnly />
                        </S.ButtonKid>
                        <S.MinusButtonKid onClick={handleDecreaseKid}>
                            <S.DivMinusButtonKid>-</S.DivMinusButtonKid>
                        </S.MinusButtonKid>
                    </S.DivKid>
                </S.DivAdultFrame>
                <S.ButtonSeatChoiceFinish onClick={handleFinishClick}>
                    <S.DivSeatChoiceFinish>선택완료</S.DivSeatChoiceFinish>
                </S.ButtonSeatChoiceFinish>
            </S.DivPersonChoiceFrame>
        </S.DivPesonChoice>
    );
};

export default PersonComponent;
