import styled from "styled-components";
import { flexCenterColumn } from "../../../global/common";

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
  .icon {
    width: 24px;
    height: 24px;
    margin-left: 2rem;
    margin-top: 1rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 360px;
    .icon {
      margin-left: 1rem;
    }
  }
`;

S.Title = styled.div`
  display: block;
  height: 5.2rem;
  text-align: left;
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  @media (max-width: 768px) {
    margin-left: 1rem;
    height: 4rem;
  }
`;

S.Location = styled.input`
  width: 90%;
  height: 50px;
  margin-left: 2rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

S.Text = styled.textarea`
  width: 90%;
  height: 400px;
  margin-left: 2rem;
  padding-left: 1rem;
  padding-top: 1rem;
  border-radius: 10px;
  resize: none;
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

S.Form = styled.form``;

S.Button = styled.button`
  border-radius: 7px;
  color: ${({ theme }) => theme.PALLETE.fontNatural[10]};
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  background-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-top: 1rem;
  margin-left: 39rem;
  @media (max-width: 768px) {
    margin-left: 15rem;
  }
`;

S.Warning = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE["h9"]};
  color: ${({ theme }) => theme.PALLETE.danger["main"]};
  padding-left: 2rem;
  padding-top: -150px;
  margin-bottom: 0.5rem;
`;

export default S;
