import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const Jeonla = () => {
  const [heart1, setHeart1] = useState(false);
  const [heart2, setHeart2] = useState(false);
  const [heart3, setHeart3] = useState(false);
  const [heart4, setHeart4] = useState(false);
  const handleHeart1 = () => {
    setHeart1(!heart1);
  };
  const handleHeart2 = () => {
    setHeart2(!heart2);
  };
  const handleHeart3 = () => {
    setHeart3(!heart3);
  };
  const handleHeart4 = () => {
    setHeart4(!heart4);
  };
  return (
    <S.Wrapper>
      <S.ReviewLine1>
        <S.Review>
          <S.ReviewTitle>
            광한루원
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart1} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart1 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview1.jpg`}
          />
          <S.ReviewText>
            가볍게 산책하고 예쁜 사진 찍기 좋아요. 저녁에는 입장료가 무료입니다.
            광한루와 예촌 켄싱턴 사이 돌담길도 특이하게 꾸며 놓았네요.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            완주 비비정 예술열차
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart2} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart2 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview2.jpeg`}
          />
          <S.ReviewText>
            만경강 뷰를 감상하면서 음료를 즐기기 좋은 곳이다. ​사장님도
            친절하시고 산책길도 잘 조성되어 있어 여유를 갖고 방문하면 좋은
            곳이다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            순천만 습지
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart3} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart3 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview3.jpg`}
          />
          <S.ReviewText>
            순천만의 풍경은 우리나라 어디에도, 세계 어디에도 없는 곳인 것 같다.
            4계절마다 분위기와 느낌이 다르니 주변을 지나간다면 꼭 가보길 권한다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            신지명사십리 해수욕장
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart4} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart4 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview4.jpg`}
          />
          <S.ReviewText>
            찾아가기 쉽지않지만 바꿔말하면 사람들이 많이 없어서 좋을듯 겨울
            미세먼지가 들이닥친 희뿌연 바닷가 , 넓은 모래사장과 듣기좋은
            파도소리
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default Jeonla;
