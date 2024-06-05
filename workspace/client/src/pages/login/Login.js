import React, { useState } from "react";
import S from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle as solidCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as regularCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../modules/actions.js"; // 사용자 상태 설정 액션 임포트

const Login = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const handlePage = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        credentials: "include",
      });

      const result = await response.json();
      console.log(result); // 서버 응답을 콘솔에 출력

      if (result.success && result.user) {
        dispatch(setUser(result.user)); // 사용자 정보 설정
        navigate("/"); // 홈 페이지로 리디렉션
      } else {
        alert(result.message || "로그인 도중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error("로그인 도중 에러가 발생했습니다:", error);
      alert("로그인 도중 에러가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="icon"
            onClick={handlePage}
          />
          <S.Login>로그인</S.Login>
        </S.Title>
        <S.Logo>
          <S.LogoTitle>DreamGreenTour</S.LogoTitle>
        </S.Logo>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input>
            <S.Email
              type="text"
              placeholder="아이디(이메일계정)"
              id="email"
              {...register("email", { required: true })}
            />

            <S.Password
              type="password"
              placeholder="비밀번호"
              id="password"
              {...register("password", { required: true })}
            />
          </S.Input>
          {errors?.email?.type === "required" && (
            <S.Warning>아이디를 입력해주세요.</S.Warning>
          )}
          {errors?.password?.type === "required" && (
            <S.Warning>비밀번호를 입력해주세요.</S.Warning>
          )}
          <S.StoreEmail>
            <S.HiddenCheckBox onChange={handleCheckbox} />
            <S.CheckBox>
              <FontAwesomeIcon
                icon={checked ? solidCheckCircle : regularCheckCircle}
                className="icon"
              />
              <S.CheckText>아이디 저장</S.CheckText>
            </S.CheckBox>
          </S.StoreEmail>
          <S.BtnWrapper>
            <S.LoginBtn type="submit">로그인</S.LoginBtn>
          </S.BtnWrapper>
        </S.Form>
        <S.SearchWrapper>
          <S.Search>
            <S.SearchEmail>아이디 찾기 |</S.SearchEmail>
            <span> 비밀번호 찾기</span>
          </S.Search>
          <Link to={"/join"} className="join">
            회원가입
          </Link>
        </S.SearchWrapper>
        <S.EasyLoginWrapper>
          <div>간편하게 로그인하기</div>
          <div>
            <S.Naver></S.Naver>
            <S.Kakao></S.Kakao>
            <S.Apple></S.Apple>
          </div>
        </S.EasyLoginWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
