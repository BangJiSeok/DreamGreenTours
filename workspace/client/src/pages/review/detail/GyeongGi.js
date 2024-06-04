import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
const GyeongGi = () => {
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
            남한산성
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
            src={`${process.env.PUBLIC_URL}/review/GyeongGiReview1.jpg`}
          />
          <S.ReviewText>
            남한산성 내부에서 성곽까지 올라가려면 좀 올라가긴 해야 하지만 저녁에
            성곽에 올라가시면 서울의 야경이 한눈에 보여서 멋있는 전경을 보실 수
            있습니다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            수원 화성
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
            src={`${process.env.PUBLIC_URL}/review/GyeongGiReview2.jpg`}
          />
          <S.ReviewText>
            이 성은 축조 시 기록이 남아 있는 유일한 것으로 알고 있습니다. 꼭
            필히 가 보시는 것을 추천합니다. 옛날과 현재가 공존하는 것을 확실히
            느낄 수 있습니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            에버랜드
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
            src={`${process.env.PUBLIC_URL}/review/GyeongGiReview3.jpg`}
          />
          <S.ReviewText>
            놀이기구도 다 재밌고 넓고 아이들이랑 같이 가면 좋은곳 먹거리 많고
            맛있고 한번가면 또 가고 싶음 아이들 있으면 한번 가는것도 좋을것 같음
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            한국 민속촌
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
            src={`${process.env.PUBLIC_URL}/review/GyeongGiReview4.jpg`}
          />
          <S.ReviewText>
            약간 올드한 느낌이 있어서 그동안 지나치기만 했고 안갔었다. 근데
            어쩌다 가봤더니 오히려 어린애들 데리고 가기에 좋고 산책도 힐링도..
            게다가 공연 볼거리도 있어서 전혀 돈 아깝지 않음
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default GyeongGi;
