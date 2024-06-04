import React, { useCallback, useState } from 'react';
import useDetectClose from '../../hooks/useDetectClose ';
import S from './style';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // 빈 하트
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; // 속이 찬 하트
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faStar as full, faChevronLeft , faChevronRight ,faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import { faStar as empty } from '@fortawesome/free-regular-svg-icons'
import { Outlet, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";


const DesktopView = () => {

//4 드롭다운
const [travelIsOpen, travelRef, travelHandler] = useDetectClose(false);
const [hotelIsOpen, hotelRef, hotelHandler] = useDetectClose(false);

const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
const [boardIsOpen, boardRef, boardHandler] = useDetectClose(false);
const [cacl1IsOpen, cacl1Ref, cacl1Handler] = useDetectClose(false);

const [hotelContent, setHotelContent] = useState('서울');
const [travelContent, setTravelContent] = useState('출발지➡️도착지');


const [myPageContent, setMyPageContent] = useState('사랑하는 사람과');
const [boardContent, setBoardContent] = useState('평화롭게');

const [result, setResult] = useState(0);


const handleMenuClick1 = (menuText) => {
  setMyPageContent(menuText);
};

const handleMenuClick2 = (menuText) => {
  setBoardContent(menuText);
};

const handleMenuClick3 = (menuText) => {
  setTravelContent(menuText);
};

const handleMenuClick4 = (menuText) => {
  setHotelContent(menuText);
};

const increase = () => {
  setResult(result+1)
};

const decrease = () => {
  setResult(result-1)
};

// 클릭 이벤트 핸들러를 감싸는 새로운 함수를 만들어서 이벤트 전파를 막습니다.
const stopPropagation = (e) => {
  e.stopPropagation();
};

const notexit = useCallback((e) => {
  stopPropagation(e);
}, []);

// 달력
const [selectedDate, setSelectedDate] = useState(new Date());
const [isCalendarOpen, setIsCalendarOpen] = useState(false);

const handleCalendarButtonClick = () => {
  setIsCalendarOpen(!isCalendarOpen);
};

const handleDateChange = (date) => {
  setSelectedDate(date);
  setIsCalendarOpen(false); // 달력을 선택한 후에는 닫도록 설정
};


// 맨 위 박스 
  const [contentType, setContentType] = useState('flight');

  let contentToShow;

   if (contentType === 'flight') {
    contentToShow = (
   <>
      <S.DropdownContainer2>
        <button onClick={travelHandler} ref={travelRef}>{travelContent}</button> 
      
      <S.Menu2 isDropped={travelIsOpen}>
          <S.Ul2>
            <S.Li2>
              <S.LinkWrapper2 onClick={() => handleMenuClick3('인천➡️김해')}>인천➡️김해</S.LinkWrapper2>
            </S.Li2>
            <S.Li2>
              <S.LinkWrapper2 onClick={() => handleMenuClick3('김포➡️안양')}>김포➡️안양</S.LinkWrapper2>
            </S.Li2>
            <S.Li2>
              <S.LinkWrapper2 onClick={() => handleMenuClick3('여수➡️원주')}>여수➡️원주</S.LinkWrapper2>
            </S.Li2>
            <S.Li2>
              <S.LinkWrapper2 onClick={() => handleMenuClick3('김포➡️원주')}>김포➡️원주</S.LinkWrapper2>
            </S.Li2>
            <S.Li2>
              <S.LinkWrapper2 onClick={() => handleMenuClick3('여수➡️인천')}>여수➡️인천</S.LinkWrapper2>
            </S.Li2>
            
          </S.Ul2>
      </S.Menu2>

      </S.DropdownContainer2>

    <S.CalendarContainer>
         <button onClick={handleCalendarButtonClick}>{moment(selectedDate).format("YYYY-MM-DD")}</button>
         <S.CalendarWrapper isOpen={isCalendarOpen}>
           {isCalendarOpen && <Calendar onChange={handleDateChange} value={selectedDate} formatDay={(locale, date) => moment(date).format("DD")}></Calendar>}
         </S.CalendarWrapper>
     </S.CalendarContainer>
      
    <S.DropdownContainer2>
       <button onClick={cacl1Handler} ref={cacl1Ref}>인원수: {result} </button> 
    
       <S.Menu2 isDropped={cacl1IsOpen} onClick={notexit}>
        <S.Ul3>
          <S.Li3>
              <p>인원수</p>
              <button onClick={decrease}> <FontAwesomeIcon icon={faMinus}/> </button>
              {result}
              <button onClick={increase}> <FontAwesomeIcon icon={faPlus}/> </button>
          </S.Li3>
         
        </S.Ul3>
     </S.Menu2>

    </S.DropdownContainer2>
  </>

    )
}


   else if (contentType === 'hotel') {
    contentToShow = (
      <>
       <S.DropdownContainer2>
       <button onClick={hotelHandler} ref={hotelRef}>{hotelContent}</button> 
    
      <S.Menu2 isDropped={hotelIsOpen}>
        <S.Ul2>
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('서울')}>서울</S.LinkWrapper2>
          </S.Li2>
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('경기도')}>경기도</S.LinkWrapper2>
          </S.Li2>
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('충청도')}>충청도</S.LinkWrapper2>
          </S.Li2>
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('강원도')}>강원도</S.LinkWrapper2>
          </S.Li2>
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('전라도')}>전라도</S.LinkWrapper2>
          </S.Li2>
    
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('경상도')}>경상도</S.LinkWrapper2>
          </S.Li2>
          
          <S.Li2>
            <S.LinkWrapper2 onClick={() => handleMenuClick4('제주도')}>제주도</S.LinkWrapper2>
          </S.Li2>
        </S.Ul2>

     </S.Menu2>
     </S.DropdownContainer2>

     <S.CalendarContainer>
         <button onClick={handleCalendarButtonClick}>{moment(selectedDate).format("YYYY-MM-DD")}</button>
         <S.CalendarWrapper isOpen={isCalendarOpen}>
           {isCalendarOpen && <Calendar onChange={handleDateChange} value={selectedDate} formatDay={(locale, date) => moment(date).format("DD")}></Calendar>}
         </S.CalendarWrapper>
     </S.CalendarContainer>
        
        <S.DropdownContainer2>
       <button onClick={cacl1Handler} ref={cacl1Ref}>인원수: {result} </button> 
    
       <S.Menu2 isDropped={cacl1IsOpen} onClick={notexit}>
        <S.Ul3>
          <S.Li3>
              <p>인원수</p>
              <button onClick={decrease}> <FontAwesomeIcon icon={faMinus}/> </button>
              {result}
              <button onClick={increase}> <FontAwesomeIcon icon={faPlus}/> </button>
          </S.Li3>
         
        </S.Ul3>
     </S.Menu2>

   </S.DropdownContainer2>
      </>
    );
  }

