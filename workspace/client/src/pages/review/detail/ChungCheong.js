import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
const ChungCheong = () => {
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
            개화예술공원
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
            src={`${process.env.PUBLIC_URL}/review/ChungCheongReview1.jpg`}
          />
          <S.ReviewText>
            커피한잔과 함께 예술을 즐기기 좋습니다. 각종 동물도 볼 수 있고,
            다양한 조각용품을 볼 수 있습니다. 잠깐의 휴식 후 온실을 들어갔을때
            깜짝 놀랐습니다. 조각각과 예술작품의 조화는 잊혀지지 않네요
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            현충사
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
            src={`${process.env.PUBLIC_URL}/review/ChungCheongReview2.jpg`}
          />
          <S.ReviewText>
            충무공 이순신장군의 영정을 모신 사당! 유치원 아이들부터 어른들까지
            피크닉 장소로도 더 유명한 현충사~고즈넉하면서도 자연경광이 너무
            좋아요! 가을이 더 예쁜것 같아요!
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            궁남지
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
            src={`${process.env.PUBLIC_URL}/review/ChungCheongReview3.jpg`}
          />
          <S.ReviewText>
            동네 공원같이 소박하지만 쉼터가 되어주는곳. 연꽃과 수련이 많이
            피었고 거기에 함께사는 쇠물닭도 볼수있어 좋았어요. 입장료가 없다는건
            장점중의 장점입니다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            하늘물빛정원
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
            src={`${process.env.PUBLIC_URL}/review/ChungCheongReview4.jpg`}
          />
          <S.ReviewText>
            대전인근으로 찜질방, 까페, 채식뷔페, 삼초삼겹살식당 등이
            나뉘어져있습니다. 채식뷔페는 종류도 많고 싱싱하고 맛있어서 과식하기
            쉽습니다. 호수공원도 멋있게 만들어서 주위로 산책도 가능합니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default ChungCheong;
