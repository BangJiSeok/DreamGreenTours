import styled, { css } from "styled-components";
import theme from "../../global/theme";
const S = {};

// 1번
S.Section = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: auto;
`;

S.div = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: auto;
`;

S.ImageWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${process.env.PUBLIC_URL}/home/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin: 20px 50px 20px 0;
  width: 20%;
  height: 90%;
  background-color: pink;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    width: 80vw;
    height: 40vh;
    margin-bottom: 20px;
  }
`;

S.LetterWrapper = styled.div`
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  line-height: 40px;
  width: 100%;
  height: 20%;
`;

S.ListWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid black;

  button {
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.body};
    height: 70%;
    margin: 20px 0 0 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

S.Show = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 8px;
  margin: 15px 0 15px 0;

  button {
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.body};

    height: 90%;
    width: 90%;
    margin: 0 auto;
    cursor: pointer;
  }
`;

S.ButtonWrapper = styled.div`
  width: 100%;
  height: 20%;
  button {
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.body};

    width: 90%;
    height: 90%;
    margin-left: 14px;
    border-radius: 8px;
    background-color: #333333;
    color: white;
    cursor: pointer;
  }
`;

// 2번
S.Title1 = styled.div`
  .title1 {
    margin-left: 25px;

    padding: 10px;
    color: #f06c5e;
    font-size: 10px;
    width: 30%;
  }

  .title2 {
    margin-bottom: -30px;
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    position: absolute;
    bottom: 50%;
    margin-left: 150px;
  }

  .title3 {
    margin-top: 100px;
    margin-bottom: 20px;
    margin-left: 200px;
    font-size: 12px;
    border: 2px solid #f06c5e;
    border-radius: 50px / 40px;
    padding: 10px;
    color: #f06c5e;
    width: 15%;
  }

  .title4 {
    font-size: ${theme.FONT_SIZE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    margin-left: 200px;
  }
`;

S.region = styled.div`
  .slick-list {
    position: relative;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      position: absolute;
      max-width: 100vw;
      width: 90%;
      overflow: hidden;
      height: auto;
      top: 100%;
    }
  }

  .arrow2 {
    position: absolute;
    left: 72%;
    bottom: 100%;
    font-size: 25px;
    cursor: pointer;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      margin-top: -20px;
      position: relative;
      font-size: 15px;
      cursor: pointer;
      z-index: 5;
    }
  }

  .arrow1 {
    position: absolute;
    left: 75%;
    bottom: 100%;
    font-size: 25px;
    cursor: pointer;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      position: absolute;
      left: 79%;
      bottom: 5%;
      font-size: 15px;
      cursor: pointer;
    }
  }

  .slick-slide {
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 50vh;
    margin-top: 60px;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      display: flex;
      justify-content: space-around;
      width: 80%;
      height: 50vh;
      margin-bottom: 100px;
    }
  }
`;

S.Circle = styled.div`
  position: relative;
  width: 15%;
  height: 70%;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    bottom: 10%;
    position: relative;
    width: 50%;
    height: 30%;
  }
`;
S.Image1 = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

S.Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  cursor: pointer;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    cursor: pointer;
  }
`;

// 3번
S.top = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 60%;
  height: auto;
  margin-bottom: 50px;

  .num1 {
    margin-bottom: 50px;
    font-size: 10px;
    border: 2px solid #f06c5e;
    border-radius: 50px / 40px;
    padding: 10px;
    color: #f06c5e;
    margin-bottom: 20px;
  }

  .num2 {
    font-size: ${theme.FONT_SIZE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
  }

  @media screen and (min-width: 200px) and (max-width: 450px) {
    position: absolute;
    top: 83%;
    left: 17%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 70%;
    height: auto;
    margin-bottom: 50px;

    .num1 {
      margin-bottom: 50px;
      font-size: 10px;
      border: 2px solid #f06c5e;
      border-radius: 50px / 40px;
      padding: 10px;
      color: #f06c5e;
      margin-bottom: 20px;
    }

    .num2 {
      font-size: ${theme.FONT_SIZE.h5};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
    }
  }
`;

S.country = styled.div`
  width: 40vw;
  height: 70px;
  margin: 0 auto;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    position: absolute;
    top: 99%;
    left: 5%;
    width: 90vw;
    height: 70px;
    margin: 0 auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  li {
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    margin-bottom: 20px;
  }
`;

S.package = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 150px;
  width: 70vw;
  height: auto;
  gap: 40px;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    margin-top: 350px;
    margin-bottom: 50px;
    width: 85vw;
    height: auto;
    gap: 30px;
    margin-left: 13px;
  }
`;

S.middle = styled.div`
  width: 15vw;
  cursor: pointer;
  margin: 0 auto;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    width: 35vw;
    cursor: pointer;
    margin: 0 auto;
  }

  .big {
    position: relative;
    left: 20px;
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      position: relative;
      left: 10px;
      font-size: ${theme.FONT_SIZE.h7};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
      padding: 7px;
    }
  }

  .small {
    position: relative;
    left: 20px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
    svg path {
      fill: ${({ theme }) => theme.PALLETE.primary.mainGreen100};
    }

    @media screen and (min-width: 200px) and (max-width: 450px) {
      position: relative;
      left: 10px;
      font-size: ${theme.FONT_SIZE.h9};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
      padding: 7px;
      svg path {
        fill: ${({ theme }) => theme.PALLETE.primary.mainGreen100};
      }
    }
  }

  .price2 {
    position: relative;
    left: 20px;
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
    color: red;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      position: relative;
      left: 10px;
      font-size: ${theme.FONT_SIZE.h6};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
      padding: 7px;
      color: red;
    }
  }
