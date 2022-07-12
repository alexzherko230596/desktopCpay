import React from "react";
import classes from './MainPage.module.scss'
import phone from '../../img/svg/mainPhone.svg'
import ios from '../../img/svg/appStore.svg'
import android from '../../img/svg/gogglePlay.svg'

const MainPage = () => {
    return(
        <div className={classes.mainPage}>
            <div className='g-container'>
                <div className={classes.mainPage__wrapper}>
                    <div className={classes.mainPage__wrapper__mainText}>
                        <div className={classes.mainPage__wrapper__mainText_label}>
                            Multicurrency wallet
                        </div>
                        <h1 className={classes.mainPage__wrapper__mainText_h1}>New 2 in 1 app for crypto and fiat transfers</h1>
                        <div className={classes.mainPage__wrapper__mainText_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo mattis aliquet lorem lectus sapien vestibulum sed.</div>
                        <div className={classes.mainPage__wrapper__mainText__buttons}>
                            <img src={ios} alt="App store" className={classes.mainPage__wrapper__mainText__buttons_ios}/>
                            <img src={android} alt="Google play" className={classes.mainPage__wrapper__mainText__buttons_android}/>
                        </div>
                    </div>
                    <img src={phone} alt="Home screen application" className={classes.mainPage__wrapper_icon}/>
                    <div className={classes.mainPage__wrapper_blur1}/>
                    <div className={classes.mainPage__wrapper_blur2}/>
                    <div className={classes.mainPage__wrapper_blur3}/>
                    <div className={classes.mainPage__wrapper_blur4}/>
                    <div className={classes.mainPage__wrapper_blur5}/>
                    <div className={classes.mainPage__wrapper_blur6}/>
                    <div className={classes.mainPage__wrapper_blur7}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage