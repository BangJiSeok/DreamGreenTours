import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
const Jeju = () => {
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
            성산 일출봉
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
            src={`${process.env.PUBLIC_URL}/review/JejuReview1.jpg`}
          />
          <S.ReviewText>
            제주도에 간다면 무조건 들러야하는 제주도의 대표 명소입니다 여기가
            제주도군! 이라고 생각이 드는 풍경을 만날 수 있습니다.
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            한라산 국립공원
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
            src={`${process.env.PUBLIC_URL}/review/JejuReview2.jpg`}
          />
          <S.ReviewText>
            안개가 너무 많아서 최단코스인 영실휴게소에서 출발해서 병풍바위까지만
            올라갔는데 앞이 안 보여서 되돌아왔음.꼭 다시 가보고 싶음.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            만장굴
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
            src={`${process.env.PUBLIC_URL}/review/JejuReview3.jpg`}
          />
          <S.ReviewText>
            끝에 큰 석주가 있어서 멋집니다 가는길에도 설명도 자세하게 잘있고
            아이들과 같이 가면 재밌을거 같습니다 그리고 사진 찍기 좋은곳도 있고
            동굴에 대해서 공부도 하고 좋은 추억 남기기에 좋은곳 같습니다👍
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            생각하는 정원
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
            src={`${process.env.PUBLIC_URL}/review/JejuReview4.jpg`}
          />
          <S.ReviewText>
            정말 생각하는 정원이라는 이름이 어울리네요. 역사와 문화가 있는
            곳이라 추천합니다. 멋진 분재와 돌들로 이루어진 정원과 이를 만드는
            과정을 통해 자연으로부터 배운 원장님의 통찰들이 이 장소를 가치있게
            한다고 생각합니다.
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default Jeju;
