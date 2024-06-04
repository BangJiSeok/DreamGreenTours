import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {};

S.Head = styled.div``;

S.Wrapper = styled.div`
  ${flexCenterColumn}
  float: left;
  @media (max-width: 768px) {
    width: 360px;
  }
`;

S.Title = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

S.LocationWrapper = styled.div`
  width: 1500px;

  .slick-list {
    position: relative; /* slick-list에 상대 위치 설정 */
  }

  .rightArrow {
    position: absolute;
    right: 12%;
    top: 0;
    font-size: 25px;
    cursor: pointer;
  }

  .leftArrow {
    margin-left: 77rem;
    top: 0;
    font-size: 25px;
    cursor: pointer;
  }

  .slick-slide {
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 50vh;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 360px; /* 너비를 조정하여 슬라이더 처럼 표시되지 않도록 설정 */
    .leftArrow {
      font-size: 20px;
      margin-left: 10%;

      cursor: pointer;
    }
    .rightArrow {
      font-size: 20px;

      cursor: pointer;
    }
  }
`;

S.Location = styled.div`
  border-radius: 50%;
  width: 15%;
  height: 70%;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  @media (max-width: 768px) {
    border-radius: 30%;
    width: 20%;
    height: 20%;
  }
`;

S.LocationImg = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

S.LocationText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: ${({ theme }) => theme.FONT_SIZE["h3"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  font-family: ${({ theme }) => theme.FONT_FAMILY["heading"]};
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  cursor: pointer;
`;

S.ReviewList = styled.div`
  margin-bottom: 6rem;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

S.WriteBtn = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  color: ${({ theme }) => theme.PALLETE.fontNatural[10]};
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  background-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  margin-left: auto;
  margin-right: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

S.VideoWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 300px;
  display: flex;

  .youtube-video {
    width: 485px;
    height: 300px;
  }
  @media (max-width: 768px) {
    margin-left: 10%;
    height: 600px;
    flex-direction: column;
    .youtube-video {
      margin-bottom: 2rem;
      width: 300px;
      height: 150px;
    }
  }
`;

S.VideoText = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  @media (max-width: 768px) {
    padding-top: 18rem;
  }
`;

export default S;
