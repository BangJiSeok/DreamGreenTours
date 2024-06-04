import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import S from "./style";

const AirCalendar = ({ onSelect }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);

    const handleSelect = (date) => {
        setSelectedDate(date);
        onSelect(date);
    };

    return (
        <S.CalendarContainer>
            <DayPicker
                showOutsideDays
                locale={ko}
                numberOfMonths={2}
                selected={selectedDate}
                onSelect={handleSelect}
            />
        </S.CalendarContainer>
    );
};

export default AirCalendar;
