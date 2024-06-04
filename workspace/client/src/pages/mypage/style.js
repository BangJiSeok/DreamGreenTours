import styled, { css } from "styled-components";
import theme from "../../global/theme";
const S = {};

S.front = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 20vh; /* 화면 전체 높이를 차지하도록 설정 */
  background-color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
`;

S.back = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 30px;  
  position: absolute;
  right: 45%;
  top: 16%;

  .first {
    margin: 0 auto; 
    gap: 10px;
    font-size: 25px;
    padding: 10px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: gray;
  }
  
  .normal {
    margin: 0 auto; 
    gap: 10px;
    font-size: 25px;
  }

  .special {
    margin: 0 auto;
    gap: 10px;

    button {
      cursor: pointer;
      background: transparent;
      color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};;
      font-size: 25px;

      /* 아이콘 스타일 */
      .icon {
        & path {
          color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
        }
      }
    }
  }
  `;

 S.city = styled.div`
    position: absolute;
    bottom: 52%;
    left:10%;
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.body};
    
`;

S.package = styled.div`
    display: flex;
    gap: 20px;
   
    
`

S.div = styled.div` 
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 15vw;
  height: 25vh;
  background-color: aqua;
 
  display: flex;
  justify-content: center;
  align-items: center;  
  cursor: pointer;
    p {
      font-size: ${theme.FONT_SIZE.h5};
    } 
    
`



export default S;
