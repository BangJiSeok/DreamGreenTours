import React, { useState } from "react";
import S from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheckCircle as solidCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as regularCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  // 아이디 저장 체크 이미지 변환 로직
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };
  // 이전 페이지로 가기 위한 로직
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(-1);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ mode: "onChange" });

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

        <S.Form
          onSubmit={handleSubmit(async (data) => {
            await fetch("http://localhost:8000/login", {
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
            handleHomePage();
          })}
        >
          <S.Input>
            <S.Email
              type="text"
              placeholder="아이디(이메일계정)"
              id="email"
              {...register("email", {
                required: true,
              })}
            />

            <S.Password
              type="password"
              placeholder="비밀번호"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
          </S.Input>
          {errors?.email?.type === "required" && (
            <S.Warning>아이디를 입력해주세요.</S.Warning>
          )}
          {errors?.password?.type === "required" && (
            <S.Warning>비밀번호 입력해주세요.</S.Warning>
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
            <S.LoginBtn type="submit" disabled={isSubmitting}>
              로그인
            </S.LoginBtn>
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
