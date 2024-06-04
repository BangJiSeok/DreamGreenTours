import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Theme from "../pages/theme/Theme";
import Tour from "../pages/tour/Tour";
import Loading from "../pages/loading/Loading";
import Mypage from "../pages/mypage/Mypage";
import TourSchedule from "../pages/mypage/tourSchedule/TourSchedule";
import InfoUpdate from "../pages/mypage/infoUpdate/InfoUpdate";
import Review from "../pages/review/Review";
import Airline from "../pages/airline/Airline";
import Search from "../pages/airline/search/Search";
import Booking from "../pages/airline/booking/Booking";
import Terms from "../pages/airline/terms/Terms";
import Payment from "../pages/airline/payment/Payment";
import Hotel from "../pages/hotel/Hotel";
import HSearch from "../pages/hotel/search/HSearch";
import List from "../pages/hotel/list/List";
import HBooking from "../pages/hotel/booking/HBooking";
import HTerms from "../pages/hotel/terms/HTerms";
import HPayment from "../pages/hotel/payment/HPayment";
import Recommend from "../pages/theme/recommend/Recommend";
import Join from "../pages/join/Join";
import Seoul from "../pages/review/detail/Seoul";
import KangWon from "../pages/review/detail/KangWon";
import Jeonla from "../pages/review/detail/Jeonla";
import Gyeongsang from "../pages/review/detail/Gyeongsang";
import GyeongGi from "../pages/review/detail/GyeongGi";
import ChungCheong from "../pages/review/detail/ChungCheong";
import Jeju from "../pages/review/detail/Jeju";
import Write from "../pages/review/write/Write";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/tour",
                element: <Tour />,
            },
            {
                path: "/loading",
                element: <Loading />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/join",
        element: <Join />,
    },
    {
        path: "/mypage",
        element: <Mypage />,
        children: [
            {
                path: "/mypage/tourSchedule",
                element: <TourSchedule />,
            },
            {
                path: "/mypage/infoUpdate",
                element: <InfoUpdate />,
            },
        ],
    },
    {
        path: "/review",
        element: <Review />,
        children: [
            {
                path: "/review/Seoul",
                element: <Seoul />,
            },
            {
                path: "/review/KangWon",
                element: <KangWon />,
            },
            {
                path: "/review/Jeonla",
                element: <Jeonla />,
            },
            {
                path: "/review/Gyeongsang",
                element: <Gyeongsang />,
            },
            {
                path: "/review/GyeongGi",
                element: <GyeongGi />,
            },
            {
                path: "/review/ChungCheong",
                element: <ChungCheong />,
            },
            {
                path: "/review/Jeju",
                element: <Jeju />,
            },
        ],
    },
    {
        path: "/write",
        element: <Write />,
    },
    {
        path: "/hotel",
        element: <Hotel />,
    },
    {
        path: "/hotel/search",
        element: <HSearch />,
    },
    {
        path: "/hotel/list",
        element: <List />,
    },
    {
        path: "/hotel/booking",
        element: <HBooking />,
    },
    {
        path: "/hotel/terms",
        element: <HTerms />,
    },
    {
        path: "/hotel/payment",
        element: <HPayment />,
    },
    {
        path: "/airline",
        element: <Airline />,
    },
    {
        path: "/theme",
        element: <Theme />,
    },
    {
        path: "/airline/search",
        element: <Search />,
    },
    {
        path: "/airline/booking",
        element: <Booking />,
    },
    {
        path: "/airline/terms",
        element: <Terms />,
    },
    {
        path: "/airline/payment",
        element: <Payment />,
    },
    { path: "/recommend/:id", element: <Recommend /> },
]);

export default router;
