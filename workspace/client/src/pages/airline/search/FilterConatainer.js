import React from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRotateRight,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const FilterConatainer = () => {
    return (
        <>
            <S.DivFilterHeader>
                <S.DivResultInSearch>결과 내 검색</S.DivResultInSearch>
                <S.DivInitializationFrame>
                    <S.DivInitializationImage>
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                    </S.DivInitializationImage>
                    <S.DivInitiakuzationFont>초기화</S.DivInitiakuzationFont>
                    <S.ButtonAllClose>모두닫힘</S.ButtonAllClose>
                </S.DivInitializationFrame>
            </S.DivFilterHeader>

            <S.DivWholeFrame>
                <S.DivWholeTitleTogleFrame>
                    <S.DivWholeTitle>전체</S.DivWholeTitle>
                    <S.DivActiveTogle>
                        <S.DivActiveTogleCircle></S.DivActiveTogleCircle>
                    </S.DivActiveTogle>
                </S.DivWholeTitleTogleFrame>

                <S.DivDirectCountFrame>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                </S.DivDirectCountFrame>
            </S.DivWholeFrame>
        </>
    );
};

export default FilterConatainer;
