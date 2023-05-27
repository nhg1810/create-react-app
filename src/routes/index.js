import Follow from "../pages/following"
import Home from "../pages/home"
import Intro from "../pages/intro"

const publicRoutes = [
    { path: '/', component: Intro },
    { path: '/all-sources', component: Home },
    { path: '/following', component: Follow }
]
const privateRoutes = []
export { privateRoutes, publicRoutes }