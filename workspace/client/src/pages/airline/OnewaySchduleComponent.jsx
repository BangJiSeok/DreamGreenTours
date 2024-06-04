import React, { useState } from "react";
import S from "./style";
import AirCalendar from "./AirCalendar";

const OnewaySchduleComponent = () => {
    const today = new Date();
    const formattedToday = formatDate(today);

    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(formattedToday);

    const handleButtonClick = () => {
        setCalendarVisible(true);
    };

    return (
        <S.DivSchdule>
            <S.CalendarIconButton>
                <S.DivSchduleStartDay2 onClick={handleButtonClick}>
                    {selectedDate}
                </S.DivSchduleStartDay2>
            </S.CalendarIconButton>
            <>
                {isCalendarVisible && <AirCalendar />}
            </>
        </S.DivSchdule>
    );
};

const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", weekday: "short" };
    const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(
        date
    );
    return formattedDate.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};

export default OnewaySchduleComponent;
