import styled from "styled-components";
import {
  flexCenterColumn,
  flexCenterRow,
  flexEvenlyCenter,
  flexSpaceAroundCenter,
} from "../../global/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenterColumn}
  @media (max-width: 768px) {
    width: 360px;
  }
`;

S.Logo = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["h2"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE["h3"]};
    margin-left: 3rem;
  }
`;

S.LogoWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  font-size: 24px;
  @media (max-width: 768px) {
    .userIcon {
      margin-top: 2rem;
      margin-left: -19.7rem;
      margin-bottom: 8.5rem;
    }
  }
`;

S.LoginWrapper = styled.div`
  margin-left: auto;
  height: 48px;

  .icon {
    height: 40px;
  }
`;

S.Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: -3rem;
    flex-direction: column;
  }
`;

S.SearchInput = styled.div`
  .icon {
    color: #bec4c9;
    font-size: 24px;
    padding-top: 5px;
    margin-left: -45px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

S.List = styled.div`
  float: right;
  margin-top: 12px;
`;

S.Login = styled.div`
  float: left;
`;
S.Register = styled.div`
  float: left;
  margin: 0 14px 0 14px;
`;

S.Input = styled.input`
  width: 334px;
  height: 40px;
  margin-left: 40px;
  border-radius: 45px;
  text-align: start;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

S.MenuWrapper = styled.div`
  width: 700px;
  border: 1px solid lightgray;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  ${flexSpaceAroundCenter}
  @media (max-width: 768px) {
    width: 350px;
  }
`;

S.Menu = styled.div`
  width: 140px;
  height: 50px;
  ${flexEvenlyCenter}
  margin-left: -30px;
  border-right: 1px solid lightgray;
  @media (max-width: 768px) {
    .icon {
      margin-left: 30px;
    }
  }
`;

S.Main = styled.main`
  flex: 1;
`;

export default S;
