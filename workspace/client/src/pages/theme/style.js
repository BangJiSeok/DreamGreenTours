import styled from "styled-components";
import { flexCenterColumn, flexCenterRow, flexEvenlyCenter, flexSpaceAroundCenter} from "../../global/common";
import theme from "../../global/theme";
import GlobalStyle from "../../global/global";
import reset from "styled-reset";

const S = {};

    S.Wrapper = styled.div`
        ${flexCenterColumn}
        margin-top: 1vh;
        margin-bottom: 1vh;
    `

    S.ImageWrapper = styled.nav`
    width: 80vw;
        ${flexCenterColumn}
    `

        S.MainImg =styled.div`
        background-repeat: repeat;
        background-image: url("/img/picture/sakura.jpeg");
        background-position: center;
        width:80vw;
        height:300px;
        ${flexCenterColumn}
        align-content: center;
        position: relative; 
        z-index: 100;
        ::before{
          z-index: -100; 
          background-color: rgba(0,0,0,0.2);
        position: absolute; 
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        opacity: 0.6;
        }
        `
S.P=styled.p`
  margin-top: 20px;
 width: 80%;
 color: gray;
 font-size: 20px;
   font-family: ${theme.FONT_FAMILY.secondary};
   /* margin-bottom: 10px; */
`
S.DropDownWrap=styled.div`
width: 79vw;
margin: auto;
display: flex;
justify-content: space-between;
padding-top: 15px;
font-family: ${theme.FONT_FAMILY.secondary};
`

    S.DropDown=styled.div`
    position:relative;
    display:inline-block;
    font-family: ${theme.FONT_FAMILY.secondary};
            &:hover{
              cursor:pointer;
              /* color: gray; */
              .dropdown-content {display: block;}
              .dropbtn {background-color: #37A551;
                        color: rgb(24,49,83,1);
              }//호버 후 배경색
              } 
            .dropbtn {
              background-color: #F5F6F6; //호버 전 배경색
              color: rgb(24,49,83,1); //글자색
              padding: 13px 32px 13px 32px;
              font-size: 18px;
              width: 10em;
              border:none;
              border-radius: 5px;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              background-color: #f1f1f1;   //리스트 호버 전 배경색
              padding : 12px 16px;
              /* scroll-behavior: auto; */
              box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
              z-index: 1;
              & a {
                  color: rgb(24,49,83,1);
                  padding: 12px 16px;
                  text-decoration: none;
                  display: block;
              }
              & a:hover 
              {background-color: #37A551;
              display: block;
              border-radius: 5px;
              }   //리스트 호버 후 배경색
            }
    `
S.Button = styled.button`
    cursor: pointer;
    background: none;
    font-size: 23px;
    
    & svg.heartIcon path{
      color : #37A551
    }
`
S.Input = styled.input`
height: 40px;
margin-left: 40px;
text-align: start;
font-family: ${theme.FONT_FAMILY.secondary};
width: 400px;
padding-left: 20px;
border-radius: 10px;
background-color: #f5f6f6;
border: none;
&:hover{
        border: solid 2px #006516;
} 

`;
S.Search = styled.div`
display: flex;
justify-content: center;
align-items: center;
.iconSearch {
  background: none;
  font-size: 24px;
  padding: 4px;
  margin-left: -45px;
  cursor: pointer;
}
`;



S.ThemeTravel=styled.div`
    width: 80vw;
    border-radius: 10px;
    /* background-color: ${({ theme }) => theme.PALLETE.primary["inputBack"]}; */
    padding-top:20px;

    
  `
  S.ThemeTravelBanner=styled.div`
  display: flex;
  margin: auto;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  justify-content: space-evenly;
  font-family: ${theme.FONT_FAMILY.secondary};
  `
    S.ThemeImageWrapper=styled.div`
    margin-right: 1%;
    margin-left: 1%;
    display: inline-block;
      `
        S.ThemeImageDiv = styled.div`
        width: 300px;
        height: 260px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px gray;
        display: flex;

        `
        S.ThemeImage = styled.img`
        width: 300px;
        height: 260px;
        border-radius: 10px;
        `
    S.Price=styled.div`
    width: 300px;
    height: 30px;
    padding: 0px 10px 0px 10px;
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    font-weight: 600;
    `
    S.TitleDiv=styled.div`
    width: 300px;
    height: 50px;
    font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
    font-weight: 500;
    .titleSpan{
      padding: 0px 10px 0px 10px;
      /* display: -webkit-box; */
      max-width: calc(100% - 5px);
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space:nowrap;
      line-height: 1.2;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    `

          S.HeartIcon = styled.div`
          width: 300px;
          height: 50px;
          display: flex; 
          justify-content: space-between;
          `
      S.SpanTag = styled.span`
      ${flexSpaceAroundCenter}
      margin-top: 5px;
      margin-left: 10px;
      font-size: 18px;
      color: #94B396;
      font-family: ${theme.FONT_FAMILY.alternate};
      `



