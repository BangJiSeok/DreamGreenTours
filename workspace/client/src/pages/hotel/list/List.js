import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../global/theme";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faChevronDown,
    faHeart as faSolidHeart,
    faHeart as faRegularHeart,
    faLocationCrosshairs,
    faMagnifyingGlass,
    faMap,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import HotelSearchContainer from "./HotelSearchContainer";

const localData = [
    {
        id: 1,
        name: "서울",
    },
    {
        id: 2,
        name: "제주",
    },
    {
        id: 3,
        name: "부산",
    },
    {
        id: 4,
        name: "강원도",
    },
    {
        id: 5,
        name: "경기도",
    },
    {
        id: 6,
        name: "충청도",
    },
    {
        id: 7,
        name: "경상도",
    },
    {
        id: 8,
        name: "전라도",
    },
    {
        id: 9,
        name: "인천",
    },
    {
        id: 10,
        name: "대구",
    },
    {
        id: 11,
        name: "대전",
    },
    {
        id: 12,
        name: "울산",
    },
];

const hotelGrade = [
    {
        id: 1,
        grade: "5성급",
    },
    {
        id: 2,
        grade: "4성급",
    },
    {
        id: 3,
        grade: "3성급",
    },
    {
        id: 4,
        grade: "2성급",
    },
    {
        id: 5,
        grade: "1성급",
    },
];

const hotelType = [
    {
        id: 1,
        type: "호텔",
    },
    {
        id: 2,
        type: "리조트",
    },
    {
        id: 3,
        type: "레지던스",
    },
    {
        id: 4,
        type: "펜션",
    },
];

const amenities = [
    "세미나실",
    "비즈니스센터",
    "셔틀버스",
    "실내수영장",
    "실외수영장",
    "볼링장",
    "레스토랑",
    "카페",
    "주차장",
    "피트니스",
    "사우나",
    "셀프세탁실",
    "키즈카페",
    "온수풀",
    "흡연실",
    "스키장",
    "펫룸",
    "욕조",
    "WI-FI",
    "편의점",
    "루프탑",
    "클럽라운지",
    "인터넷",
    "워터파크",
    "스파(마사지)",
    "금연실",
    "BAR",
    "바베큐장",
];

const amenitiesObjects = amenities.map((amenity, index) => ({
    id: index + 1,
    type: amenity,
}));

