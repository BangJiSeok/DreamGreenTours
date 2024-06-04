import styled,{ css} from "styled-components";
import GlobalStyle from "../../../global/global";
// GlobalStyle();

const colorCSS = {
  main : css`
      color: ${({theme}) => theme.PALLETE.primary["mainGreen100"]};
  `,
  gray :css`
  color: ${({theme})=>theme.PALLETE.fontNatural["70"]};
  `,
  black:css`
  color: ${({theme})=>theme.PALLETE.fontNatural["100"]};
  `,
  danger:css`
  color: ${({theme})=>theme.PALLETE.danger["main"]};
  `,
  success:css`
  color: ${({theme})=>theme.PALLETE.fontSuccess["70"]};
  `,
  white:css`
  color:white;
  `
}

const sizeCSS = {

  default : css``,
  heading:css`
    font-size: 56px;
  `,
  middle:css`
    font-size: 32px;
  `,
  small:css`
  font-size:26px;
  `,
  x_small : css`
    font-size:18px;
  `
}

const styleCSS = {

  small : css`
       font-weight: 500;   
       padding:20px;
    font-family: ${({theme})=>theme.FONT_FAMILY.alternate};
  
`,
  medium : css`
    font-weight: 600;   
    padding:20px;
    font-family: ${({theme})=>theme.FONT_FAMILY.alternate};
  `,
  full : css`
    font-weight: 800;
    padding:20px;
    font-family: ${({theme})=>theme.FONT_FAMILY.alternate};
    
  `
}

const Span = styled.span`

    cursor: pointer;
    ${({style1}) => styleCSS[style1]}
    ${({color}) => colorCSS[color]}
    ${({size}) => sizeCSS[size]}
 
`

export default Span;