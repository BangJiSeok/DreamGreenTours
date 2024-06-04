import React from "react";
import S from "./style";

const localData = [
    {
        id: 1,
        city: "제주",
        nation: "대한민국",
    },
    {
        id: 2,
        city: "서울",
        nation: "대한민국",
    },
    {
        id: 3,
        city: "부산",
        nation: "대한민국",
    },
    {
        id: 4,
        city: "강릉",
        nation: "대한민국",
    },
    {
        id: 5,
        city: "여수",
        nation: "대한민국",
    },
    {
        id: 6,
        city: "인천",
        nation: "대한민국",
    },
    {
        id: 7,
        city: "속초",
        nation: "대한민국",
    },
    {
        id: 8,
        city: "경주",
        nation: "대한민국",
    },
    {
        id: 9,
        city: "전주",
        nation: "대한민국",
    },
    {
        id: 10,
        city: "울산",
        nation: "대한민국",
    },
    {
        id: 11,
        city: "양양",
        nation: "대한민국",
    },
    {
        id: 12,
        city: "고성",
        nation: "대한민국",
    },
    {
        id: 13,
        city: "남해",
        nation: "대한민국",
    },
    {
        id: 14,
        city: "거제",
        nation: "대한민국",
    },
    {
        id: 15,
        city: "대전",
        nation: "대한민국",
    },
    {
        id: 16,
        city: "통영",
        nation: "대한민국",
    },
];

const HotelLocation = ({ onCitySelect }) => {
    return (
        <S.DivHotelLocationtWrapper>
            <S.DivHotelLocationFrame>
                <S.DivHotelLocationTitleFrame>
                    <S.DivHotelLocationTitle>국내</S.DivHotelLocationTitle>
                </S.DivHotelLocationTitleFrame>
                <S.DivHotelLocationItemFrame>
                    {localData.map((location) => (
                        <S.DivHotelLocation
                            key={location.id} // 고유 key 할당
                            onClick={() =>
                                onCitySelect(location.city, location.nation)
                            }
                        >
                            <S.DivCityRow>{location.city}</S.DivCityRow>
                        </S.DivHotelLocation>
                    ))}
                </S.DivHotelLocationItemFrame>
            </S.DivHotelLocationFrame>
        </S.DivHotelLocationtWrapper>
    );
};

export default HotelLocation;
