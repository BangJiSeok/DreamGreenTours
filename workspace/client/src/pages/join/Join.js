import React, { useEffect, useState } from "react";
import S from "./style";
import {
  faArrowLeft,
  faHome,
  faCheckCircle as solidCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as regularCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(-1);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  const handleApprovePage = () => {
    if (essential1 && essential2 && essential3) {
      navigate("/register");
    }
  };

  const [allChecked, setAllChecked] = useState(false);
  const [essential1, setEssential1] = useState(false);
  const [essential2, setEssential2] = useState(false);
  const [essential3, setEssential3] = useState(false);
  const [choice1, setChoice1] = useState(false);
  const [choice2, setChoice2] = useState(false);
  const [choice3, setChoice3] = useState(false);

  useEffect(() => {
    const allCheckBox = [
      essential1,
      essential2,
      essential3,
      choice1,
      choice2,
      choice3,
    ];
    setAllChecked(allCheckBox.every((check) => check));
  }, [essential1, essential2, essential3, choice1, choice2, choice3]);

  const handleAllCheckbox = () => {
    setAllChecked(!allChecked);
    setEssential1(!allChecked);
    setEssential2(!allChecked);
    setEssential3(!allChecked);
    setChoice1(!allChecked);
    setChoice2(!allChecked);
    setChoice3(!allChecked);
  };
  const handleCheckbox1 = () => {
    setEssential1(!essential1);
  };
  const handleCheckbox2 = () => {
    setEssential2(!essential2);
  };
  const handleCheckbox3 = () => {
    setEssential3(!essential3);
  };
  const handleCheckbox4 = () => {
    setChoice1(!choice1);
  };
  const handleCheckbox5 = () => {
    setChoice2(!choice2);
  };
  const handleCheckbox6 = () => {
    setChoice3(!choice3);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="icon"
              onClick={handlePage}
            />
            <S.Join>약관동의</S.Join>
          </S.Title>
          <S.Home>
            <FontAwesomeIcon
              icon={faHome}
              className="icon"
              onClick={handleHomePage}
            />
          </S.Home>
        </S.TitleWrapper>
        <S.SubTitle>약관내용에 먼저 동의해 주세요.</S.SubTitle>
        <S.AllCheck>
          <S.AllCheckBox onChange={handleAllCheckbox} checked={allChecked} />
          <FontAwesomeIcon
            icon={allChecked ? solidCheckCircle : regularCheckCircle}
            className="icon"
          />
          <S.AllText>전체 동의</S.AllText>
        </S.AllCheck>
        <S.CheckList>
          <S.Check>
            <S.CheckBox onChange={handleCheckbox1} checked={essential1} />
            <FontAwesomeIcon
              icon={essential1 ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>(필수) DreamGreenTour 이용약관 동의</S.CheckText>
          </S.Check>
          <S.Check>
            <S.CheckBox onChange={handleCheckbox2} checked={essential2} />
            <FontAwesomeIcon
              icon={essential2 ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>(필수) 개인정보 수집 및 이용에 대한 동의</S.CheckText>
          </S.Check>
          <S.Check>
            <S.CheckBox onChange={handleCheckbox3} checked={essential3} />
            <FontAwesomeIcon
              icon={essential3 ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>(필수) 개인정보 제3자 제공에 대한 동의</S.CheckText>
          </S.Check>
          <S.Check>
            <S.CheckBox onChange={handleCheckbox4} checked={choice1} />
            <FontAwesomeIcon
              icon={choice1 ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>(선택) 위치기반서비스 이용약관 동의</S.CheckText>
          </S.Check>
          <S.Check>
            <S.CheckBox onChange={handleCheckbox5} checked={choice2} />
            <FontAwesomeIcon
              icon={choice2 ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>(선택) 마케팅 활용 동의</S.CheckText>
          </S.Check>
          <S.Check>
            <S.CheckBox onChange={handleCheckbox6} checked={choice3} />
            <FontAwesomeIcon
              icon={choice3 ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>(선택) 마케팅목적 제3자 제공에 대한 동의</S.CheckText>
          </S.Check>
        </S.CheckList>
        <S.Button onClick={handleApprovePage}>다음</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Join;
