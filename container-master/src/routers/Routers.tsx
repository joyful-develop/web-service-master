import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";

const MainComponenet = lazy(() => import("../components/MainComponent"));
const Page1Component = lazy(() => import("../components/Page1Component"));
const Page2Component = lazy(() => import("../components/Page2Component"));

const Routers = (props: any) => {
    return (
        <Suspense fallback={<></>}>

            <Routes>
                <Route path='/' element={<Navigate replace to='/main' {...props} />} />
                <Route path='main' element={<MainComponenet {...props} />} />
                <Route path='page1' element={<Page1Component {...props} />} />
                <Route path='page2' element={<Page2Component {...props} />} />
            </Routes>
        </Suspense>
    )

}
export default Routers;