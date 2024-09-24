import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "@/shared/lib/routes.ts";
import {Home} from "@/pages/home";
import {Chat} from "@/pages/chat";

function App() {
    return (
        <article className={'w-screen overflow-y-scroll bg-[#2B2B28] font-raleway'}>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.CHAT} element={<Chat/>}/>
                <Route path={"/"} element={<Navigate to={ROUTES.HOME}/>}/>
            </Routes>
        </article>
    )
}

export default App
