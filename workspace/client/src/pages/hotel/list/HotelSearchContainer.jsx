import React, { useEffect, useState } from "react";
import S from "./style";
import HotelLocation from "../HotelLocation";
import PersonSeatComponent from "../PersonSeatComponent";
import RoomComponent from "../RoomComponent";

const HotelSearchContainer = ({ location, showHotelSearch }) => {
    const [adultCount, setAdultCount] = useState(2); // 기본 성인 2명
    const [childrenCount, setChildrenCount] = useState(0); // 기본 아동 0명
    const [roomCount, setRoomCount] = useState(1); // 기본 객실 1개
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedNation, setSelectedNation] = useState("");
    const [showLocation, setShowLocation] = useState(false);
    const [showPerson, setShowPerson] = useState(false);
    const [showRoom, setShowRoom] = useState(false);

    const handleCitySelect = (city, nation) => {
        setSelectedCity(city);
        setSelectedNation(nation);
        setShowLocation(false);
    };

    const handleUpdatePersonCounts = ({ adults, children }) => {
        setAdultCount(adults);
        setChildrenCount(children);
    };

    const handleUpdateRoomCount = ({ room }) => {
        setRoomCount(room);
    };

    const displayLocation =
        selectedCity && selectedNation
            ? `${selectedCity}, ${selectedNation}`
            : "";

    const togglePersonSeat = () => {
        setShowPerson(!showPerson);
    };
    const toggleRoom = () => {
        setShowRoom(!showRoom);
    };

    const renderPersonCountText = () =>
        `성인 ${adultCount}${
            childrenCount > 0 ? `, 아동 ${childrenCount}` : ""
        }`;

    const renderRoomCountText = () => `객실 ${roomCount}`;

    const setPersonVisible = (visible) => {
        setShowPerson(visible);
    };

    const setRoomVisible = (visible) => {
        setShowRoom(visible);
    };

    return (
        <S.DivSearch>
            <S.DivSearchContainer>
                <S.DivSearchForm>
                    <S.DivSearchFormTitle>호텔 검색</S.DivSearchFormTitle>
                    <S.DivChoiceRegion
                        onClick={() => setShowLocation(!showLocation)}
                    >
                        <S.InputChoiceRegion
                            value={displayLocation}
                            readOnly
                            placeholder="지역을 선택해주세요"
                        />
                    </S.DivChoiceRegion>
                    {showLocation && (
                        <HotelLocation onCitySelect={handleCitySelect} />
                    )}

                    <S.DivCheckInout>
                        <S.DivCheckIn>
                            <S.DivCheckInTitle>체크인</S.DivCheckInTitle>
                            <S.DivCheckInDate>2024.05.10 (금)</S.DivCheckInDate>
                        </S.DivCheckIn>
                        <S.DivCheckOutTitle>체크아웃</S.DivCheckOutTitle>
                        <S.DivCheckOutDate>2024.05.11 (토)</S.DivCheckOutDate>
                    </S.DivCheckInout>

                    <S.DivPerson onClick={togglePersonSeat}>
                        <S.DivImagePerson>
                            <S.ImagePerson src={`${process.env.PUBLIC_URL}/img/icon/person.png`} />
                        </S.DivImagePerson>
                        <S.DivPersonCount>
                            {renderPersonCountText()}
                        </S.DivPersonCount>
                    </S.DivPerson>

                    <S.DivRoom1 onClick={toggleRoom}>
                        <S.DivImageRoom1>
                            <S.ImageRoom src={`${process.env.PUBLIC_URL}/img/icon/room.png`} />
                        </S.DivImageRoom1>
                        <S.DivRoomCount>{renderRoomCountText()}</S.DivRoomCount>
                    </S.DivRoom1>

                    {showPerson && (
                        <PersonSeatComponent
                            updatePersonCounts={handleUpdatePersonCounts}
                            setPersonVisible={setPersonVisible}
                            setPerson={setShowPerson}
                        />
                    )}

                    {showRoom && (
                        <RoomComponent
                            updateRoomCount={handleUpdateRoomCount}
                            setRoomVisible={setRoomVisible}
                            setRoom={setShowRoom}
                        />
                    )}
                </S.DivSearchForm>
                <S.DivLatelySearchTitle>최근 검색</S.DivLatelySearchTitle>
                <S.DivLatelySearchList>
                    최근 검색한 내용이 없습니다.
                </S.DivLatelySearchList>
            </S.DivSearchContainer>
        </S.DivSearch>
    );
};

export default HotelSearchContainer;
