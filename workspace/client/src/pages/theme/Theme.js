import React, { useEffect, useState } from "react";
import { Outlet,Link, RouterProvider, NavLink } from "react-router-dom";
import S from "./style.js";
import BasicSpan from "./basicSpan/BasicSpan.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global/global.js";
import Layout from "../layout/Layout.js";
import router from "../../routes/router.js";
import ThemeComponent from "./ThemeComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPen, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

const Theme = () => {
  const [theme, setTheme] = useState([]);
  const [error, setError] = useState(false)
 
  const getTheme = async () => {
    try {
        const response = await fetch('http://localhost:4000/themeTrip')
        const datas = await response.json();
        setTheme(datas)
    } catch (error) {
        setError(error)
    }
}
useEffect(()=>{
    getTheme()
}, [])



// const themeView=()=>{
// const num = Math.ceil(theme.length / 4); 
// for (let i = 0; i < num; i++) {
//     return (
//         <div className="themeTravelBanner" key={i}>
//             {[theme.slice(i * 4, (i + 1) * 4)].map((themeTrip, j) => (
//                 <ThemeComponent key={j} themeTrip={themeTrip} getTheme={getTheme} />
//             ))}
//       </div>
//     );
//   }
// }

  return (
    <>
    
            <GlobalStyle />
            <Layout />


    <S.Wrapper className="Wrapper">
      <NavLink to={'/theme'}>
    <S.ImageWrapper className="ImageWrapper">
    {/* src={process.env.PUBLIC_URL + './Guadalupe.jpeg'}  */}
                <S.MainImg className="MainImg" >
                  <BasicSpan color={"white"} style1={'medium'} size={'heading'} >이색 테마 여행</BasicSpan>  
                  <BasicSpan color={"black"} style1={'small'} size={'small'}>#데이트 코스 #추천 #국내</BasicSpan>
                </S.MainImg>
      </S.ImageWrapper>
      </NavLink>
            <S.P>상상만 하던 내 마음속의 여행</S.P>
            <S.P>키워드로 검색해 보세요.</S.P>
</S.Wrapper>

<S.DropDownWrap className="dropdownWrap">
      <S.DropDown className="dropdown">
  <button class="dropbtn">테마 선택</button>
  <div class="dropdown-content">
    <a href="#">데이트 코스</a>
    <a href="#">가족 여행 코스</a>
    <a href="#">가을</a>
    <a href="#">겨울</a>
    <a href="#">여름</a>
    <a href="#">봄</a>
</div>
      </S.DropDown>
            <S.Search className="Search">
          <S.Input type="text" placeholder="검색어를 입력해 주세요" className="input"/>
          <FontAwesomeIcon icon={faSearch} className="iconSearch" />
        </S.Search>
    
      </S.DropDownWrap>
      
<S.Wrapper className="Wrapper">
  <S.ThemeTravel className="ThemeTravel">
  <S.ThemeTravelBanner className="ThemeTravelBanner" >
    {theme.slice(0,4).map((themeTrip,i)=>(
      <ThemeComponent key={i} themeTrip={themeTrip} getTheme={getTheme}/>
      
    ))}
  {/* {themeView} */}
  </S.ThemeTravelBanner>

  <S.ThemeTravelBanner className="ThemeTravelBanner" >
    {theme.slice(4,8).map((themeTrip,i)=>(
      <ThemeComponent key={i} themeTrip={themeTrip} getTheme={getTheme}/>
    ))}
  </S.ThemeTravelBanner>


        <S.PopularityDiv className="PopularityDiv">
          <S.PopularityBanner className="PopularityBanner">
            <S.PopSpanDiv className="PopSpanDiv">
            <S.PopBannerSpan1 className="PopBannerSpan1">시간별 데이트 테마🌸</S.PopBannerSpan1>
            <S.PopBannerSpan2 className="PopBannerSpan2">시간별로 인기 있는 데이트코스를</S.PopBannerSpan2>
            <S.PopBannerSpan2 className="PopBannerSpan2">가장 편리하게 둘러보세요. </S.PopBannerSpan2>
            </S.PopSpanDiv>
            <ul>
              <li><S.PopButton className="PopButton">당일치기 휴일</S.PopButton></li>
              <li><S.PopButton className="PopButton">저녁 짧게!</S.PopButton></li>
              <li><S.PopButton className="PopButton">오전~오후</S.PopButton></li>
              <li><S.PopButton className="PopButton">More</S.PopButton></li>
            </ul>
          </S.PopularityBanner>
          <S.PopularityContentsWrapper className="PopularityContentsWrapper">
          <NavLink to={`/recommend/${1}`}>
              <S.PPContentDiv className="PPContentDiv">
                  <S.PPImageDiv className="PPImageDiv">
                    <S.PPImage src="/img/picture/slide_daegu.jpg" className="PPImage"></S.PPImage>
                  </S.PPImageDiv>
                  <S.PPSpanBox className="PPSpanBox">
                  <S.PPSpan className="PPSpan">
                    <S.PPSpan1 className="PPSpan1">
                    <p className="heading">[인천]</p>
                    <p className="heading">오전~오후</p>
                    <p className="heading2">역사 탐방 데이트</p>
                    </S.PPSpan1>
                    <S.PPSpan2 className="PPSpan2">
                    <p className="small">수봉공원-인천상륙작전기념관-인천시립박물관</p>
                    </S.PPSpan2>
                  </S.PPSpan >
                    <S.Stars className="Stars">
                    <p className="small">
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    (25)
                    <S.Heart className="Heart">
                  <FontAwesomeIcon icon={faHeart} className='heartIcon'/>
                    </S.Heart >
                    </p>
                    </S.Stars>
                  </S.PPSpanBox>
              </S.PPContentDiv>
            </NavLink>


              <S.PPContentDiv className="PPContentDiv">
                  <S.PPImageDiv className="PPImageDiv">
                  <S.PPImage src="/img/picture/slide_pohang.jpg" className="PPImage"></S.PPImage>
                  </S.PPImageDiv>
                  <S.PPSpanBox className="PPSpanBox">
                  <S.PPSpan className="PPSpan">
                    <S.PPSpan1 className="PPSpan1">
                    <p className="heading">[서울]</p>
                    <p className="heading">오전~오후</p>
                    <p className="heading2">오붓한 둘만의 시간</p>
                    </S.PPSpan1>
                    <S.PPSpan2 className="PPSpan2">
                    <p className="small">오전 : 예담 카페 - 로디어 - 오후 : 정자동 파자마 무비클럽 - 저녁 : 털보네 쪽갈비 </p>
                    </S.PPSpan2>
                  </S.PPSpan>
                    <S.Stars className="Stars">
                    <p className="small">
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    (50)
                    <S.Heart className="Heart">
                  <FontAwesomeIcon icon={faHeart} className='heartIcon'/>
                    </S.Heart >
                    </p>
                    </S.Stars>
                  </S.PPSpanBox>
              </S.PPContentDiv>
            
              <S.PPContentDiv className="PPContentDiv">
                  <S.PPImageDiv className="PPImageDiv">
                  <S.PPImage src="/img/picture/slide_yeosu.jpg" className="PPImage"></S.PPImage>
                  </S.PPImageDiv>
                  <S.PPSpanBox className="PPSpanBox">
                  <S.PPSpan className="PPSpan">
                    <S.PPSpan1 className="PPSpan1">
                    <p className="heading">[송도]</p>
                    <p className="heading">오전~오후</p>
                    <p className="heading2">루프탑으로 따라와!</p>
                    </S.PPSpan1>

                    <S.PPSpan2 className="PPSpan2">
                    <p className="small">오전:말론하우스 - 오후:카페써밋 루프탑 - 저녁:미미 상회</p>
                    </S.PPSpan2>
                  </S.PPSpan>

                    <S.Stars className="Stars">
                    <p className="small">
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                    (61)
                    <S.Heart className="Heart">
                  <FontAwesomeIcon icon={faHeart} className='heartIcon'/>
                    </S.Heart >
                    </p>
                    </S.Stars>
                   
                  </S.PPSpanBox>
              </S.PPContentDiv>
            
           
          </S.PopularityContentsWrapper>
        </S.PopularityDiv>
  </S.ThemeTravel>
</S.Wrapper>
<S.Wrapper>
    <S.Footer>
        <S.end>
              <p className='last'>투어/입장권 예약상담</p>
                  <S.icons>
                    <FontAwesomeIcon icon={faPen}/>
                    <p>투어/입장권 상품 문의는 투어/입장권 상품페이지 내 "상품문의" 게시판을 이용 부탁합니다. <br />
                    투어/입장권 일반 문의는 "고객문의" 게시판을 이용 부탁합니다.<br />
                    투어/입장권 예약, 취소, 결제, 환불은 "자주 찾는 질문" 게시판에서 확인 부탁합니다.</p>
                  </S.icons>
              <p className='last'>투어/입장권 판매회원 가입</p>
                  <S.icons>
                    <FontAwesomeIcon icon={faPen}/>
                    <p>투어/입장권 상품 판매는 "판매회원 가입 안내" 페이지에서 별도의 회원가입 후 가능합니다. <br />
                      판매회원 가입 문의 (국내)hhj1217@hanatour.com <br />
                      (해외)jinie27@hanatour.com</p>
                  </S.icons>
              </S.end>
          </S.Footer>

</S.Wrapper>
    
</>

  );
};

export default Theme;
