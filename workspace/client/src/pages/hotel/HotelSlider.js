import React from "react";
import S from "./style";

const HotelSlider = () => {
    return (
        <S.DivHotelSlider>
            <S.DivHotelSliderTitle>{datas.hotel_title}</S.DivHotelSliderTitle>
            <S.DivHotelSliderContainer>
                <div class="overlay-horizontal-border-shadow">
                    <div class="container2">
                        <div class="image">
                            <div class="image-fill">
                                <div class="image2"></div>
                            </div>
                        </div>
                        <img
                            class="a-9875-bb-3-z-jpg"
                            src="a-9875-bb-3-z-jpg0.png"
                        />
                    </div>
                    <div class="background-border">
                        <div class="_3-5">3.5성급</div>
                    </div>
                    <div class="container3">
                        <div class="div2">크라운 플라자 리조트 괌</div>
                    </div>
                    <div class="container4">
                        <div class="div3">#괌호텔 #추천호텔</div>
                    </div>
                    <div class="container5">
                        <div class="crowne-plaza-resort-guam">
                            Crowne Plaza Resort Guam
                        </div>
                    </div>
                </div>
            </S.DivHotelSliderContainer>
        </S.DivHotelSlider>
    );
};

export default HotelSlider;
