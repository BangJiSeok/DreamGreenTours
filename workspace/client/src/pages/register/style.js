import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenterColumn}
  height: 100vh;
  background-color: ${({ theme }) => theme.PALLETE.form["basic"]};
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  min-height: 100vh;
  padding: 0 2.6rem;
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

S.Register = styled.span`
  padding-left: 8px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

S.SubTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE["h3"]};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  }
`;

S.SubExplanation = styled.div`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
`;

S.RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.6rem;
  .gender:hover {
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  }
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

S.Form = styled.form`
  margin-bottom: 1rem;
`;

S.NameInput = styled.input`
  width: 80%;
  border: none;
  padding-left: 15px;
  border-radius: 10px;
  min-height: 3rem;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  margin-right: 15px;
  @media (max-width: 768px) {
    width: 55%;
  }
`;

S.ManBtn = styled.button.attrs({ type: "button" })`
  width: 8.9%;
  border: none;
  text-align: center;
  min-height: 3rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
  /* color: ${({ theme }) => theme.PALLETE.fontNatural[20]}; */
  cursor: pointer;
  @media (max-width: 768px) {
    width: 15%;
  }
`;

S.WomanBtn = styled.button.attrs({ type: "button" })`
  width: 8.9%;
  border: none;
  text-align: center;
  min-height: 3rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  border-right: 1px solid
    ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  border-bottom: 1px solid
    ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};

  /* color: ${({ theme }) => theme.PALLETE.fontNatural[20]}; */
  cursor: pointer;
  @media (max-width: 768px) {
    width: 15%;
  }
`;

S.HiddenGender = styled.input`
  display: none;
`;

S.Input = styled.input`
  width: 100%;
  border: none;
  padding-left: 15px;
  border-radius: 10px;
  min-height: 3rem;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

S.InputWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

S.PhoneInput = styled.input`
  width: 80%;
  border: none;
  padding-left: 15px;
  border-radius: 10px;
  min-height: 3rem;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 55%;
  }
`;

S.CheckBox = styled.span`
  width: 20%;
  display: flex;
  align-items: center;
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;

S.CheckText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE["h7"]};
  }
`;

S.HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
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

S.Warning = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE["h9"]};
  color: ${({ theme }) => theme.PALLETE.danger["main"]};
  padding-left: 0.7rem;
  padding-top: 10px;
`;

export default S;
