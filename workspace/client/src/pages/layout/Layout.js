import React from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPreviousUrl } from "../../modules/pageControl";
import { logoutUser } from "../../modules/actions";

const Layout = ({ isUse = false }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname + location.search;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  console.log(path);
  dispatch(setPreviousUrl(path));

  const handleHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.List>
          {user ? (
            <S.Welcome>
              <Link to={"/mypage"}>
                <FontAwesomeIcon icon={faUser} className="userIcon" />
                {user.name}님 환영합니다.
              </Link>
              <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
            </S.Welcome>
          ) : (
            <>
              <S.Login>
                <Link to={"/login"}>로그인</Link>
              </S.Login>
              <S.Register>
                <Link to={"/join"}>회원가입</Link>
              </S.Register>
            </>
          )}
        </S.List>
      </S.LoginWrapper>

      <S.LogoWrapper>
        <S.Search>
          <S.Logo onClick={handleHome}>DreamGreenTour</S.Logo>
          <S.SearchInput>
            <S.Input type="text" placeholder="검색어를 입력해 주세요" />
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </S.SearchInput>
        </S.Search>
      </S.LogoWrapper>

      <S.MenuWrapper>
        <S.Menu>
          <FontAwesomeIcon icon={faBars} className="icon" />
          전체메뉴
        </S.Menu>
        <Link to={"/tour"}>여행</Link>
        <Link to={"/review/Seoul"}>후기</Link>
        <Link to={"/theme"}>테마</Link>
        <Link to={"/airline"}>항공/숙박</Link>
      </S.MenuWrapper>

      {!isUse && <Outlet />}
    </S.Wrapper>
  );
};

export default Layout;
