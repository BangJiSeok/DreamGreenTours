import styled, { css } from "styled-components";
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
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
  @media (max-width: 768px) {
    width: 360px;
  }
`;

S.Title = styled.div`
  display: block;
  height: 5.2rem;
  text-align: left;
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  .icon {
    width: 24px;
    height: 24px;
    margin-left: 2.6rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

S.Login = styled.span`
  padding-left: 8px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

S.Logo = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

S.LogoTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE["h2"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
    padding-right: 0.5rem;
  }
`;

S.Form = styled.form`
  margin-bottom: 1rem;
`;

S.Input = styled.div`
  margin-top: 2rem;
  padding: 0 2.6rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

S.Email = styled.input`
  border: none;
  padding-left: 15px;
  width: 100%;
  min-height: 3rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
`;

S.Password = styled.input`
  border: none;
  padding-left: 15px;
  width: 100%;
  min-height: 3rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  border-right: 1px solid
    ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  border-bottom: 1px solid
    ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
`;

S.StoreEmail = styled.label`
  display: inline-block;
  cursor: pointer;
`;

S.HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
`;

S.CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
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

S.CheckText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
`;

S.BtnWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 2.6rem;
`;

S.LoginBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2.6rem;
  border-radius: 20px;
  color: ${({ theme }) => theme.PALLETE.fontNatural[10]};
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  background-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
`;

S.SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 2.6rem;

  .join {
    color: ${({ theme }) => theme.PALLETE.shade["green200"]};
  }

  .join:hover {
    color: ${({ theme }) => theme.PALLETE.shade["green300"]};
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-left: 15px;
  }
`;

S.Search = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding-left: 15px;
  }
`;

S.SearchEmail = styled.span`
  width: 200px;
`;

S.EasyLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  padding: 0 2.6rem;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
    padding-left: 15px;
  }
`;

S.Naver = styled.button`
  width: 2.6rem;
  height: 2.6rem;
  background: url(https://image.hanatour.com/usr/static/img2/mobile/com/btn_naver_192x192.png)
    no-repeat 0 0 / 2.6rem;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding-left: 15px;
  }
`;

S.Kakao = styled.button`
  width: 2.6rem;
  height: 2.6rem;
  background: url(https://image.hanatour.com/usr/static/img2/mobile/com/btn_kakao_192x192.png)
    no-repeat 0 0 / 2.6rem;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

S.Apple = styled.button`
  width: 2.6rem;
  height: 2.6rem;
  background: url(https://image.hanatour.com/usr/static/img2/mobile/com/btn_apple_192x192.png)
    no-repeat 0 0 / 2.6rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding-left: 15px;
  }
`;

S.Warning = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE["h9"]};
  color: ${({ theme }) => theme.PALLETE.danger["main"]};
  padding-left: 3rem;
  padding-top: 10px;
`;

export default S;