S.PopularityDiv = styled.div`
  width: 100%;
  height: 500px;
display: flex;
margin-top: 60px;
border-radius: 5px;

    `
    S.PopularityBanner = styled.div`
      background-image: url("/img/picture/date.avif");
      background-position: center;
    /* background-color: #37a55121; */
      width: 20%;
      height: 500px;
      ${flexCenterColumn}
      padding: 10px;
      border-radius: 5px;

    `
    S.PopSpanDiv=styled.div`
      /* margin: 20px 0px 20px 0px; */
      align-items:center;
      padding: 20px;
      ${flexCenterColumn}
    `
        S.PopBannerSpan1=styled.span`
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 20px;
          font-family: ${theme.FONT_FAMILY.alternate};
          align-items:center;
          
        `
        S.PopBannerSpan2=styled.span`
          font-size: 20px;
          font-weight: 300;
          font-family: ${theme.FONT_FAMILY.alternate};
          align-items:center;
          
          margin-bottom: 10px;
        `
            S.PopButton = styled.button`
            margin: 3px;
            width: 180px;
            height: 50px;
            cursor: pointer;
            background: none;
            font-size: 23px;
            background-color:  ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
            border-radius:5px;
            padding: 5px;
            color: white;
            font-weight: 500;
            font-size: 1em;
            box-sizing: 500px;
            `

S.PopularityContentsWrapper = styled.div`
  background-color:#f5f5f5;
  width: 80%;
  height: 500px;
  border-radius: 5px;
  ${flexEvenlyCenter}
`

    S.PPContentDiv = styled.div`
     transition: transform 0.2s ease-in-out;
          &:hover {
        transform: scale( 1.1 ,1.1);
                
      }
      /* background-color:#37a5517d; */
      background-color: white;
      border: 3px solid #37a5517d ;
      width: 300px;
      height: 400px;
      border-radius: 20px;
      padding: 15px 5px 10px 5px ;
     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
      `
          S.PPImageDiv = styled.div`
          width: 250px;
          height: 150px;
          flex-direction: column;
          align-items: center;
          display: flex;
          margin:auto;
          `
            S.PPImage=styled.img`
            width: 100%;
            height: 100%;
            border-radius: 5px;
      
            `
          S.PPSpanBox = styled.div`
            /* background-color:rgb(255 255 255 / 32%); */
            /* background-color: #37a55133; */
            width: 260px;
            height: 200px;
            border-radius: 5px;
            margin: auto;
            padding:1px;
            display: flex;
            flex-direction: column;
            `
          S.PPSpan = styled.div`
            width: 100%;
            height: 100%;
            padding:5px;
           
            p{
              font-weight: 500;
              font-size: 1em;
              padding:5px;

            }
            `
      
           S.PPSpan1 = styled.div`
           width: 100%;
           height: 30%;
        
            .heading2{
              font-size: ${theme.FONT_SIZE.h6};
               font-weight: ${theme.FONT_WEIGHT.bold};
               font-family: ${theme.FONT_FAMILY.heading};
               color: ${theme.PALLETE.primary["mainGreen100"]};
             padding:5px;
            }
            .heading{
            font-size: ${theme.FONT_SIZE.h8};
               font-weight: 600;
                font-family: ${theme.FONT_FAMILY.heading};
             padding:5px;
           
           }
           `     
          S.PPSpan2 = styled.div`
                width: 100%;
                height: 60%;
                
             ${flexCenterColumn}
                .small{
                  font-size: ${theme.FONT_SIZE.h7};
               font-weight: 500;
                font-family: ${theme.FONT_FAMILY.heading};
                line-height: initial;
                }
                `
            S.Stars=styled.div`
            width: 50%;
            margin-left: 10px;
            flex-direction: row;
            height: 10%;
            .small{
              display: flex;
              & svg.faStar path{
                color : #37A551
              }
              /* position: relative; */
              /* font-size: ${theme.FONT_SIZE.h8}; */
              font-weight: ${theme.FONT_WEIGHT.bold};
              font-family: ${theme.FONT_FAMILY.heading};
        
            }
              
            `
    S.Heart = styled.div`
    margin-left: 100px;
    width: 50%;
font-size: 25px;
      & svg.heartIcon path{
       color : #37A551;
     }
  
    
   `






S.Footer = styled.div`
width: 80vw;
height: 500px;
/* background-color:  ${({ theme }) => theme.PALLETE.primary["inputBack"]}; */
`

S.end = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  .last { 
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  margin-bottom: 10px;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  margin-bottom: 10px;
   }
  }

  @media screen and (min-width: 200px) and (max-width: 450px) {
  width: 90vw;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 50px;
  }
`
S.icons = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 200px) and (max-width: 450px) {

  }

  p {
    line-height: 1.5; /* 예시로 줄 간격을 1.5배로 설정 */
  }
`

export default S;