// 서울 , 인천 사진 클릭 시 
const navigate = useNavigate();

const handleClick = (text) => {
  let path = '';
  switch (text) {
    case '서울':
      path = '/Airline';
      break;
    case '강원도':
      path = '/Hotel';
      break;
    case '전라도':
      path = '/jeolla';
      break;
    case '경상도':
      path = '/gyeongsang';
      break;
    case '경기도':
      path = '/gyeongsang';
      break;
    case '충청도':
      path = '/gyeongsang';
      break;
    case '제주도':
      path = '/gyeongsang';
      break;
    default:
      break;
  }
  if (path !== '') {
    navigate(path);
  }
};

// 2. 슬라이드
const NextArrow = ({ onClick }) => {
  return (
    <button className='arrow1' onClick={onClick} type='button'>
    <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className='arrow2' onClick={onClick} type='button'>
    <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const settings = {
  infinite: false,
  arrow: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevArrow /> ,
  nextArrow: <NextArrow />
};  


// 3-1 아이콘 하트 누르기 
const [favorites, setFavorites] = useState({});

const handleFavoriteClick = (iconId) => {
  setFavorites(prevFavorites => {
    const newStatus = !prevFavorites[iconId];
    console.log(`하트 ${iconId} 클릭됨. 새로운 상태:`, newStatus);
    return {
      ...prevFavorites,
      [iconId]: newStatus,
    };
  });
};



// 3-2 각 테마 
const [TravelType, setTravelType] = useState('seoul');

let travelToShow;

if (TravelType === 'seoul') {
  travelToShow = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list1.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart1')}>
              <FontAwesomeIcon icon={favorites['heart1'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>서울 전통문화 체험 코스</p>
          
            <p className='price2'>43,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (31)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list2.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart2')}>
              <FontAwesomeIcon icon={favorites['heart2'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>뷰티풀 서울 ,MIRO SEOUL</p>
          
            <p className='price2'>56,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              (25)
            </p>
          
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list3.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart3')}>
              <FontAwesomeIcon icon={favorites['heart3'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>배낭여행자 코스</p>
          
            <p className='price2'>72,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (35)
            </p>
         
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list4.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart4')}>
              <FontAwesomeIcon icon={favorites['heart4'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>서울 힐링 코스</p>
          
            <p className='price2'>75,700원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (78)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list5.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart5')}>
              <FontAwesomeIcon icon={favorites['heart5'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>서울 액티비티 코스</p>
          
            <p className='price2'>49,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              (98)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list6.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart6')}>
              <FontAwesomeIcon icon={favorites['heart6'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>서울 식도락 코스</p>
          
            <p className='price2'>35,600원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (102)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list7.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart7')}>
              <FontAwesomeIcon icon={favorites['heart7'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>비즈니스 여행자 코스</p>
          
            <p className='price2'>72,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (15)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list8.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart8')}>
              <FontAwesomeIcon icon={favorites['heart8'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>서울</p>
            <p className='big'>서울 음악 여행 코스</p>
          
            <p className='price2'>25,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (35)
            </p>
          
          </S.middle>

            
    </>
  );
} 

else if (TravelType === 'keong') {
  travelToShow = (
    <>
      <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list11.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart9')}>
              <FontAwesomeIcon icon={favorites['heart9'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경기도</p>
            <p className='big'>시간으로 떠나는 강화도 당일여행</p>
          
            <p className='price2'>27,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              (50)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list12.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart10')}>
              <FontAwesomeIcon icon={favorites['heart10'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경기도</p>
            <p className='big'>서해 big 3 섬 당일 여행</p>
          
            <p className='price2'>43,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (13)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list13.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart11')}>
              <FontAwesomeIcon icon={favorites['heart11'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경기도</p>
            <p className='big'>힐링여행 2박3일</p>
          
            <p className='price2'>156,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (20)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list14.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart12')}>
              <FontAwesomeIcon icon={favorites['heart12'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경기도</p>
            <p className='big'>천혜의 비경 1박2일</p>
          
            <p className='price2'>34,500원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (49)
            </p>
          
          </S.middle>
    </> 
  );
} 

else if (TravelType === 'chung') {
  travelToShow = (
    <>
        <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list21.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart13')}>
              <FontAwesomeIcon icon={favorites['heart13'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>충청도</p>
            <p className='big'>의림지 치유숲길, 청풍문화재단지 당일여행</p>
          
            <p className='price2'>19,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (10)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list22.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart14')}>
              <FontAwesomeIcon icon={favorites['heart14'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>충청도</p>
            <p className='big'>흥미진진 공주 힐링 당일여행</p>
          
            <p className='price2'>43,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (22)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list23.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart15')}>
              <FontAwesomeIcon icon={favorites['heart15'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>충청도</p>
            <p className='big'>대전에서 휴(休)! 당일여행</p>
          
            <p className='price2'>25,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (18)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list24.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart16')}>
              <FontAwesomeIcon icon={favorites['heart16'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>충청도</p>
            <p className='big'>아산, 예산 당일여행</p>
          
            <p className='price2'>27,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (32)
            </p>
          
          </S.middle>
    </>
  );
}

else if (TravelType === 'jeon') {
  travelToShow  = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list31.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart17')}>
              <FontAwesomeIcon icon={favorites['heart17'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>전라도</p>
            <p className='big'>여수에서 즐기는 휴양지 VIBE 여행</p>
          
            <p className='price2'>67,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (25)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list32.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart18')}>
              <FontAwesomeIcon icon={favorites['heart18'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>전라도</p>
            <p className='big'>내생애 꼭 가봐야할 남도 4박5일</p>
          
            <p className='price2'>670,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              <FontAwesomeIcon icon={empty}/>
              (51)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list33.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart19')}>
              <FontAwesomeIcon icon={favorites['heart19'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>전라도</p>
            <p className='big'>낭만의 도시 여수 야경과 보물섬 남해 1박2일 여행</p>
          
            <p className='price2'>134,400원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (61)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list34.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart20')}>
              <FontAwesomeIcon icon={favorites['heart20'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>전라도</p>
            <p className='big'>전라도별미찾아떠나는웰빙1박2일</p>
          
            <p className='price2'>164,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (32)
            </p>
          
          </S.middle>
    </> 
  );
}

else if (TravelType === 'kyeong') {
  travelToShow  = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list41.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart21')}>
              <FontAwesomeIcon icon={favorites['heart21'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경상도</p>
            <p className='big'>동해안 7번국도 따라 1박2일 여행</p>
          
            <p className='price2'>124,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (90)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list42.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart22')}>
              <FontAwesomeIcon icon={favorites['heart22'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경상도</p>
            <p className='big'>부산, 울산, 경주 1박2일</p>
          
            <p className='price2'>127,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (94)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list43.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart23')}>
              <FontAwesomeIcon icon={favorites['hear23'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경상도</p>
            <p className='big'>낭만의 도시 여수 야경과 보물섬 남해 1박2일 여행</p>
          
            <p className='price2'>134,400원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (61)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list44.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart24')}>
              <FontAwesomeIcon icon={favorites['heart24'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>경상도</p>
            <p className='big'>동해美행~ 7번국도 2박3일 여행</p>
          
            <p className='price2'>217,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (32)
            </p>
          
          </S.middle>
    </> 
  );
}

else if (TravelType === 'jeju') {
  travelToShow  = (
    <>
     <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list61.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart25')}>
              <FontAwesomeIcon icon={favorites['heart25'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>제주도</p>
            <p className='big'>#대한항공+3성급호텔+美친제주 2박3일</p>
          
            <p className='price2'>394,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              (100)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list62.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart26')}>
              <FontAwesomeIcon icon={favorites['heart26'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>제주도</p>
            <p className='big'>#대한항공+3성급호텔+노팁노옵션 2박3일</p>
          
            <p className='price2'>459,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (94)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list63.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart27')}>
              <FontAwesomeIcon icon={favorites['heart27'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>제주도</p>
            <p className='big'>미식여행+가파도 청보리 3박4일</p>
          
            <p className='price2'>1334,400원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (121)
            </p>
          
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list64.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart28')}>
              <FontAwesomeIcon icon={favorites['heart28'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>제주도</p>
            <p className='big'>대한항공+서귀포KAL+렌트카 3일</p>
          
            <p className='price2'>759,000원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (32)
            </p>
          
          </S.middle>
    </> 
  );
}

else if (TravelType === 'kangwon') {
  travelToShow  = (
    <>
     <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list51.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart29')}>
              <FontAwesomeIcon icon={favorites['heart29'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>강원도</p>
            <p className='big'>벚꽃, 죽서루, 수로부인헌화공원 당일여행</p>
          
            <p className='price2'>31,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (9)
            </p>
            
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list52.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart30')}>
              <FontAwesomeIcon icon={favorites['heart30'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>강원도</p>
            <p className='big'>강릉 해안선열차, 안목해변, 동해 묵호 당일여행</p>
          
            <p className='price2'>38,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (24)
            </p>
           
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/home/list/list53.png`} alt="Description"/>
            <S.icon>
            <button onClick={() => handleFavoriteClick('heart31')}>
              <FontAwesomeIcon icon={favorites['heart31'] ? fasHeart : farHeart} />
            </button>
            </S.icon>
            </S.block>
            <p className='small'>강원도</p>
            <p className='big'>낭만 BIG3! 대관령양떼목장 여행</p>
          
            <p className='price2'>41,900원</p>  
            <p className='small'>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={full}/>
              <FontAwesomeIcon icon={empty}/>
              (51)
            </p>
          
          </S.middle>

    </> 
  );
}




const checkScreen = () => {
  let content = null;

  if (myPageContent === '사랑하는 사람과' && boardContent === '평화롭게') {
    content = (
          <Slider {...settings}>
             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme1.png`} alt="Description"/>
              <p className='small'>[순우리여행]</p>
              <p className='big'>쏠라티 단독 한려수도권 2박3일</p>
              <p className='big' style={{ color: 'red' }}>1,050,000원</p>

             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme2.png`} alt="Description"/>
              <p className='small'>#통영</p>
              <p className='big'>쏠라티 단독 서해안권 2박3일</p>

              <p className='big' style={{ color: 'red' }}>970,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme3.png`} alt="Description"/>
              <p className='small'>#안동</p>
              <p className='big'>단독 동해안권 2박3일</p>
              
              <p className='big' style={{ color: 'red' }}>950,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme4.png`} alt="Description"/>
              <p className='small'>#남도</p>
              <p className='big'>남도 4박5일</p>
          
              <p className='big' style={{ color: 'red' }}>1,900,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme5.png`} alt="Description"/>
              <p className='small'>#숙박여행</p>
              <p className='big'>내생애 꼭 가봐야할 한려수도권 2박3일</p>
           
              <p className='big' style={{ color: 'red' }}>725,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme6.png`} alt="Description"/>
              <p className='small'>#동해안</p>
              <p className='big'>내생애 꼭 가봐야할 동해안권 2박3일</p>
              
              <p className='big' style={{ color: 'red' }}>670,000원</p>
             </S.play>
             </Slider>
    );
  }

  else if (myPageContent === '가족과' && boardContent === '신나게') {
    content = (
          <Slider {...settings}>
             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme7.png`} alt="Description"/>
              <p className='small'>[경남테마여행]</p>
              <p className='big'>요트투어 in 통영 한산도 1박2일 여행</p>
              <p className='big' style={{ color: 'red' }}>1,250,000원</p>

             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme8.png`} alt="Description"/>
              <p className='small'>#현대홈쇼핑</p>
              <p className='big'>강릉.목호 쾌속선 2박3일</p>
              
              <p className='big' style={{ color: 'red' }}>950,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme9.png`} alt="Description"/>
              <p className='small'>#남도</p>
              <p className='big'>크루즈 울릉도 2박3일</p>
          
              <p className='big' style={{ color: 'red' }}>1,900,000원</p>
             </S.play>

            

             </Slider>
    );
  }

  else if (myPageContent === '친구들과' && boardContent === '감성있게') {
    content = (
          <Slider {...settings}>
           
             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme10.png`} alt="Description"/>
              <p className='small'>#에어카텔</p>
              <p className='big'>호캉스 2박3일</p>
              
              <p className='big' style={{ color: 'red' }}>1,000,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme11.png`} alt="Description"/>
              <p className='small'>#개별집결</p>
              <p className='big'>휴양지 VIBE 여행</p>
          
              <p className='big' style={{ color: 'red' }}>2,900,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme12.png`} alt="Description"/>
              <p className='small'>#숙박여행</p>
              <p className='big'>내생애 꼭 가봐야할 한려수도권 2박3일</p>
           
              <p className='big' style={{ color: 'red' }}>725,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/home/theme/theme13.png`} alt="Description"/>
              <p className='small'>#동해안</p>
              <p className='big'>내생애 꼭 가봐야할 동해안권 2박3일</p>
              
              <p className='big' style={{ color: 'red' }}>670,000원</p>
             </S.play>
             </Slider>
    );
  }

  return content;
};



// 메인시작
  return (
    <div>
      <S.Section>
        <S.ImageWrapper>
          <S.Wrapper>
            <S.LetterWrapper>
              고객님,<br/> 
              어떤 여행을 꿈꾸시나요?
            </S.LetterWrapper>
            <S.ListWrapper>
             <button onClick={() => setContentType('flight')}>항공</button>
             <button onClick={() => setContentType('hotel')}>호텔</button>
            </S.ListWrapper>
            <S.Show>
              {contentToShow}
            </S.Show>
            <S.ButtonWrapper>
              <button>숙소 검색</button>
            </S.ButtonWrapper>
          </S.Wrapper>
        </S.ImageWrapper>
        
        <S.Title1>
            <p className='title3'>DREAMGREENTOUR RECOMMEND</p>
            <p className='title4'>어디로 여행을 떠나시나요?</p>
        </S.Title1> 

      

        <S.region>

        <Slider {...settings}>
        <S.Circle onClick={() => handleClick('서울')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/seoul.png`} alt="서울"/>
           <S.Text>서울</S.Text>
         </S.Circle>

         <S.Circle onClick={() => handleClick('강원도')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/kangwon.png`} alt="강원도"/>
           <S.Text>강원도</S.Text>
         </S.Circle>

         <S.Circle onClick={() => handleClick('전라도')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/jeonla.png`} alt="전라도"/>
           <S.Text>전라도</S.Text>
         </S.Circle>
         <S.Circle onClick={() => handleClick('경상도')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/keongsang.png`} alt="경상도"/>
           <S.Text>경상도</S.Text>
         </S.Circle>

         <S.Circle onClick={() => handleClick('경기도')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/keongi.png`} alt="경기도"/>
           <S.Text>경기도</S.Text>
         </S.Circle>

         <S.Circle onClick={() => handleClick('충청도')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/chong.png`} alt="충청도"/>
           <S.Text>충청도</S.Text>
         </S.Circle>

         <S.Circle onClick={() => handleClick('제주도')}>
           <S.Image1 src={`${process.env.PUBLIC_URL}/home/circle/jeju.png`} alt="제주도"/>
           <S.Text>제주도</S.Text>
         </S.Circle>
         </Slider>

         </S.region>

        
     

        <S.top>
          <p className='num1'>WEEKLY BEST DEALS</p>
          <p className='num2'>이번 주에 가장</p>
          <p className='num2'>사랑받은 여행이에요</p>
        </S.top>

        <S.country>
            <ul>
              <li><button onClick={() => setTravelType('seoul')}>서울</button></li>
              <li><button onClick={() => setTravelType('keong')}>경기도</button></li>
              <li><button onClick={() => setTravelType('chung')}>충청도</button></li>
              <li><button onClick={() => setTravelType('jeon')}>전라도</button></li>
              <li><button onClick={() => setTravelType('kyeong')}>경상도</button></li>
              <li><button onClick={() => setTravelType('jeju')}>제주도</button></li>
              <li><button onClick={() => setTravelType('kangwon')}>강원도</button></li>
            </ul>
        </S.country>

        <S.package>
         {travelToShow}
        </S.package>


          <S.imagine>상상만 하던,내 마음속의 여행,</S.imagine>
          <S.imagine>키워드로 검색해 보세요.</S.imagine>

        <S.keyword>

        <S.DropdownContainer>
       
        <S.DropdownButton onClick={myPageHandler} ref={myPageRef}> {myPageContent} </S.DropdownButton>

        <S.Menu isDropped={myPageIsOpen}>
          <S.Ul>
            <S.Li>
              <S.LinkWrapper onClick={() => handleMenuClick1('사랑하는 사람과')}>사랑하는 사람과</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper onClick={() => handleMenuClick1('가족과')}>가족과</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper onClick={() => handleMenuClick1('친구들과')}>친구들과</S.LinkWrapper>
            </S.Li>
          </S.Ul>
        </S.Menu>
        </S.DropdownContainer>

      <S.DropdownContainer>
        <S.DropdownButton onClick={boardHandler} ref={boardRef}> {boardContent} </S.DropdownButton>
        <S.Menu isDropped={boardIsOpen}>
          <S.Ul>
            <S.Li>
              <S.LinkWrapper onClick={() => handleMenuClick2('평화롭게')}>평화롭게</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper onClick={() => handleMenuClick2('신나게')}>신나게</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper onClick={() => handleMenuClick2('감성있게')}>감성있게</S.LinkWrapper>
            </S.Li>
          </S.Ul>
           </S.Menu>
        </S.DropdownContainer>
        
        <span>떠나고 싶어요</span>

        </S.keyword>

          <S.plays>
            {checkScreen()}
          </S.plays>

          <S.Grids>
           
           <S.Grid>
             <p className='theme'>GREENDREAMTOUR THEME</p>
             <p className='special'>제주도 투어</p>  
             <p className='special'>예약하면, 워킹투어가</p>   
             <p className='special'>무료</p>   
             <button>MORE</button>
           </S.Grid>

            <S.Grid>
              <S.Image4 id='2' src={`${process.env.PUBLIC_URL}/home/grid/grid1.png`} alt="Description"/>
              <p className='price'>제주 #우도관광 #마라도 or#가파도 #식사 ALL 포함</p>
           
              <p className='price' style={{ color: 'red' }}>730,900원</p>
            </S.Grid>
          
            <S.Grid>
              <S.Image4 id='3' src={`${process.env.PUBLIC_URL}/home/grid/grid2.png`} alt="Description"/>
              <p className='price'>제주 3일 #BEST추천여행 #제주현지특식 #노쇼핑 #노팁 #노옵션</p>
             
              <p className='price' style={{ color: 'red' }}>813,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='4' src={`${process.env.PUBLIC_URL}/home/grid/grid3.png`} alt="Description"/>
              <p className='price'>제주 #우도단독버스투어 #제주핵심명소 #식사ALL포함 #섬여행</p>
          
              <p className='price' style={{ color: 'red' }}>1023,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='5' src={`${process.env.PUBLIC_URL}/home/grid/grid4.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
             
              <p className='price' style={{ color: 'red' }}>1,502,000원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='6' src={`${process.env.PUBLIC_URL}/home/grid/grid5.png`} alt="Description"/>
              <p className='price'>제주3일#HOT추천여행 #가파도 #송악산둘레길 #비자림</p>
              
              <p className='price' style={{ color: 'red' }}>1,723,000원</p>
            </S.Grid>
            <S.Grid>
              <S.Image4 id='7' src={`${process.env.PUBLIC_URL}/home/grid/grid6.png`} alt="Description"/>
              <p className='price'>제주 3일 #차귀도 섬탐방 #하늘연못 인생샷 #드라마촬영지 #환상숲</p>
             
              <p className='price' style={{ color: 'red' }}>723,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='8' src={`${process.env.PUBLIC_URL}/home/grid/grid7.png`} alt="Description"/>
              <p className='price'>우도+마라도,삼도투어 3일</p>
             
              <p className='price' style={{ color: 'red' }}>1,373,900원</p>
            </S.Grid>
          </S.Grids>
       

          <S.end>
          <p className='last'>투어/입장권 예약상담</p>
              <S.icons>
                <FontAwesomeIcon icon={faPen}/>
                <p>투어/입장권 상품 문의는 투어/입장권 상품페이지 내 "상품문의" 게시판을 이용 부탁합니다. <br />
                투어/입장권 일반 문의는 "고객문의" 게시판을 이용 부탁합니다.<br />
                투어/입장권 예약, 취소, 결제, 환불은 "자주 찾는 질문" 게시판에서 확인 부탁합니다.</p>
              </S.icons>
          </S.end>

          <S.end>
          <p className='last'>투어/입장권 판매회원 가입</p>
              <S.icons>
                <FontAwesomeIcon icon={faPen}/>
                <p>투어/입장권 상품 판매는 "판매회원 가입 안내" 페이지에서 별도의 회원가입 후 가능합니다. <br />
                  판매회원 가입 문의 (국내)hhj1217@hanatour.com <br />
                  (해외)jinie27@hanatour.com</p>
              </S.icons>
          </S.end>

      </S.Section>
      <Outlet/>
    </div>
   );
};


export default DesktopView;
