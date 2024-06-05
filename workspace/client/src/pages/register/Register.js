import React, { useState } from "react";
import S from "./style";
import {
  faArrowLeft,
  faHome,
  faCheckCircle as solidCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as regularCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(-1);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  // 남, 여 클릭상태 유지
  const [manFocus, setManFocus] = useState(false);
  const [womanFocus, setWomanFocus] = useState(false);

  const [gender, setGender] = useState("");

  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    console.log(checked);
    setChecked(!checked);
  };

  const handleManFocus = () => {
    setManFocus(true);
    setWomanFocus(false);
    setGender("남");
    console.log(gender);
  };
  const handleWomanFocus = () => {
    setWomanFocus(true);
    setManFocus(false);
    setGender("여");
    console.log(gender);
  };

  // 회원가입 훅 폼
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ mode: "onChange" });

  // 정규식 패턴
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const birthRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/;

  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;

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
            <S.Register>정보입력</S.Register>
          </S.Title>
          <S.Home>
            <FontAwesomeIcon
              icon={faHome}
              className="icon"
              onClick={handleHomePage}
            />
          </S.Home>
        </S.TitleWrapper>
        <S.SubTitle>거의 다 왔어요! 고객님의 정보를 입력해주세요.</S.SubTitle>
        <S.SubExplanation>
          DreamGreenTour는 고객님의 정보를 안전하게 관리합니다.
        </S.SubExplanation>
        <S.RegisterWrapper>
          <S.Form
            onSubmit={handleSubmit(async (formData) => {
              console.log(formData);
              try {
                const response = await fetch("http://localhost:3000/register", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    gender: gender,
                    birth: formData.birth,
                    phoneNum: formData.phoneNum,
                    password: formData.password,
                    foreign: formData.foreign,
                  }),
                  credentials: "include",
                });

                if (!response.ok) {
                  throw new Error("회원가입 요청이 실패했습니다.");
                }

                const data = await response.text();
                console.log(data);
                handleHomePage();
              } catch (error) {
                console.error("회원가입 요청 중 오류가 발생했습니다:", error);
              }
            })}
          >
            <S.InputWrapper>
              <S.Input
                type="text"
                id="email"
                name="email"
                placeholder="아이디(이메일계정)"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: emailRegex,
                  },
                })}
              />
            </S.InputWrapper>
            {errors?.email?.type === "required" && (
              <S.Warning>이메일을 입력해주세요.</S.Warning>
            )}
            {errors?.email?.type === "pattern" && (
              <S.Warning>이메일을 양식에 맞게 입력해주세요.</S.Warning>
            )}

            <S.InputWrapper>
              <S.NameInput
                type="text"
                id="name"
                name="name"
                placeholder="이름"
                {...register("name", {
                  required: true,
                })}
              />

              <S.ManBtn
                style={{ color: manFocus ? "green" : "black" }}
                onClick={handleManFocus}
                className="gender"
                // id="gender"
                // value="남"
              >
                남
              </S.ManBtn>
              <S.WomanBtn
                style={{ color: womanFocus ? "green" : "black" }}
                onClick={handleWomanFocus}
                className="gender"
                // id="gender"
                // value="여"
              >
                여
              </S.WomanBtn>
              <S.HiddenGender
                id="gender"
                name="gender"
                value={gender}
                {...register("gender")}
              />
            </S.InputWrapper>
            {errors?.name?.type === "required" && (
              <S.Warning>이름을 입력해주세요.</S.Warning>
            )}

            <S.InputWrapper>
              <S.Input
                placeholder="생년월일(yyyy-mm-dd)"
                id="birth"
                name="birth"
                {...register("birth", {
                  required: true,
                  pattern: {
                    value: birthRegex,
                  },
                })}
              />
            </S.InputWrapper>
            {errors?.birth?.type === "required" && (
              <S.Warning>생년월일을 입력해주세요.</S.Warning>
            )}
            {errors?.birth?.type === "pattern" && (
              <S.Warning>생년월일 양식에 맞게 입력해주세요.</S.Warning>
            )}
            <S.InputWrapper>
              <S.PhoneInput
                placeholder="휴대폰 번호"
                id="phoneNum"
                name="phoneNum"
                {...register("phoneNum", {
                  required: true,
                  pattern: {
                    value: phoneRegex,
                  },
                })}
              />

              <S.CheckBox>
                <S.HiddenCheckBox
                  onClick={handleCheckbox}
                  checked={checked}
                  id="foreign"
                  name="foreign"
                  value={checked}
                  {...register("foreign")}
                />
                <FontAwesomeIcon
                  icon={checked ? solidCheckCircle : regularCheckCircle}
                  className="icon"
                />
                <S.CheckText>외국인</S.CheckText>
              </S.CheckBox>
            </S.InputWrapper>
            {errors?.phoneNum?.type === "required" && (
              <S.Warning>휴대폰 번호를 입력해주세요.</S.Warning>
            )}
            {errors?.phoneNum?.type === "pattern" && (
              <S.Warning>휴대폰 번호 양식에 맞게 입력해주세요.</S.Warning>
            )}

            <S.InputWrapper>
              <S.Input
                placeholder="비밀번호"
                id="password"
                name="password"
                type="password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: passwordRegex,
                  },
                })}
              />
            </S.InputWrapper>
            {errors?.password?.type === "required" && (
              <S.Warning>비밀번호 입력해주세요.</S.Warning>
            )}
            {errors?.password?.type === "pattern" && (
              <S.Warning>
                소문자, 숫자, 특수문자 각 하나씩 포함한 8자리 이상의 패스워드를
                만들어주세요.
              </S.Warning>
            )}

            <S.InputWrapper>
              <S.Input
                placeholder="비밀번호 확인"
                id="rePassword"
                name="rePassword"
                type="password"
                {...register("rePassword", {
                  required: true,
                  validate: {
                    matchPassword: (value) => {
                      const { password } = getValues();
                      console.log(value, password, password === value);
                      return password === value;
                    },
                  },
                })}
              />
            </S.InputWrapper>
            {errors?.rePassword && (
              <S.Warning>비밀번호를 확인해주세요.</S.Warning>
            )}
            <S.Button type="submit" disabled={isSubmitting}>
              다음
            </S.Button>
          </S.Form>
        </S.RegisterWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
