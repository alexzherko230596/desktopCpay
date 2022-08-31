import Application from '../../components/Application/Application'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
import EasyAccess from '../../components/EasyAccess/EasyAccess'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainPage from '../../components/MainPage/MainPage'
import Security from '../../components/Security/Security'
import StartUsage from '../../components/StartUsage/StartUsage'
import WhyUs from '../../components/WhyUs/WhyUs'

function HomePage() {
    return(
        <div className="g-wrapperScreens">
            <Header />
            <MainPage />
            <StartUsage />
            {/* <EasyAccess /> */}
            <Application />
            <WhyUs />
            <Security />
            <DownloadApp />
            <Footer />
        </div>
    )
}

export default HomePage