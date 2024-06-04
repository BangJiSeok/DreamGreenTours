import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const Review = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <button className="rightArrow" onClick={onClick} type="button">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="leftArrow" onClick={onClick} type="button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  };

  const settings = {
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const navigate = useNavigate();

  const handleClick = (text) => {
    let path = `/review/${text}`;
    navigate(path);
  };

  const handleWrite = () => {
    navigate("/write");
  };

  const YoutubeVideo = ({ videoId }) => {
    return (
      <div style={{ marginLeft: "1rem" }}>
        <iframe
          className="youtube-video"
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  const isMobile = window.innerWidth < 360;
  return (
    <>
      <S.Head>
        <Layout isUse={true} />
      </S.Head>
      <S.Wrapper>
        <S.Title>후기를 보려는 여행지를 선택하세요</S.Title>
        <S.LocationWrapper>
          {isMobile ? (
            <>
              <S.Location onClick={() => handleClick("Seoul")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/seoul.png`}
                />
                <S.LocationText>서울</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("KangWon")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/kangwon.png`}
                />
                <S.LocationText>강원도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("Jeonla")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/jeonla.png`}
                />
                <S.LocationText>전라도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("Gyeongsang")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/keongsang.png`}
                />
                <S.LocationText>경상도</S.LocationText>
              </S.Location>

              <S.Location onClick={() => handleClick("GyeongGi")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/keongi.png`}
                />
                <S.LocationText>경기도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("ChungCheong")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/chong.png`}
                />
                <S.LocationText>충청도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("Jeju")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/jeju.png`}
                />
                <S.LocationText>제주도</S.LocationText>
              </S.Location>
            </>
          ) : (
            <Slider {...settings}>
              <S.Location onClick={() => handleClick("Seoul")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/seoul.png`}
                />
                <S.LocationText>서울</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("KangWon")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/kangwon.png`}
                />
                <S.LocationText>강원도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("Jeonla")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/jeonla.png`}
                />
                <S.LocationText>전라도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("Gyeongsang")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/keongsang.png`}
                />
                <S.LocationText>경상도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("GyeongGi")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/keongi.png`}
                />
                <S.LocationText>경기도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("ChungCheong")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/chong.png`}
                />
                <S.LocationText>충청도</S.LocationText>
              </S.Location>
              <S.Location onClick={() => handleClick("Jeju")}>
                <S.LocationImg
                  src={`${process.env.PUBLIC_URL}/home/circle/jeju.png`}
                />
                <S.LocationText>제주도</S.LocationText>
              </S.Location>
            </Slider>
          )}
        </S.LocationWrapper>
        <S.ReviewList>
          <Outlet />
          <S.WriteBtn onClick={handleWrite}>후기 작성</S.WriteBtn>
        </S.ReviewList>
        <S.VideoText>후기 영상</S.VideoText>
        <S.VideoWrapper>
          <YoutubeVideo videoId={"fV_1QWUBi1U"} />
          <YoutubeVideo videoId={"6sGm1izfhVU"} />
          <YoutubeVideo videoId={"bWylD-I425M"} />
        </S.VideoWrapper>
      </S.Wrapper>
    </>
  );
};

export default Review;
