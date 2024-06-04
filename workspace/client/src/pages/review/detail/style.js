import styled from "styled-components";
import { flexCenterColumn, flexCenterRow } from "../../../global/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenterColumn}
`;

S.ReviewLine1 = styled.div`
  ${flexCenterRow}
  width: 100%;
  height: 200px;
  margin-top: 2rem;
  margin-bottom: 13rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 27rem;
  }
`;
S.ReviewLine2 = styled.div`
  ${flexCenterRow}
  width: 100%;
  height: 200px;
  margin-top: 2rem;
  margin-bottom: 13rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

S.Review = styled.span`
  width: 40%;
  @media (max-width: 768px) {
    width: 360px;
    display: block;
  }
`;

S.ReviewImg = styled.img`
  width: 485px;
  height: 325px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0.5rem;
  position: relative;
  @media (max-width: 768px) {
    width: 340px;
    height: 200px;
    margin-left: 10px;
  }
`;

S.ReviewTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 495px;
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 340px;
    margin-left: 10px;
  }
`;

S.ReviewText = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    width: 340px;
    margin-left: 10px;
  }
`;

S.HeartWrapper = styled.div`
  position: relative;
  margin-left: auto;
  display: inline-block;
`;

S.HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  margin-left: 3rem;
  opacity: 0;
  cursor: pointer;
`;

S.Heart = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-left: 2.6rem;
    margin-right: 15px;
    width: 24px;
    height: 24px;
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
  }
`;

export default S;
