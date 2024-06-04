import React from "react";
import S from "./style";

const HotelSwiper = () => {
    return (
        <S.DivHotelSwiper>
            <S.DivHotelSwiperContainer>
                <S.DivHotelSwiperBackGround>
                    <S.DivImageExplanation>

                    </S.DivImageExplanation>
                    <S.DivHotelSwiperImage>
                        <S.ImageHotelSwiper src="/img/picture/jeju-shinwha.png" />
                    </S.DivHotelSwiperImage>
                </S.DivHotelSwiperBackGround>
            </S.DivHotelSwiperContainer>
        </S.DivHotelSwiper>
    );
};

export default HotelSwiper;
