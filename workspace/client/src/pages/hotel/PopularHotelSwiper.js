import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const hotelData = [
    {
        id: 1,
        localForiegn: "국내호텔",
        hotelName: "그랜드 하얏트 제주",
        hotelPrice: "288,850",
    },
    {
        id: 2,
        localForiegn: "국내호텔",
        hotelName: "신라호텔 서귀포",
        hotelPrice: "392,750",
    },
    {
        id: 3,
        localForiegn: "국내호텔",
        hotelName: "국제호텔 제주",
        hotelPrice: "242,750",
    },
    {
        id: 4,
        localForiegn: "국내호텔",
        hotelName: "신화 월드",
        hotelPrice: "792,750",
    },
    {
        id: 5,
        localForiegn: "국내호텔",
        hotelName: "한화리조트",
        hotelPrice: "592,750",
    },
    {
        id: 6,
        localForiegn: "국내호텔",
        hotelName: "ㅇㅇ 리조트",
        hotelPrice: "112,650",
    },
    {
        id: 7,
        localForiegn: "국내호텔",
        hotelName: "ㅇㅇㅇㅇ 리조트",
        hotelPrice: "321,950",
    },
    {
        id: 8,
        localForiegn: "국내호텔",
        hotelName: "ㅇㅇㅇ호텔",
        hotelPrice: "122,750",
    },
    {
        id: 9,
        localForiegn: "국내호텔",
        hotelName: "롯데 호텔",
        hotelPrice: "532,750",
    },
    {
        id: 10,
        localForiegn: "국내호텔",
        hotelName: "롯데 호텔",
        hotelPrice: "512,750",
    },
    {
        id: 11,
        localForiegn: "국내호텔",
        hotelName: "롯데 호텔",
        hotelPrice: "512,750",
    },
    {
        id: 12,
        localForiegn: "국내호텔",
        hotelName: "롯데 호텔",
        hotelPrice: "512,750",
    },
];