const List = () => {
    // 호텔 데이터를 상태로 관리
    const [hotels, setHotels] = useState([]);
    // 데이터 로딩 상태를 표시하기 위한 상태
    const [isLoading, setIsLoading] = useState(false);
    // 에러 상태
    const [error, setError] = useState(null);

    const [heart1, setHeart1] = useState(false);
    const handleHeart1 = () => {
        setHeart1(!heart1);
    };

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/hotelData") // 데이터를 불러올 URL
            .then((response) => response.json()) // 응답을 JSON 형태로 파싱
            .then((data) => {
                setHotels(data); // 상태에 데이터 저장
                if (data.length > 0) {
                    const prices = data.map((hotel) => parseInt(hotel.price));
                    setMinPrice(Math.min(...prices)); // 최소 가격 계산
                    setMaxPrice(Math.max(...prices)); // 최대 가격 계산s
                }
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    const [activeIds, setActiveIds] = useState({
        localData: new Set(),
        hotelGrade: new Set(),
        hotelType: new Set(),
        amenities: new Set(),
    });

    const toggleActive = (dataset, id) => {
        setActiveIds((prevActiveIds) => ({
            ...prevActiveIds,
            [dataset]: toggleSet(prevActiveIds[dataset], id),
        }));
    };

    function toggleSet(set, id) {
        const newSet = new Set(set);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        return newSet;
    }

    const location = useLocation();

    const { 성인, 아동, 객실, 지역 } = location.state;

    // Slide useState useEffect===========================================
    const [isDragging1, setIsDragging1] = useState(false);
    const [position1, setPosition1] = useState(0);
    const [isDragging2, setIsDragging2] = useState(false);
    const [position2, setPosition2] = useState(230);
    const sliderRef = useRef(null);

    const [showHotelSearch, setShowHotelSearch] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleMouseDown = (i) => {
        if (i === 1) {
            setIsDragging1(true);
        } else {
            setIsDragging2(true);
        }
    };

    const handleMouseMove = (event) => {
        if (isDragging1 || isDragging2) {
            const frameRect = sliderRef.current.getBoundingClientRect();
            let newPos = event.clientX - frameRect.left;
            newPos = Math.max(Math.min(newPos, frameRect.width - 20), 0); // 원이 프레임 밖으로 나가지 않도록 조정

            if (isDragging1) {
                if (newPos < position2) {
                    setPosition1(newPos);
                }
            } else if (isDragging2) {
                if (newPos > position1) {
                    setPosition2(newPos);
                }
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging1(false);
        setIsDragging2(false);
    };

    // 마우스 이벤트 추가
    useEffect(() => {
        const slider = sliderRef.current;
        const handleMouseUpGlobal = () => {
            setIsDragging1(false);
            setIsDragging2(false);
        };

        slider.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUpGlobal);

        return () => {
            slider.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUpGlobal);
        };
    }, [isDragging1, isDragging2]);

    const toggleHotelSearch = (locationName) => {
        setSelectedLocation(locationName); // 선택된 지역 상태 업데이트
        setShowHotelSearch(!showHotelSearch); // HotelSearchContainer 표시
    };

    // 선택된 지역에 따라 호텔 데이터를 필터링
    const [selectedRegion, setSelectedRegion] = useState("");
    const [filteredHotels, setFilteredHotels] = useState([]);

    useEffect(() => {
        if (localData.name) {
            const matchingHotels = hotels.filter(
                (hotel) => hotel.local === selectedRegion
            );
            setFilteredHotels(matchingHotels);
        } else {
            setFilteredHotels([]);
        }
    }, [hotels]);

    const [priceAscend, setPriceAscend] = useState([]);

    useEffect(() => {
        if (localData.name) {
            const priceAsc = hotels.sort((hotel) => hotel.price);
            setPriceAscend(priceAsc);
        } else {
            setPriceAscend([]);
        }
    }, [hotels]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <S.DivListContainer>
                    <S.DivListFrame>
                        <S.DivListFormBar></S.DivListFormBar>
                        <S.DivListForm>
                            <S.DivListFrom1>
                                <S.DivListFormTitle>
                                    결과 내 검색
                                </S.DivListFormTitle>
                                <S.DivListFormInputFrame>
                                    <S.InputListForm />
                                    <S.DivListFormSearch>
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            className="icon"
                                        />
                                    </S.DivListFormSearch>
                                </S.DivListFormInputFrame>
                            </S.DivListFrom1>

                            <S.DivListForm2>
                                <S.DivListForm2Title>
                                    지역 바로가기
                                </S.DivListForm2Title>
                                <S.DivListForm2Frame>
                                    <S.HorizontalContainer>
                                        {localData.map((item) => (
                                            <div
                                                key={item.id}
                                                isActive={activeIds.localData.has(
                                                    item.id
                                                )}
                                                onClick={() =>
                                                    toggleActive(
                                                        "localData",
                                                        item.id
                                                    )
                                                }
                                                style={{
                                                    marginRight: "10px",
                                                    marginBottom: "10px",
                                                    cursor: "pointer", // 추가: 커서 스타일 변경
                                                }}
                                            >
                                                {item.name.length === 3 ? (
                                                    <S.LabelLengthThree
                                                        isActive={activeIds.localData.has(
                                                            item.id
                                                        )}
                                                    >
                                                        {item.name}
                                                    </S.LabelLengthThree>
                                                ) : (
                                                    <S.LabelLengthTwo
                                                        isActive={activeIds.localData.has(
                                                            item.id
                                                        )}
                                                    >
                                                        {item.name}
                                                    </S.LabelLengthTwo>
                                                )}
                                            </div>
                                        ))}
                                    </S.HorizontalContainer>
                                </S.DivListForm2Frame>
                            </S.DivListForm2>

                            <S.DivListForm3>
                                <S.DivListForm3TitleFrame>
                                    <S.DivListForm3Title>
                                        가격
                                    </S.DivListForm3Title>
                                    <S.DivListForm3Icon>
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            style={{ color: "#37A551" }}
                                        />
                                    </S.DivListForm3Icon>
                                </S.DivListForm3TitleFrame>
                                <S.DivHotelPriceSlider>
                                    <S.DivHotelPriceMinMaxFrame>
                                        <S.DivHotelPriceMin>
                                            {minPrice.toLocaleString()}
                                        </S.DivHotelPriceMin>
                                        <S.DivHotelPriceMax>
                                            {maxPrice.toLocaleString()}
                                        </S.DivHotelPriceMax>
                                    </S.DivHotelPriceMinMaxFrame>
                                    <S.DivSliderFrame
                                        onMouseMove={handleMouseMove}
                                    >
                                        <S.DivSliderBarFrame ref={sliderRef}>
                                            <S.DivSliderBar
                                                start={(position1 / 230) * 100}
                                                end={(position2 / 230) * 100}
                                            />
                                        </S.DivSliderBarFrame>
                                        <S.DivSliderCircle1
                                            style={{ left: `${position1}px` }}
                                            onMouseDown={() =>
                                                handleMouseDown(1)
                                            }
                                        />
                                        <S.DivSliderCircle2
                                            style={{ left: `${position2}px` }}
                                            onMouseDown={() =>
                                                handleMouseDown(2)
                                            }
                                        />
                                    </S.DivSliderFrame>
                                    <S.DivPriceInputFrame>
                                        <S.InputPriceMin
                                            value={minPrice.toLocaleString()}
                                        />
                                        <S.DivPriceMinMaxBetween>
                                            ~
                                        </S.DivPriceMinMaxBetween>
                                        <S.InputPriceMax
                                            value={maxPrice.toLocaleString()}
                                        />
                                    </S.DivPriceInputFrame>
                                </S.DivHotelPriceSlider>
                            </S.DivListForm3>

                            <S.DivListForm4>
                                <S.DivListForm4Title>
                                    숙소 등급
                                </S.DivListForm4Title>
                                <S.DivHotelGradeFrame>
                                    <S.GradeContainer>
                                        {hotelGrade.map((item) => (
                                            <S.LabelGrade
                                                key={item.id}
                                                isActive={activeIds.hotelGrade.has(
                                                    item.id
                                                )}
                                                onClick={() =>
                                                    toggleActive(
                                                        "hotelGrade",
                                                        item.id
                                                    )
                                                }
                                            >
                                                {item.grade}
                                            </S.LabelGrade>
                                        ))}
                                    </S.GradeContainer>
                                </S.DivHotelGradeFrame>
                            </S.DivListForm4>

                            <S.DivListForm5>
                                <S.DivListForm5Title>
                                    숙소 종류
                                </S.DivListForm5Title>
                                <S.DivHotelTypeFrame>
                                    <S.TypeContainer>
                                        {hotelType.map((item) => (
                                            <S.LabelType
                                                key={item.id}
                                                isActive={activeIds.hotelType.has(
                                                    item.id
                                                )}
                                                onClick={() =>
                                                    toggleActive(
                                                        "hotelType",
                                                        item.id
                                                    )
                                                }
                                            >
                                                {item.type}
                                            </S.LabelType>
                                        ))}
                                    </S.TypeContainer>
                                </S.DivHotelTypeFrame>
                            </S.DivListForm5>

                            <S.DivListForm6>
                                <S.DivListForm6Title>
                                    숙소 편의시설
                                </S.DivListForm6Title>
                                <S.DivAmenitiesFrame>
                                    <S.AmenitiesContainer>
                                        {amenitiesObjects.map((item) => (
                                            <div
                                                key={item.id}
                                                isActive={activeIds.amenities.has(
                                                    item.id
                                                )}
                                                onClick={() =>
                                                    toggleActive(
                                                        "amenities",
                                                        item.id
                                                    )
                                                }
                                            >
                                                {item.type.length > 4 ? (
                                                    <S.LabelAmenitiesLong
                                                        isActive={activeIds.amenities.has(
                                                            item.id
                                                        )}
                                                    >
                                                        {item.type}
                                                    </S.LabelAmenitiesLong>
                                                ) : (
                                                    <S.LabelAmenities
                                                        isActive={activeIds.amenities.has(
                                                            item.id
                                                        )}
                                                    >
                                                        {item.type}
                                                    </S.LabelAmenities>
                                                )}
                                            </div>
                                        ))}
                                    </S.AmenitiesContainer>
                                </S.DivAmenitiesFrame>
                            </S.DivListForm6>
                        </S.DivListForm>
                        <S.DivCounseling>
                            <S.DivCounselingTitle>
                                고객상담 문의
                            </S.DivCounselingTitle>
                            <S.DivCounselingBar1></S.DivCounselingBar1>
                            <S.DivHotelCallNumberFrame>
                                <S.DivHotelCallNumberTitle>
                                    국내숙박
                                </S.DivHotelCallNumberTitle>
                                <S.DivHotelCallNumber>
                                    02-1234-5678
                                </S.DivHotelCallNumber>
                            </S.DivHotelCallNumberFrame>
                            <S.DivCounselingBar2></S.DivCounselingBar2>
                            <S.DivOfficeHour>영업시간 안내</S.DivOfficeHour>
                            <S.DivInforDetailHourFrame>
                                <S.DivInforDetailHour1>
                                    <S.DivWeekday>평일</S.DivWeekday>
                                    <S.DivWeekdayTime>
                                        09:00~18:00
                                    </S.DivWeekdayTime>
                                </S.DivInforDetailHour1>
                                <S.DivInforDetailHour2>
                                    <S.DivLunch>점심시간</S.DivLunch>
                                    <S.DivLunchTime>12:00~13:00</S.DivLunchTime>
                                </S.DivInforDetailHour2>
                                <S.DivAdviceFrame>
                                    <S.DivAdvice>
                                        * 주말/공휴일 긴급상담만 가능
                                        <br />
                                        (업무처리불가)
                                    </S.DivAdvice>
                                </S.DivAdviceFrame>
                            </S.DivInforDetailHourFrame>
                        </S.DivCounseling>

                        <S.DivListMainHeader>
                            <>
                                {showHotelSearch && (
                                    <>
                                        <HotelSearchContainer
                                            location={selectedLocation}
                                            showHotelSearch={setShowHotelSearch}
                                        />
                                    </>
                                )}
                            </>
                            <S.DivListMainHeaderResult>
                                <S.DivListMainHeaderTitle>
                                    검색결과
                                </S.DivListMainHeaderTitle>
                            </S.DivListMainHeaderResult>
                            <S.DivLocalFrame1>
                                <S.DivLocalFrame2>
                                    <S.DivLocalSchduelBackground>
                                        <S.DivLocalFrame3>
                                            <S.DivLocalFrame4>
                                                <S.DivLocalDropDown
                                                    onClick={() =>
                                                        toggleHotelSearch({
                                                            지역,
                                                        })
                                                    }
                                                >
                                                    {지역}
                                                </S.DivLocalDropDown>
                                            </S.DivLocalFrame4>
                                            <S.DivLocalDropdownFrame>
                                                <S.DivSchdeulImage>
                                                    <FontAwesomeIcon
                                                        icon={faCaretDown}
                                                    />
                                                </S.DivSchdeulImage>
                                            </S.DivLocalDropdownFrame>
                                        </S.DivLocalFrame3>
                                        <S.DivSchdeulFrame1>
                                            <S.DivSchdeulFrame2>
                                                <S.DivSchdeulFrame3>
                                                    <S.DivSchdeul>
                                                        2024.05.21 ~ 2024.05.22
                                                    </S.DivSchdeul>
                                                </S.DivSchdeulFrame3>
                                                <S.DivSchdeulImageFrame1>
                                                    <S.DivSchdeulImageFrame2>
                                                        <S.ImageSchdeul src="/img/icon/calender.png" />
                                                    </S.DivSchdeulImageFrame2>
                                                </S.DivSchdeulImageFrame1>
                                            </S.DivSchdeulFrame2>
                                        </S.DivSchdeulFrame1>
                                    </S.DivLocalSchduelBackground>

                                    <S.DivPesonRoomContainer>
                                        <S.DivPersonRoomframe1>
                                            <S.DivPersonRoomImage>
                                                <S.ImagePersonRoom src="\img\icon\person.png" />
                                            </S.DivPersonRoomImage>
                                            <S.DivPersonRoom>
                                                <S.DivPersonRoomframe2>
                                                    <S.DivPersonRoomFont>
                                                        성인{성인}, 아동{아동},
                                                        객실{객실}
                                                    </S.DivPersonRoomFont>
                                                </S.DivPersonRoomframe2>
                                            </S.DivPersonRoom>
                                        </S.DivPersonRoomframe1>
                                    </S.DivPesonRoomContainer>
                                </S.DivLocalFrame2>

                                <S.DivShowMapContainer1>
                                    <S.DivShowMapImageFrame>
                                        <S.DivImageShowMap1>
                                            <FontAwesomeIcon
                                                icon={faMap}
                                                style={{ color: "#0fe69e" }}
                                                className="mapIcon"
                                            />
                                        </S.DivImageShowMap1>
                                    </S.DivShowMapImageFrame>
                                    <S.DivShowMapFontFrame>
                                        <S.DivShowMapFont>
                                            지도로보기
                                        </S.DivShowMapFont>
                                    </S.DivShowMapFontFrame>
                                </S.DivShowMapContainer1>

                                <S.DivListMiddleContainer>
                                    <S.DivRecommandFrame>
                                        <S.DivRecommand>추천순</S.DivRecommand>
                                    </S.DivRecommandFrame>
                                    <S.DivPriceFrame1>
                                        <S.DivPrice>가격순</S.DivPrice>
                                    </S.DivPriceFrame1>
                                    <S.DivRoomGradeFrame>
                                        <S.DivRoomGrade>성급순</S.DivRoomGrade>
                                    </S.DivRoomGradeFrame>
                                </S.DivListMiddleContainer>

                                <S.DivListCountTitleFrame>
                                    <S.DivListCountTitle1>
                                        총
                                    </S.DivListCountTitle1>
                                    <S.DivListCountTitle2>
                                        {hotels.length}개
                                    </S.DivListCountTitle2>
                                    <S.DivListCountTitle3>
                                        의 검색결과가 있습니다.
                                    </S.DivListCountTitle3>
                                </S.DivListCountTitleFrame>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <S.DivHotelInfoContainer1>
                                        {hotels.map((hotel) => (
                                            <ul>
                                                <li
                                                    style={{
                                                        marginBottom: "50px",
                                                        width: "900px",
                                                    }}
                                                >
                                                    <S.DivHotelInfoImageContainer
                                                        key={hotel.id}
                                                    >
                                                        <S.DivHotelInfoImageFrame>
                                                            <S.ImageHotelInfo
                                                                src={
                                                                    hotel.hotelpicture
                                                                }
                                                            />
                                                            <S.DivImageHotelInfo></S.DivImageHotelInfo>
                                                        </S.DivHotelInfoImageFrame>
                                                    </S.DivHotelInfoImageContainer>
                                                    <S.DivHotelInfoContainer2>
                                                        <S.DivHotelInfoFrame>
                                                            <S.DivHotelGrade>
                                                                <S.DivHotelGradeFont>
                                                                    {
                                                                        hotel.grade
                                                                    }
                                                                </S.DivHotelGradeFont>
                                                            </S.DivHotelGrade>
                                                            <S.DivHeartImageFrame>
                                                                <S.DivHeartImage>
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            heart1
                                                                                ? faSolidHeart
                                                                                : faRegularHeart
                                                                        }
                                                                        onChange={
                                                                            handleHeart1
                                                                        }
                                                                    />
                                                                </S.DivHeartImage>
                                                            </S.DivHeartImageFrame>
                                                        </S.DivHotelInfoFrame>
                                                        <S.DivHotelInfoNameContainer>
                                                            <S.DivHotelInfoNameFrame>
                                                                <S.DivHotelInfoName>
                                                                    {
                                                                        hotel.korName
                                                                    }
                                                                </S.DivHotelInfoName>
                                                            </S.DivHotelInfoNameFrame>
                                                        </S.DivHotelInfoNameContainer>
                                                        <S.DivHotelInfoEngNameContainer>
                                                            <S.DivHotelInfoEngNameFrame>
                                                                <S.DivHotelInfoEngName>
                                                                    {
                                                                        hotel.engName
                                                                    }
                                                                </S.DivHotelInfoEngName>
                                                            </S.DivHotelInfoEngNameFrame>
                                                        </S.DivHotelInfoEngNameContainer>
                                                        <S.DivHotelInfoAddrMargin>
                                                            <S.DivHotelInfoAddrContainer>
                                                                <S.DivHotelInfoAddrImageFrame>
                                                                    <S.DivHotelInfoAddrImage>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faLocationCrosshairs
                                                                            }
                                                                        />
                                                                    </S.DivHotelInfoAddrImage>
                                                                </S.DivHotelInfoAddrImageFrame>
                                                                <S.DivHotelInfoAddrFrame>
                                                                    <S.DivHotelInfoAddr>
                                                                        {
                                                                            hotel.address
                                                                        }
                                                                    </S.DivHotelInfoAddr>
                                                                </S.DivHotelInfoAddrFrame>
                                                            </S.DivHotelInfoAddrContainer>
                                                        </S.DivHotelInfoAddrMargin>

                                                        <S.DivShoWMapPriceMargin>
                                                            <S.DivShoWMapPriceMargin>
                                                                <S.DivShowMapContainer2>
                                                                    <S.DivImageShowMap2>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faMap
                                                                            }
                                                                            style={{
                                                                                color: "#0fe69e",
                                                                            }}
                                                                            className="mapIcon"
                                                                        />
                                                                    </S.DivImageShowMap2>
                                                                    <S.DivShowToMapFrame>
                                                                        <S.DivShowToMap>
                                                                            지도로보기
                                                                        </S.DivShowToMap>
                                                                    </S.DivShowToMapFrame>
                                                                </S.DivShowMapContainer2>

                                                                <S.DivPriceMargin>
                                                                    <S.DivPriceContainer>
                                                                        <S.DivPriceFrame2>
                                                                            <S.DivPriceFont>
                                                                                {
                                                                                    hotel.price
                                                                                }
                                                                            </S.DivPriceFont>
                                                                            <S.DivPriceWonFont>
                                                                                원
                                                                                ~
                                                                            </S.DivPriceWonFont>
                                                                        </S.DivPriceFrame2>
                                                                    </S.DivPriceContainer>
                                                                    <S.DivPriceNoticeFrame>
                                                                        <S.DivPriceNotice>
                                                                            (1박기준
                                                                            /
                                                                            세금봉사료
                                                                            포함)
                                                                        </S.DivPriceNotice>
                                                                    </S.DivPriceNoticeFrame>
                                                                </S.DivPriceMargin>
                                                            </S.DivShoWMapPriceMargin>
                                                        </S.DivShoWMapPriceMargin>
                                                    </S.DivHotelInfoContainer2>
                                                </li>
                                            </ul>
                                        ))}
                                    </S.DivHotelInfoContainer1>
                                </div>
                            </S.DivLocalFrame1>
                        </S.DivListMainHeader>
                    </S.DivListFrame>
                </S.DivListContainer>
            </ThemeProvider>
        </>
    );
};

export default List;
