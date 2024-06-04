import React, { useState, useEffect, useRef } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const RoomComponent = ({
    setRoom,
    updateRoomCount,
    setRoomVisible,
}) => {
    const [roomCount, setRoomCount] = useState(1);

    const handleIncreaseRoom = () => {
        setRoomCount((prevCount) => prevCount + 1);
    };

    const handleDecreaseRoom = () => {
        setRoomCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const ref = useRef(null);

    // 외부 클릭 감지를 위한 핸들러
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setRoom(false);
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
        // 성인, 아동,  인원 수를 객체로 전달setRoomComponent
        updateRoomCount({
            room: roomCount,
        });
        setRoomVisible(false); // 컴포넌트 숨김
    };
    return (
        <S.DivRoomChoice ref={ref}>
            <S.DivRoomChoiceFrame>
                <S.RoomChoiceTitle1>객실 선택</S.RoomChoiceTitle1>

                <S.DivRoomFrame>
                    <S.DivRoom2>
                        <S.DivRoomTitle>객실</S.DivRoomTitle>
                        <S.DivImageRoom2>
                         <FontAwesomeIcon icon={faCircleQuestion} />
                        </S.DivImageRoom2>
                        <S.PlusButtonRoom onClick={handleIncreaseRoom}>
                            <S.DivPlusButtonRoom>+</S.DivPlusButtonRoom>
                        </S.PlusButtonRoom>
                        <S.DivRoomCountFrame>
                            <S.InputRoomCount value={roomCount} readOnly />
                        </S.DivRoomCountFrame>
                        <S.MinusButtonRoom onClick={handleDecreaseRoom}>
                            <S.DivMinusButtonRoom>-</S.DivMinusButtonRoom>
                        </S.MinusButtonRoom>
                    </S.DivRoom2>
                </S.DivRoomFrame>

                <S.ButtonChoiceFinish2 onClick={handleFinishClick}>
                    <S.DivChoiceFinish>선택완료</S.DivChoiceFinish>
                </S.ButtonChoiceFinish2>
            </S.DivRoomChoiceFrame>
        </S.DivRoomChoice>
    );
};

export default RoomComponent;
