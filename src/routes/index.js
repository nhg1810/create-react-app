import Follow from "../pages/following"
import Home from "../pages/home"
import Intro from "../pages/intro"
import Login from "../pages/login"
import LoginLayout from '../components/layout/LoginLayout'
import Register from "../pages/register"


const publicRoutes = [
    { path: '/', component: Intro },
    { path: '/all-sources', component: Home },
    { path: '/following', component: Follow },
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/sign-up', component: Register, layout: LoginLayout }

]
const privateRoutes = []
export { privateRoutes, publicRoutes }