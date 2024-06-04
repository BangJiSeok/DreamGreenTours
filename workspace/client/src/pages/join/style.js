import styled from "styled-components";
import { flexCenterColumn, flexSpaceBetweenCenter } from "../../global/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenterColumn}
  height: 100vh;
  background-color: ${({ theme }) => theme.PALLETE.form["basic"]};
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.6rem;

  width: 768px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
  @media (max-width: 768px) {
    width: 360px;
  }
`;

S.TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

S.Title = styled.div`
  height: 5.2rem;
  text-align: left;

  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
`;

S.Home = styled.div`
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

S.Join = styled.span`
  padding-left: 8px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  @media (max-width: 768px) {
    padding-right: -15px;
  }
`;

S.SubTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE["h3"]};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  }
`;

S.AllCheck = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.6rem;
  padding-left: 20px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.backgroundColor["lightGray"]};
  box-shadow: 4px 4px 1px lightgray;
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

S.AllCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

S.AllText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

S.CheckList = styled.div`
  margin-top: 2.6rem;
`;

S.Check = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 1rem;
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
  }
  @media (max-width: 768px) {
    width: 85%;
  }
`;

S.CheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

S.CheckText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  color: ${({ theme }) => theme.PALLETE.fontNatural[50]};
`;

S.Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2.6rem;
  border-radius: 20px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.PALLETE.fontNatural[10]};
  background-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default S;
