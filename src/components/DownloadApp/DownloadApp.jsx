import React from "react";
import classes from './DownloadApp.module.scss'
import mockUp from '../../img/svg/mockUp.svg'
import ios from '../../img/svg/appStore.svg'
import android from '../../img/svg/gogglePlay.svg'
import { useTranslation } from "react-i18next";
import InputForm from "../InputForm/InputForm";

const DownloadApp = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.download}>
            <div className="g-container">
                <div className={classes.download__wrapper}>
                    <img src={mockUp} alt='mockup' className={classes.download__wrapper_icon}/>
                    <div className={classes.download__wrapper__block}>
                        <p className={classes.download__wrapper__block_title}>{t('downloadApp.title1')}</p>
                        <p className={classes.download__wrapper__block_descr}>{t('downloadApp.descr')}</p>
                        {/* <div className={classes.download__wrapper__block__buttons}>
                            <img src={ios} alt='App store' className={classes.download__wrapper__block__buttons_ios}/>
                            <img src={android} alt='Google play' className={classes.download__wrapper__block__buttons_android}/>
                        </div> */}
                        <InputForm />
                    </div>
                    <div className={classes.download__wrapper_blur1}/>
                    <div className={classes.download__wrapper_blur2}/>
                    <div className={classes.download__wrapper_blur3}/>
                    <div className={classes.download__wrapper_blur4}/>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp