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
                        <p className={classes.download__wrapper__block_title}>Lorem ipsum<br/>dolor sit amet</p>
                        <p className={classes.download__wrapper__block_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum et nunc dui velit velit dui congue pretium. Quis feugiat eu, nibh venenatis. Et nulla dictum ut eget</p>
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