const PopularHotelSwiper = () => {
    return (
        <S.DivPopluarHaveTo >
            <S.DivPopluarHaveToFrame>
                {/* <S.DivPopluarTitle>인기 호텔 모음</S.DivPopluarTitle>
                <S.DivPopluarContainer>
                    <S.DivPopluarFrame
style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                    >
                        <S.ButtonPopluarFirst>
                            <S.DivPopluarFirst>
                                <S.ImagePopluarFirst src="_637498740487020051-png0.png" />
                            </S.DivPopluarFirst>
                            <S.DivPopluarFirstTitleFrame>
                                <S.DivPopluarFirstTitle>
                                    국내호텔
                                </S.DivPopluarFirstTitle>
                            </S.DivPopluarFirstTitleFrame>
                            <S.DivPopluarFirstNameFrame>
                                <S.DivPopluarFirstName>
                                    그랜드 하얏트 제주
                                </S.DivPopluarFirstName>
                            </S.DivPopluarFirstNameFrame>
                            <S.DivPopluarFirstPrice>
                                288,850
                            </S.DivPopluarFirstPrice>
                            <S.DivPopluarFirstWon>원 ~</S.DivPopluarFirstWon>
                        </S.ButtonPopluarFirst>

                        <S.ButtonPopluarSecond>
                            <S.DivPopluarSecond>
                                <S.ImagePopluarSecond src="_635116574873316464-jpg0.png" />
                            </S.DivPopluarSecond>
                            <S.DivPopluarSecondTitleFrame>
                                <S.DivPopluarSecondTitle>
                                    국내호텔
                                </S.DivPopluarSecondTitle>
                            </S.DivPopluarSecondTitleFrame>
                            <S.DivPopluarSecondNameFrame>
                                <S.DivPopluarSecondName>
                                    코스모폴리탄 라스베이거스 
                                </S.DivPopluarSecondName>
                            </S.DivPopluarSecondNameFrame>
                            <S.DivPopluarSecondPrice>
                                907,900
                            </S.DivPopluarSecondPrice>
                            <S.DivPopluarSecondWon>원 ~</S.DivPopluarSecondWon>
                        </S.ButtonPopluarSecond>
                        <S.ButtonPopluarThird>
                            <S.DivPopluarThird>
                                <S.ImagePopluarThird src="_635116574873282062-jpg0.png" />
                            </S.DivPopluarThird>
                            <S.DivPopluarThridTitleFrame>
                                <S.DivPopluarThridTitle>
                                    국내호텔
                                </S.DivPopluarThridTitle>
                            </S.DivPopluarThridTitleFrame>
                            <S.DivPopluarThirdNameFrame>
                                <S.DivPopluarThirdName>
                                    스위쏘텔 난카이 오사카 
                                </S.DivPopluarThirdName>
                            </S.DivPopluarThirdNameFrame>
                            <S.DivPopluarThirdPrice>
                                392,970
                            </S.DivPopluarThirdPrice>
                            <S.DivPopluarThridWon>원 ~</S.DivPopluarThridWon>
                        </S.ButtonPopluarThird>
                        <S.ButtonPopluarFourth>
                            <S.DivPopluarFourth>
                                <S.ImagePopluarFourth src="_636306314037814713-jpg0.png" />
                            </S.DivPopluarFourth>
                            <S.DivPopluarThridFourthFrame>
                                <S.DivPopluarFourthTitle>
                                    국내호텔
                                </S.DivPopluarFourthTitle>
                            </S.DivPopluarThridFourthFrame>
                            <S.DivPopluarFourthNameFrame>
                                <S.DivPopluarFourthName>
                                    썸머셋 그랜드 하노이  
                                </S.DivPopluarFourthName>
                            </S.DivPopluarFourthNameFrame>
                            <S.DivPopluarFourthPrice>
                                127,120
                            </S.DivPopluarFourthPrice>
                            <S.DivPopluarFourthWon>원 ~</S.DivPopluarFourthWon>
                        </S.ButtonPopluarFourth>
                    </S.DivPopluarFrame>
                    <S.DivPopluarArrowFrame1 onClick={handlePrev}>
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    </S.DivPopluarArrowFrame1>
                    <S.DivPopluarArrowFrame2 onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </S.DivPopluarArrowFrame2>
                </S.DivPopluarContainer> */}

                <S.DivHaveToGoHere>여기는 가봐야지~</S.DivHaveToGoHere>
                <S.DivHaveToGoHereContainer>
                    
                        {hotelData.map((datas, i) => (
                            <S.DivHaveToGoHereFrame key={datas.id}>
                                <S.ButtonHaveToGoHere>
                                    <S.DivHaveToGoHereHotelFrame>
                                        <S.DivHaveToGoHereHotel>
                                            국내호텔
                                        </S.DivHaveToGoHereHotel>
                                    </S.DivHaveToGoHereHotelFrame>
                                    <S.DivHaveToGoHereHotelNameFrame>
                                        <S.DivHaveToGoHereHotelName>
                                            호시노 리조트 리조나레 괌
                                        </S.DivHaveToGoHereHotelName>
                                    </S.DivHaveToGoHereHotelNameFrame>
                                    <S.DivHaveToGoHereHotelPrice>
                                        244,790 원 ~
                                    </S.DivHaveToGoHereHotelPrice>
                                    <S.DivHaveToGoHereImageFrame>
                                        <S.ImageHaveToGoHere src="_637897911839764856-jpg0.png" />
                                    </S.DivHaveToGoHereImageFrame>
                                </S.ButtonHaveToGoHere>
                            </S.DivHaveToGoHereFrame>
                        ))}
                    <S.DivPopluarArrowFrame1>
                        <S.DivPopluarArrowLeft>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </S.DivPopluarArrowLeft>
                    </S.DivPopluarArrowFrame1>
                    <S.DivPopluarArrowFrame2>
                        <S.ImagePopluarArrowRight>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </S.ImagePopluarArrowRight>
                    </S.DivPopluarArrowFrame2>
                </S.DivHaveToGoHereContainer>
            </S.DivPopluarHaveToFrame>
        </S.DivPopluarHaveTo>
    );
};

export default PopularHotelSwiper;
