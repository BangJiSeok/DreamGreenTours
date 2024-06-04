import React from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ThemeComponent = ({themeTrip,getTheme}) => {
    const {title} = themeTrip;
    const {content} = themeTrip;
    const {id}=themeTrip;
  return (
    <S.ThemeImageWrapper>
      <Link to={`/recommend/${id}`}>
            {/* <S.li> */}
        <S.ThemeImageDiv >    
            <S.ThemeImage src={process.env.PUBLIC_URL + '/img/picture/Guadalupe.jpeg'}></S.ThemeImage>
        </S.ThemeImageDiv>
      
            <S.HeartIcon >
              <S.SpanTag>#데이트 #여행</S.SpanTag>
                <S.Button>
                  <FontAwesomeIcon icon={faHeart} className='heartIcon'/>
                </S.Button>
            </S.HeartIcon>
            <S.Price>
                {content}
            </S.Price>
            <S.TitleDiv >
                 <p className='titleSpan'>
                 {title}
                  </p>
            </S.TitleDiv>
            {/* </S.li> */}
        </Link>
    </S.ThemeImageWrapper>
  );
};

export default ThemeComponent;