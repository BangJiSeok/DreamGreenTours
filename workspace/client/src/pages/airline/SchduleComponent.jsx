import React, { useState } from "react";
import S from "./style";
import AirCalendar from "./AirCalendar";
import { addDays, format, parse } from "date-fns";
import { ko } from "date-fns/locale";

const SchduleComponent = () => {
    const today = new Date();
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(addDays(today, 3));
    const [selectingStartDate, setSelectingStartDate] = useState(true);

    const handleButtonClick = (type) => {
        setSelectingStartDate(type === "start");
        setCalendarVisible(true);
    };

    const handleSelect = (date) => {
        if (selectingStartDate) {
            setStartDate(date);
            setSelectingStartDate(false);
        } else {
            setEndDate(date);
            setCalendarVisible(false); // 선택 완료 후 캘린더 닫기
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const date = parse(value, "MM.dd(eee)", new Date());
        if (name === "startDate") {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    };

    const formatDate = (date) => {
        return date ? format(date, "MM.dd(eee)", { locale: ko }) : "";
    };

    return (
        <S.DivSchdule>
            <S.DivSchduleStartButton>
                <S.DivSchduleStartDay1
                    type="text"
                    name="startDate"
                    value={formatDate(startDate)}
                    onClick={() => handleButtonClick("start")}
                    onChange={handleInputChange}
                    placeholder="가는날 선택"
                />
            </S.DivSchduleStartButton>
            <S.CalendarIconButton>
                <S.CalendarIconSpan>
                    <S.CalendarIconDiv>
                        <S.CalendarIconImage src="/img/icon/calender.png" />
                    </S.CalendarIconDiv>
                </S.CalendarIconSpan>
            </S.CalendarIconButton>
            <S.DivSchduleLastButton onClick={() => handleButtonClick("end")}>
                <S.DivSchduleLastDay>{formatDate(endDate)}</S.DivSchduleLastDay>
            </S.DivSchduleLastButton>
            {isCalendarVisible && <AirCalendar onSelect={handleSelect} />}
        </S.DivSchdule>
    );
};

export default SchduleComponent;
