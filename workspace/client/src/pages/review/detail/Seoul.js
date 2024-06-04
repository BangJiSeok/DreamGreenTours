import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const Seoul = () => {
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
            북촌 한옥마을
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
            src={`${process.env.PUBLIC_URL}/review/SeoulReview1.jpg`}
          />

          <S.ReviewText>
            가장 한국적인 풍경을 볼 수 있는 곳이라서 서울여행하는 분께는 한번쯤
            추천합니다. 북에는 볼거리도 많지만 맛있는 음식점도 많아요.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            봉은사
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
            src={`${process.env.PUBLIC_URL}/review/SeoulReview2.jpg`}
          />
          <S.ReviewText>
            석가탄신일에 정말 가볼만함 서울 한복판에 이렇게 큰 절이 잘
            없는거같고, 특히 행사땐 등이 정말 너무 이쁘게 되어있음
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            흥인지문
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
            src={`${process.env.PUBLIC_URL}/review/SeoulReview3.jpg`}
          />
          <S.ReviewText>
            오래간 만에 동대문역에서 내려 동대문을 보았네요. 옆에 JW 메리어트
            동대문 호텔이 들어와서 새건물과 옛건물이 어우러진 광경을 볼수
            있네요. 저녁에 본 동대문도 아름답습니다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            조계사
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
            src={`${process.env.PUBLIC_URL}/review/SeoulReview4.jpg`}
          />
          <S.ReviewText>
            종로1가에 위치해서, 인사동, 경복궁을 돌아볼때 함께 들러 구경하기
            좋은 장소입니다. 도심 한복판에 불교 사찰이 있어서 외국 친구들에게도
            추천하는 장소입니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default Seoul;
