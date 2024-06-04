import React, { useEffect, useState } from "react";
import S from "./style";

const MdRecommand = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/hotelData") // 데이터를 불러올 URL
            .then((response) => response.json()) // 응답을 JSON 형태로 파싱
            .then((data) => {
                setHotels(data.slice(0, 3)); // 상위 3개 항목만 선택
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
        <S.DivMdRecommand>
            <S.DivMdRecommandContainer>
                <S.DivMdRecommandTitle>MD 추천</S.DivMdRecommandTitle>
                <S.DivHotelCardContainer>
                    {hotels.map((hotel) => (
                        <ul>
                            <li>
                                <S.DivHotelCard key={hotel.id}>
                                    <S.DivHotelCardFirst>
                                        <S.ImageHotelCardFirst
                                            src={hotel.hotelpicture} // 호텔 이미지를 가져옴
                                            hover
                                        />
                                    </S.DivHotelCardFirst>

                                    <S.DivHotelCardFirstContainer>
                                        <S.ButtonHotelCardFirst>
                                            <S.DivHotelCardFirstContent>
                                                투몬비치 아이와함께 하기 좋은
                                            </S.DivHotelCardFirstContent>
                                        </S.ButtonHotelCardFirst>
                                        <S.DivHotelCardFirstNameContainer>
                                            <S.DivHotelCardFirstName>
                                                {hotel.korName}
                                            </S.DivHotelCardFirstName>
                                        </S.DivHotelCardFirstNameContainer>
                                        <S.DivHotelCardFirstPrice>
                                            {hotel.price.toLocaleString()} 원 ~
                                        </S.DivHotelCardFirstPrice>
                                    </S.DivHotelCardFirstContainer>
                                </S.DivHotelCard>
                            </li>
                        </ul>
                    ))}
                </S.DivHotelCardContainer>
            </S.DivMdRecommandContainer>
        </S.DivMdRecommand>
    );
};

export default MdRecommand;
