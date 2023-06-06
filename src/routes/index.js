import Follow from "../pages/following"
import Home from "../pages/home"
import Intro from "../pages/intro"
import Login from "../pages/login"
import LoginLayout from '../components/layout/LoginLayout'
import Register from "../pages/register"
import Blog from "../pages/blog"
import About from "../pages/about"
import Construct from "../pages/construct-source"
import Contact from '../pages/contact'
import DetailSource from'../pages/detail-source'
import DetailConstructSource from'../pages/detail-construct-source'
import DetailBlog from'../pages/detail-blog'





const publicRoutes = [
    { path: '/', component: Intro },
    { path: '/all-sources', component: Home },
    { path: '/following', component: Follow },
    { path: '/construct-source', component: Construct },
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/sign-up', component: Register, layout: LoginLayout },
    { path: '/blog', component: Blog },
    { path: '/about', component: About },
    { path: '/detail-source', component: DetailSource },
    { path: '/detail-construct-source', component: DetailConstructSource },
    { path: '/detail-blog', component: DetailBlog },


    { path: '/contact', component: Contact }

]
const privateRoutes = []
export { privateRoutes, publicRoutes }