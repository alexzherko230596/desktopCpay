import React from "react";
import classes from './DownloadApp.module.scss'
import mockUp from '../../img/svg/mockUp.svg'
import ios from '../../img/svg/appStore.svg'
import android from '../../img/svg/gogglePlay.svg'

const DownloadApp = () => {
    return(
        <div className={classes.download}>
            <div className="g-container">
                <div className={classes.download__wrapper}>
                    <img src={mockUp} alt='mockup' className={classes.download__wrapper_icon}/>
                    <div className={classes.download__wrapper__block}>
                        <p className={classes.download__wrapper__block_title}><span>Install</span> once <br/>Enjoy forever</p>
                        <p className={classes.download__wrapper__block_descr}>Highly secure and innovative solution for storing, receiving, sending and exchanging money</p>
                        <div className={classes.download__wrapper__block__buttons}>
                            <img src={ios} alt='App store' className={classes.download__wrapper__block__buttons_ios}/>
                            <img src={android} alt='Google play' className={classes.download__wrapper__block__buttons_android}/>
                        </div>
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