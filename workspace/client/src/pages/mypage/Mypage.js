import React, { useState } from "react";
import S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faGear, faDiamond, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Mypage = () => {
  const [displayContent, setDisplayContent] = useState('one');


  let displayshow;
  if (displayContent === 'one') {
    displayshow = (
      <>
        <S.front>

        </S.front>
        <S.back>
          <p className="first"><FontAwesomeIcon icon={faUser}/></p>
          <p className="normal">jaeseo1227</p>
          <Link to="/mypage/infoUpdate" className="special">
            <button>프로필 관리 <FontAwesomeIcon icon={faGear}/></button>    
          </Link>
        </S.back>

          <S.package>
            <S.div>
              <p>여행 만들기<FontAwesomeIcon icon={faCirclePlus} /></p>
            </S.div>
          </S.package>

        <S.city>
          <p className="city">나의 여행 도시 목록 <FontAwesomeIcon icon={faDiamond}/></p>
        </S.city>
      </>
    );
  } else if (displayContent === 'two') {
    displayshow = (
      <>
         <S.front></S.front>
            <S.back>
              <p className="first"><FontAwesomeIcon icon={faUser}/></p>
              <p className="normal">emily118427</p>
               <Link to="/mypage/infoUpdate" className="special">
                  <button>프로필 관리 <FontAwesomeIcon icon={faGear}/></button>    
               </Link>
            </S.back>

         <S.package>
           <S.div>
               <p>여행 만들기<FontAwesomeIcon icon={faCirclePlus} /></p>
           </S.div>
         </S.package>

         <S.city>
            <p className="city">나의 여행 도시 목록 <FontAwesomeIcon icon={faDiamond}/></p>
         </S.city>
      </>
    )
  }

  return (
    <div>
      {displayshow}
     
      {/* <button className="1" onClick={() => setDisplayContent('one')}>1번버튼</button>
      <button className="2" onClick={() => setDisplayContent('two')}>2번버튼</button>
      <button className="3" onClick={() => setDisplayContent('three')}>3번버튼</button>
      <button className="4" onClick={() => setDisplayContent('four')}>4번버튼</button>
      <button className="5" onClick={() => setDisplayContent('five')}>5번버튼</button> */}
    </div>
  );
};

export default Mypage;
