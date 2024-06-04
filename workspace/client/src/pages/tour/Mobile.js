import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useDetectClose from "../../hooks/useDetectClose ";
import S from "./style";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faLocationDot,
    faCompass,
    faCalendarDays,
    faMedal,
    faCrown,
    faBus,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MobileView = () => {
    // 1. 맨위 input box
    const [startIsOpen, startRef, startHandler] = useDetectClose(false);
    const [endIsOpen, endRef, endHandler] = useDetectClose(false);

    const [startContent, setStartContent] = useState("출발지");
    const [endContent, setEndContent] = useState("도착지");

    const handleStartClick = (menuText) => {
        setStartContent(menuText);
    };

    const handleEndClick = (menuText) => {
        setEndContent(menuText);
    };

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

    //슬라이드
    const NextArrow = ({ onClick }) => {
        return (
            <button className="arrow1" onClick={onClick} type="button">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <button className="arrow2" onClick={onClick} type="button">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    };

    const settings1 = {
        infinite: true,
        arrow: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <S.div1>
                <Outlet />

                <Slider {...settings1}>
                    <S.ImageWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/tour/background/1.png`}
                            alt="배경 이미지1"
                        />
                    </S.ImageWrapper>

                    <S.ImageWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/tour/background/2.png`}
                            alt="배경 이미지2"
                        />
                    </S.ImageWrapper>

                    <S.ImageWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/tour/background/3.png`}
                            alt="배경 이미지3"
                        />
                    </S.ImageWrapper>

                    <S.ImageWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/tour/background/4.png`}
                            alt="배경 이미지4"
                        />
                    </S.ImageWrapper>

                    <S.ImageWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/tour/background/5.png`}
                            alt="배경 이미지5"
                        />
                    </S.ImageWrapper>

                    <S.ImageWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/tour/background/6.png`}
                            alt="배경 이미지6"
                        />
                    </S.ImageWrapper>
                </Slider>
            </S.div1>

            <S.travel>
                <S.DropdownContainer1>
                    <button onClick={startHandler} ref={startRef}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {startContent}
                    </button>

                    <S.Menu1 isDropped={startIsOpen}>
                        <S.Ul1>
                            <S.Li1>
                                <S.LinkWrapper1
                                    onClick={() =>
                                        handleStartClick("서울.경기")
                                    }
                                >
                                    서울.경기
                                </S.LinkWrapper1>
                            </S.Li1>
                            <S.Li1>
                                <S.LinkWrapper1
                                    onClick={() => handleStartClick("강원도")}
                                >
                                    강원도
                                </S.LinkWrapper1>
                            </S.Li1>
                            <S.Li1>
                                <S.LinkWrapper1
                                    onClick={() => handleStartClick("충청도")}
                                >
                                    충청도
                                </S.LinkWrapper1>
                            </S.Li1>
                            <S.Li1>
                                <S.LinkWrapper1
                                    onClick={() => handleStartClick("경상도")}
                                >
                                    경상도
                                </S.LinkWrapper1>
                            </S.Li1>
                            <S.Li1>
                                <S.LinkWrapper1
                                    onClick={() => handleStartClick("전라도")}
                                >
                                    전라도
                                </S.LinkWrapper1>
                            </S.Li1>
                            <S.Li1>
                                <S.LinkWrapper1
                                    onClick={() => handleStartClick("제주도")}
                                >
                                    제주도
                                </S.LinkWrapper1>
                            </S.Li1>
                        </S.Ul1>
                    </S.Menu1>
                </S.DropdownContainer1>

                <S.DropdownContainer2>
                    <button onClick={endHandler} ref={endRef}>
                        <FontAwesomeIcon icon={faCompass} />
                        {endContent}
                    </button>

                    <S.Menu2 isDropped={endIsOpen}>
                        <S.Ul2>
                            <S.Li2>
                                <S.LinkWrapper2
                                    onClick={() => handleEndClick("서울.경기")}
                                >
                                    서울.경기
                                </S.LinkWrapper2>
                            </S.Li2>
                            <S.Li2>
                                <S.LinkWrapper2
                                    onClick={() => handleEndClick("강원도")}
                                >
                                    강원도
                                </S.LinkWrapper2>
                            </S.Li2>
                            <S.Li2>
                                <S.LinkWrapper2
                                    onClick={() => handleEndClick("충청도")}
                                >
                                    충청도
                                </S.LinkWrapper2>
                            </S.Li2>
                            <S.Li2>
                                <S.LinkWrapper2
                                    onClick={() => handleEndClick("경상도")}
                                >
                                    경상도
                                </S.LinkWrapper2>
                            </S.Li2>
                            <S.Li2>
                                <S.LinkWrapper2
                                    onClick={() => handleEndClick("전라도")}
                                >
                                    전라도
                                </S.LinkWrapper2>
                            </S.Li2>
                            <S.Li2>
                                <S.LinkWrapper2
                                    onClick={() => handleEndClick("제주도")}
                                >
                                    제주도
                                </S.LinkWrapper2>
                            </S.Li2>
                        </S.Ul2>
                    </S.Menu2>
                </S.DropdownContainer2>

                <S.CalendarContainer>
                    <button onClick={handleCalendarButtonClick}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        {moment(selectedDate).format("YYYY-MM-DD")}
                    </button>
                    <S.CalendarWrapper isOpen={isCalendarOpen}>
                        {isCalendarOpen && (
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                formatDay={(locale, date) =>
                                    moment(date).format("DD")
                                }
                            ></Calendar>
                        )}
                    </S.CalendarWrapper>
                </S.CalendarContainer>

                <S.ButtonWrapper>
                    <button>검색</button>
                </S.ButtonWrapper>
            </S.travel>

            <S.week>
                <p className="best">
                    <FontAwesomeIcon icon={faCrown} />
                    주간베스트 TOP4
                </p>
                <p className="week">지난 한 주간 인기 많았던 상품!</p>
            </S.week>

            <S.package>
                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/best/1.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">
                        TOP1
                        <FontAwesomeIcon icon={faMedal} />
                    </p>
                    <p className="big">
                        [에어카텔/에어텔]제주3/4일 #신화월드 #신화관 #래딩관
                        #메리엇트관{" "}
                    </p>
                    <p className="middle">239,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/best/2.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">
                        TOP2
                        <FontAwesomeIcon icon={faMedal} />
                    </p>
                    <p className="big">
                        [스테디셀러]제주 #우도단독버스투어 # 제주핵심명소
                        #식사ALL포함 #섬여행{" "}
                    </p>
                    <p className="middle">299,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/best/3.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">
                        TOP3
                        <FontAwesomeIcon icon={faMedal} />
                    </p>
                    <p className="big">[2024년 설연휴]제주 패키지</p>
                    <p className="middle">549,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/best/4.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">
                        TOP4
                        <FontAwesomeIcon icon={faMedal} />
                    </p>
                    <p className="big">
                        [다드림]제주 3일 #BEST추천여행 #제 주현지특식 #노쇼핑
                        #노팁
                    </p>
                    <p className="middle">529,000원~</p>
                </S.middle>
            </S.package>

            <S.week>
                <p className="best">
                    <FontAwesomeIcon icon={faBus} />
                    제주 패키지 여행
                </p>
                <p className="week">숙소, 식사, 일정 포함! 편하고 알찬 여행!</p>
            </S.week>

            <S.package2>
                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/1.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [2024 설연휴]제주 3/4일 #황금연휴 좌석확보
                    </p>
                    <p className="middle">549,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/2.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [다드림]제주 3일 #BEST추천여행 #제 주현지특식
                        #노쇼핑,노팁{" "}
                    </p>
                    <p className="middle">529,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/3.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [스테디셀러]제주 3일 #우도관광 #제주 핵심명소 #현지특식
                    </p>
                    <p className="middle">299,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/4.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [핫플레이스]제주 3일 #산양큰엉곶 #가 파도 #사려니 숲길
                    </p>
                    <p className="middle">309,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/5.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [제주완전정복]제주 3일 #차귀도 섬탐방 #하늘연못 인생샷
                    </p>
                    <p className="middle">489,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/6.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [KE연합상품]제주 3일 #노팁&노옵션 # 우도+마라도
                        #삼도투어
                    </p>
                    <p className="middle">373,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/7.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [제주자연힐링]제주 3일 #영주10경 #미
                        각&시각여행#특식제공
                    </p>
                    <p className="middle">569,000원~</p>
                </S.middle>

                <S.middle>
                    <S.block>
                        <S.Image2
                            src={`${process.env.PUBLIC_URL}/tour/package/8.png`}
                            alt="Description"
                        />
                    </S.block>
                    <p className="small">패키지</p>
                    <p className="big">
                        [단독여행]제주3일 #우리끼리 #힐링포 인트 #특급호텔
                        #고급택시투어{" "}
                    </p>
                    <p className="middle">619,000원~</p>
                </S.middle>
            </S.package2>
        </>
    );
};

export default MobileView;
