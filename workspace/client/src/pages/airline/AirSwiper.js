import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S from "./style";

const ImageSlider = () => {
    // 이미지 데이터 객체 배열
    const images = [
        {
            url: "/img/picture/slide_jeju.jpg", // 이미지 파일의 경로와 파일명을 정확히 지정
            value: "jeju",
        },
        {
            url: "/img/picture/slide_yeosu.jpg", // 이미지 파일의 경로와 파일명을 정확히 지정
            value: "Slide 2",
        },
        {
            url: "/img/picture/slide_daegu.jpg",
            value: "Slide 3",
        },
        {
            url: "/img/picture/slide_pohang.jpg",
            value: "Slide 4",
        },
    ];

    // 슬라이더 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // isPaused 상태에 따라 autoplay 설정 변경
        autoplaySpeed: 5000,
        disableOnInteraction: false,
    };

    return (
        <>
            <Slider className="slick-slider" {...settings}>
                {images.map((image, i) => (
                    <div key={i}>
                        <div
                            style={{
                                position: "relative",
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                left:"-90px",
                            }}
                        >
                            <S.SlideImage src={image.url} alt={image.alt} />
                        </div>
                        <div className="slick-dots"></div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default ImageSlider;
