import React from "react";
import S from "./style";

const data = [
    {
        id: 1,
        departure_img: "/img/picture/departure_jeju.png",
        airline: "대한항공",
        airline_icon: "/img/icon/KE.png",
        airline_price: "김포-> 제주 항공권 39,000원",
        airline_def_day: "5월 5일 출발",
        airline_hashtag: ["#대한항공", "#제주"],
    },
    {
        id: 2,
        departure_img: "/img/picture/departure_jeju2.png",
        airline: "제주항공",
        airline_icon: "/img/icon/7C.png",
        airline_price: "김포-> 제주 항공권 29,900원",
        airline_def_day: "5월 12일 출발",
        airline_hashtag: ["#대한항공", "#제주"],
    },
    {
        id: 3,
        departure_img: "/img/picture/depature_busan.png",
        airline: "아시아나",
        airline_icon: "/img/icon/OZ.png",
        airline_price: "김포-> 부산 항공권 39,900원",
        airline_def_day: "5월 8일 출발",
        airline_hashtag: ["#아시아나", "#부산"],
    },
    {
        id: 4,
        departure_img: "/img/picture/depature_busan.png",
        airline: "아시아나",
        airline_icon: "/img/icon/OZ.png",
        airline_price: "김포-> 부산 항공권 39,900원",
        airline_def_day: "5월 8일 출발",
        airline_hashtag: ["#아시아나", "#부산"],
    },
];

const AirWeekSaleComponent = () => {
    return (
        <S.List_Grop
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            {data.map((datas) => (
                <S.List_Grop_Div key={datas.id}>
                    <S.List_Group_Div_Img
                        src={datas.departure_img}
                        alt="departure"
                    />
                    <S.Frame_Div>
                        <S.List_Group_Heading_Div>
                            {datas.airline}{" "}
                            <img
                                src={datas.airline_icon}
                                alt="airline icon"
                                style={{ maxWidth: "50px" }}
                            />
                        </S.List_Group_Heading_Div>

                        <S.List_Group_Price_Date>
                            <S.List_Group_Price_Date_Font1>
                                {datas.airline_price}
                            </S.List_Group_Price_Date_Font1>
                        </S.List_Group_Price_Date>

                        <S.List_Group_Heading_Div2>
                            <S.List_Group_Price_Date>
                                <S.List_Group_Price_Date_Font2>
                                    {datas.airline_def_day}
                                </S.List_Group_Price_Date_Font2>
                            </S.List_Group_Price_Date>
                        </S.List_Group_Heading_Div2>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px",
                            }}
                        >
                            {datas.airline_hashtag.map((tags, i) => (
                                <S.HachTag key={i}>
                                    <S.HachTagFont>{tags}</S.HachTagFont>
                                </S.HachTag>
                            ))}
                        </div>
                    </S.Frame_Div>
                </S.List_Grop_Div>
            ))}
        </S.List_Grop>
    );
};

export default AirWeekSaleComponent;
