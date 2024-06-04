import styled, { css } from "styled-components";
import theme from "../../global/theme";
const S = {};

S.div1 = styled.div`
  width: 100vw;
  height: 50vh;
  margin-bottom:100px;
  
  @media screen and (min-width: 200px) and (max-width: 450px) {
    width: 100vw;
    margin-bottom: -300px;
    
  }

  .slick-list {

  position: relative; /* slick-list에 상대 위치 설정 */

}

  .arrow2 {
  position: absolute; /* 절대 위치로 설정 */
  left: 20%;
  bottom: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 2; 

  @media screen and (min-width: 200px) and (max-width: 450px) {
    
     left: 20%;
     top:-20%;
     font-size: 12px;
     cursor: pointer;
     z-index: 2;
     background: transparent;
     
  
  }
}

  .arrow1 {
    position: absolute;
    left: 22%;
    bottom: 50%; 
    font-size: 20px;
    cursor: pointer;
    z-index: 2; 
    
  @media screen and (min-width: 200px) and (max-width: 450px) {
    position: absolute;
     left: 24%;
     top: -20%;
     font-size: 12px;
     cursor: pointer;
     z-index: 2;
     background: transparent;
   
    }
  }
`
  
S.ImageWrapper = styled.div`
   margin-top: 10px;
    width: 100%;
    height: 50vh;
    overflow: hidden;

   img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지를 영역에 꽉 채우고 비율을 유지하며 잘라냄 */
    object-position: center; /* 이미지를 가운데로 정렬 */
    background-repeat: no-repeat; /* 이미지 반복 없이 한 번만 표시 */
    background-size: contain; /* 이미지를 영역에 맞게 확대 또는 축소 */

    @media screen and (min-width: 200px) and (max-width: 450px) {
      width: 100%; /* 이미지의 너비를 50%로 설정 */
      height: auto; /* 이미지의 높이는 자동으로 조정 */
  }
   }
`;


S.travel = styled.div`
 
  display: flex;
  align-content: space-around;  
  width: 100%;
  margin-bottom: 50px;


  @media screen and (min-width: 200px) and (max-width: 450px) {
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  }
 
`

S.DropdownContainer1= styled.div`
  position: relative;
  top: 50%;
  text-align: center;
  width: 15%;
  height: 10vh;
  margin-right: 200px;
  display: flex;

  button {
    width: 100%;
    background-color: white;
    cursor: pointer;
    border: 2px solid green;
    font-size: 20px;
    
  }

  @media screen and (min-width: 200px) and (max-width: 450px) {
  position: absolute;
  text-align: center;
  top: 23%;
  width: 24%;
  height: 10vh;
  display: flex;

  button {
    width: 100%;
    background-color: white;
    cursor: pointer;
    border: 2px solid green;
    font-size: 20px;
    
    }
  }
`;


S.Menu1 = styled.div`
  background: white;
  position: absolute;
  top: 25px;
  left: 50%;
  width: 100%;  
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

S.Ul1 = styled.ul`
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

 S.Li1 = styled.li`
  border: 2px solid black;
  padding: 5px;
 `;

  S.LinkWrapper1 = styled.a`
  cursor: pointer;
`;

S.DropdownContainer2= styled.div`
  position: relative;
  text-align: center;
  width: 20%;
  height: 10vh;
  display: flex;
  button {
    width: 100%;
    background-color: white;
    cursor: pointer;
    border: 2px solid green;
    font-size: 20px;
    
  }

  @media screen and (min-width: 200px) and (max-width: 450px) {
  position: absolute;
  text-align: center;
  top: 23%;
  right: 50%;
  width: 24%;
  height: 10vh;
  display: flex;
  button {
    width: 100%;
    background-color: white;
    cursor: pointer;
    border: 2px solid green;
    font-size: 20px;
    
    }
  }
`;


S.Menu2 = styled.div`
  background: white;
  position: absolute;
  top: 25px;
  left: 50%;
  width: 100%;  
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

// 달력
S.CalendarContainer = styled.div`
    position: relative;
         width: 15%;
        height: 90%;
        margin: 0 auto;
        cursor: pointer;  
        border: 2px solid green;
           button {  
             font-size: ${theme.FONT_SIZE.h6};
             font-weight: ${theme.FONT_WEIGHT.regular};
             font-family: ${theme.FONT_FAMILY.body};
             width: 100%;
             height: 10vh;
             background-color: white;
             cursor: pointer;
             color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
             
    }

    
  @media screen and (min-width: 200px) and (max-width: 450px) {
    position: absolute;
        width: 24%;
        height: auto;
        right: 24%;
        top: 23%;
        margin: 0 auto;
        cursor: pointer;  
        border: 2px solid green;
           button {  
             font-size: ${theme.FONT_SIZE.h6};
             font-weight: ${theme.FONT_WEIGHT.regular};
             font-family: ${theme.FONT_FAMILY.body};
             width: 100%;
             height: 9.5vh;
             background-color: white;
             cursor: pointer;
             color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
             
    }
  }
