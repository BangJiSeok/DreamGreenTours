import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const KangWon = () => {
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
            비룡폭포
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
            src={`${process.env.PUBLIC_URL}/review/KangWonReview1.jpg`}
          />
          <S.ReviewText>
            평탄한 길이 이어지다가 갑자기 계단이 나오기 시작한다면, 폭포에 거의
            다 도착한 겁니다. 더 위에 있는 토왕성폭포에 비하면 작은 규모이지만
            비온 뒤에 방문했더니 물도 많고 경치도 좋았습니다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            울산바위
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
            src={`${process.env.PUBLIC_URL}/review/KangWonReview2.jpg`}
          />
          <S.ReviewText>
            날씨가 추워 고민하다 갔는데 정상에서 본 청명한 하늘과 산새가 정말
            끝내줬습니다. 하지만 1km가 가파른데, 쉬엄쉬엄 가다보면 선물같은
            경치가 기다리고 있습니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            설악산 국립공원
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
            src={`${process.env.PUBLIC_URL}/review/KangWonReview3.jpg`}
          />
          <S.ReviewText>
            사시사철 자연은 언제나 좋은 풍경을 주죠 지금부터 가을 단풍이
            멋드러지게 물들 준비를 하겠네요. 산타기를 좋아하지 않아요. 입구
            주변에서 산을 바라보기만 해도 좋을거 같네요
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            경포해변
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
            src={`${process.env.PUBLIC_URL}/review/KangWonReview4.jpg`}
          />
          <S.ReviewText>
            동해안 하면 떠오르는 곳은 바로 경포 해변이겠죠. 여름이든 겨울이든
            푸르른 바다를 볼 수 있는 곳. 그 중에서도 경포해변이 최고입니다.
            주변에 늘어선 호텔들도 바다 경치와 어우러져 장관입니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default KangWon;
