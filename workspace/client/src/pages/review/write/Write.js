import React from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

const Write = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/review/Seoul");
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
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="icon"
          onClick={handlePage}
        />
        <S.Title>후기 작성 페이지</S.Title>
        <S.Form
          onSubmit={handleSubmit(async (formData) => {
            console.log(formData);
            try {
              const response = await fetch("http://localhost:8000/write", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  location: formData.location,
                  text: formData.text,
                  heart: 0,
                }),
                credentials: "include",
              });

              if (!response.ok) {
                throw new Error("후기 작성이 실패했습니다.");
              }

              const data = await response.text();
              console.log(data);
              handlePage();
            } catch (error) {
              console.error("후기 작성 중 오류가 발생했습니다:", error);
            }
          })}
        >
          <S.Location
            id="location"
            placeholder="후기를 작성할 지역을 입력하세요."
            {...register("location", {
              required: true,
            })}
          />
          {errors?.location?.type === "required" && (
            <S.Warning>후기를 작성할 지역을 입력해주세요.</S.Warning>
          )}
          <S.Text
            id="text"
            placeholder="후기 내용을 작성해주세요."
            {...register("text", {
              required: true,
            })}
          />
          {errors?.text?.type === "required" && (
            <S.Warning>후기 내용을 작성해주세요.</S.Warning>
          )}
          <S.Button type="submit" disabled={isSubmitting}>
            작성 완료
          </S.Button>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default Write;
