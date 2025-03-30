import React from "react";
import { useNavigate } from "react-router";

const MainComponenet = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>메인 컴포넌트입니다!</h1>
            <button onClick={() => navigate("/page1")}>페이지1으로 이동합니다.</button>
            <button onClick={() => navigate("/page2")}>페이지2으로 이동합니다.</button>

        </>
    )

}
export default MainComponenet;