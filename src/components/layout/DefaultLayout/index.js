import Footer from "./Footer/footer"
import Header from "./Header/header"

const DefaultLayout = ({ children }) => {
    return (<>
        <Header />
        <div class="content"
            style={{
                minHeight: '550px'
            }}>
            {children}
        </div>
        <Footer />
    </>)
}
export default DefaultLayout;