`;
S.block = styled.div`
  position: relative;
  display: inline-block;
`;

S.Image2 = styled.img`
  display: block;
  width: 240px;
  height: 180px;
  border-radius: 8%;
  cursor: pointer;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 8%;
    cursor: pointer;
  }
`;

S.icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;

  button {
    cursor: pointer;
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
  }
`;

// 4번

S.imagine = styled.h4`
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  position: relative;
  left: 10%;
  color: grey;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.light};
  font-family: ${theme.FONT_FAMILY.heading};
`;

S.keyword = styled.div`
  display: flex;
  position: relative;
  left: 10%;
  font-size: 32px;
  margin-top: 20px;
  gap: 20px;
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};

  .check1 {
    color: red;
    background-color: transparent;
    font-size: 32px;
    border-bottom: 2px solid red;
  }
  .check2 {
    color: red;
    background-color: transparent;
    font-size: 32px;
    border-bottom: 2px solid red;
  }
`;

S.plays = styled.div`
  @media screen and (min-width: 200px) and (max-width: 450px) {
    display: none;
  }

  .slick-list {
    position: relative; /* slick-list에 상대 위치 설정 */
  }

  .arrow2 {
    position: absolute; /* 절대 위치로 설정 */
    left: 70%;
    bottom: 100%;
    font-size: 25px;
    cursor: pointer;
  }

  .arrow1 {
    position: absolute;
    left: 73%;
    bottom: 100%;
    font-size: 25px;
    cursor: pointer;
  }

  .slick-slide {
    width: 70vw;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 60px;
  }
`;

S.DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

S.DropdownButton = styled.div`
  cursor: pointer;
  color: red;
  border-bottom: 2px solid red;
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-family: ${theme.FONT_FAMILY.heading};
`;

S.Menu = styled.div`
  background: gray;
  top: 52px;
  left: 50%;
  width: 200px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: gray;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

S.Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

S.Li = styled.li``;

S.LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

// 맨 위 input box

S.DropdownContainer2 = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
`;

S.Menu2 = styled.div`
  background: white;
  position: absolute;
  top: 25px;
  left: 50%;
  width: 200px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

S.Ul2 = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

S.Li2 = styled.li`
  border: 2px solid black;
  padding: 5px;
`;

S.LinkWrapper2 = styled.a`
  cursor: pointer;
`;

S.Ul3 = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
`;

S.Li3 = styled.li`
  display: flex;
  gap: 15px;
  align-items: center; /* 세로 중앙 정렬 추가 */

  p {
    white-space: nowrap; /* 텍스트가 한 줄로만 표시되도록 설정 */
    margin-right: 15px; /* 아이콘과의 간격을 조절할 수 있습니다. */
  }

  button {
    font-size: 20px;
  }
`;

S.play = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .big {
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    position: relative;
    left: 30%;
    padding: 5px;
  }
  .small {
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    position: relative;
    left: 32%;
    margin-bottom: 15px;
  }
`;
S.Image3 = styled.img`
  width: 20vw;
  height: 35vh;
  border-radius: 10%;
  position: relative;
  left: 30%;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

S.Grids = styled.div`
  width: 70vw;
  height: auto;
  margin: 0 auto;
  margin-top: 150px;
  display: grid;

  grid-template-areas:
    "1 2 3 4"
    "5 6 7 8";
  grid-gap: 20px;

  #1 {
    grid-area: 1;
  }

  #2 {
    grid-area: 2;
  }

  #3 {
    grid-area: 3;
  }

  #4 {
    grid-area: 4;
  }

  #5 {
    grid-area: 5;
  }

  #6 {
    grid-area: 6;
  }

  #7 {
    grid-area: 7;
  }

  #8 {
    grid-area: 8;
  }
`;

S.Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
  .theme {
    font-size: 12px;
    border: 2px solid #f06c5e;
    border-radius: 50px / 40px;
    padding: 10px;
    color: #f06c5e;
    width: 75%;
  }

  .special {
    font-size: ${theme.FONT_SIZE.h4};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
  }

  .price {
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 5px;
    margin: 0 auto;
  }

  button {
    background: transparent;
    color: grey;
    font-size: ${theme.FONT_SIZE.h4};
    margin-top: 40px;
    position: relative;
    border-bottom: 5px solid grey;
    width: fit-content;
    cursor: pointer;
  }
`;

S.Image4 = styled.img`
  width: 18vw;
  height: 30vh;
  border-radius: 10%;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

S.end = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .last {
    font-size: ${theme.FONT_SIZE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    margin-bottom: 30px;

    @media screen and (min-width: 200px) and (max-width: 450px) {
      font-size: ${theme.FONT_SIZE.h4};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 450px) {
    width: 90vw;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 50px;
  }
`;
S.icons = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 10px;
  border: 1px solid #e7e7e7;
  background-color: #f5f5f5;

  @media screen and (min-width: 200px) and (max-width: 450px) {
  }

  p {
    line-height: 1.5; /* 예시로 줄 간격을 1.5배로 설정 */
  }
`;

// 달력
S.CalendarContainer = styled.div`
  position: relative;
  height: 90%;
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
  button {
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.body};
    width: 100%;
  }
`;

S.CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: -20%;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media screen and (min-width: 200px) and (max-width: 450px) {
    z-index: 11;
    position: absolute;
    transform: scale(0.7);
    top: -99%;
    right: -50%;

    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

export default S;
