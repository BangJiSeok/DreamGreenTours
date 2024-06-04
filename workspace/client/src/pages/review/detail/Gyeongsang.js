import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
const Gyeongsang = () => {
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
            한려수도 조망 케이블카{" "}
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
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview1.jpg`}
          />
          <S.ReviewText>
            큰기대 안했는데 정말 좋네요. 남해의 매력을 느끼기에 충분합니다.
            사천케이블카 개장 이후 방문객이 조금 줄었다는데, 그래도 여전히 많은
            사람들이 찾습니다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            호미곶 해맞이 광장{" "}
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
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview2.jpg`}
          />
          <S.ReviewText>
            넓은 광장과 탁트힌 바다만으로도 충분히 가볼만한 곳입니다. 답답한
            마음이 확~ 뚫리네요. 아이들이 뛰어놀기에도 충분히 넓은 공간때문에
            너무 좋았습니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            진주 수목원{" "}
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
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview3.jpg`}
          />
          <S.ReviewText>
            진주하면 이 수목원을 빼놓을 수 없다.자연 휴양림이라고 불릴만큼
            다양한 수목들과 자연이 주는 편안함을 느낄 수 있는 곳이다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            와인 터널{" "}
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
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview4.jpg`}
          />
          <S.ReviewText>
            여름에 가면 시원하고 좋아요 안에 간단한 주전부리와함께 와인 마실 수
            있습니다. 와인에 대해 잘 모르지만 제 입에는 맛있었어요.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default Gyeongsang;
