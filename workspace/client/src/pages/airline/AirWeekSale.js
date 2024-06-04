import React from "react";
import S from "./style";
import AirWeekSaleComponent from "./AirWeekSaleComponent";

 
const AirWeekSale = () => {
    return (
        <S.AirWeekSaleDiv>
            <S.AirWeekTitleDiv>
                <S.AirWeekSaleTitle>
                    이 주의 국내 항공사 특가 🛫
                </S.AirWeekSaleTitle>
            </S.AirWeekTitleDiv>


            <AirWeekSaleComponent/>

        </S.AirWeekSaleDiv>
    );
};

export default AirWeekSale;