`;


S.CalendarWrapper = styled.div`
z-index: 11;
position: absolute;
top: 100%;
display: ${(props) => (props.isOpen ? "block" : "none")};

@media screen and (min-width: 200px) and (max-width: 450px) {
  z-index: 11;
position: absolute;
transform: scale(0.5);
left: -130%;
top: -50%;

display: ${(props) => (props.isOpen ? "block" : "none")};
}
`;

S.ButtonWrapper = styled.div`
    
    width: 15%;
    height: 20%;
    button {
      font-size: ${theme.FONT_SIZE.h5};
      font-weight: ${theme.FONT_WEIGHT.regular};
      font-family: ${theme.FONT_FAMILY.body};
    
      width: 90%;
      height: 10vh;
      margin-left: 14px;
      border-radius: 8px;
      background-color:${({ theme }) => theme.PALLETE.primary["mainGreen100"]};  
      cursor: pointer;
    }

    @media screen and (min-width: 200px) and (max-width: 450px) {
    position: absolute ;
    left: 75%;
    top:23%;
    width: 24%;
    height: 20%;
    button {
      font-size: ${theme.FONT_SIZE.h5};
      font-weight: ${theme.FONT_WEIGHT.regular};
      font-family: ${theme.FONT_FAMILY.body};
    
      width: 90%;
      height: 10vh;
      margin-left: 14px;
      border-radius: 8px;
      background-color:${({ theme }) => theme.PALLETE.primary["mainGreen100"]};  
      cursor: pointer;
    }
    }
    
  `
  S.week = styled.div`
    width: 90vw;
  
    .best {
      margin-bottom: 15px;
      margin-left: 10px;
      font-size: ${theme.FONT_SIZE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
    
    }
    
    .week {
    margin-left: 12px;
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.body};
    }

    @media screen and (min-width: 200px) and (max-width: 450px) {
      margin-top: 200px;
      width: 90vw;
    .best {
    margin-bottom: 15px;
    font-size: ${theme.FONT_SIZE.h4};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    & path {
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    }
    
    }
    
    .week {
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: ${theme.FONT_FAMILY.body};
    
    }

    }
  `

 S.package = styled.div`

 display: flex;
 flex-wrap: wrap;
 align-items: center;
 margin: 0 auto;
 margin-top: 30px;
 margin-bottom: 150px;
 width: 90vw;
 height: auto;
 gap: 40px;
 

 @media screen and (min-width: 200px) and (max-width: 450px)  {
  display: flex;
 flex-wrap: wrap;
 align-items: flex-start; /* 이미지를 세로로 정렬 */
 margin: 0 auto;
 margin-top: 20px;
 margin-bottom: 20px;
 width: 90vw;
 height: auto;
 gap: 30px;
 margin-left: 10px;
 
    }
`;

S.package2 = styled.div`

 display: flex;
 flex-wrap: wrap;
 align-items: center;
 margin: 0 auto;
 margin-top: 30px;
 width: 90vw;
 height: auto;
 gap: 40px;
 
 @media screen and (min-width: 200px) and (max-width: 450px) {
  display: flex;
 flex-wrap: wrap;
 align-items: flex-start; 
 margin: 0 auto;
 margin-top: 20px;
 margin-bottom: 50px;
 width: 90vw;
 height: auto;
 gap: 20px;
 margin-left: 10px;
 
 }
`;
 

S.middle = styled.div`

 width: 20vw;
 cursor: pointer;
 margin: 0 auto;
 

 .big  {   
    position: relative;
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
   }
 
  .small {
   position: relative;
   font-size: ${theme.FONT_SIZE.h7};
   font-weight: ${theme.FONT_WEIGHT.regular};
   font-family: ${theme.FONT_FAMILY.body};
   color: gray;
   padding: 7px;
   svg path {
   fill: ${({ theme }) => theme.PALLETE.primary.mainGreen100};
     }
 }

  .middle {
    position: relative;
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
    color: red;
  }

 @media screen and (min-width: 200px) and (max-width: 450px) {
 
  width: 40vw;
 cursor: pointer;
 margin: 0 auto;
 
 .big  {   
    position: relative;
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
    line-height: 1.5;

   }
 
  .small {
   position: relative;
   font-size: ${theme.FONT_SIZE.h7};
   font-weight: ${theme.FONT_WEIGHT.regular};
   font-family: ${theme.FONT_FAMILY.body};
   color: gray;
   padding: 7px;
   svg path {
   fill: ${({ theme }) => theme.PALLETE.primary.mainGreen100};
     }
 }

  .middle {
    position: relative;
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
    display: flex; /* 내부 요소를 가로로 정렬하기 위해 flex로 설정 */
      flex-direction: column; /* 내부 요소를 세로로 정렬하기 위해 column으로 설정 */
      align-items: flex-start; 
    
  }
 }

`
S.block = styled.div`
 position: relative;
 display: inline-block;
`

S.Image2 = styled.img`

 display: block;
 width: 240px;
 height: 180px;
 border-radius: 8%;
 cursor: pointer;
  

 @media screen and (min-width: 200px) and (max-width: 450px) {
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 8%;
  cursor: pointer;
  
  }
`;


export default S;