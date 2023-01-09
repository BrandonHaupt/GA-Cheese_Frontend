import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"

import App from "./App"
import { cheeseLoader, cheesesLoader } from "./loader"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction } from "./actions"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={cheeseLoader}/>
            <Route path=":id" element={<Show/>} loader={cheesesLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    )
)

export default router