import React from "react";
import classes from './Security.module.scss'
import lock from '../../img/svg/illustrationSecurity.svg'
import { useTranslation } from "react-i18next";

const Security = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.security}>
            <div className="g-container">
                <div className={classes.security__wrapper}>
                    <div className={classes.security__wrapper__block}>
                        <p className={classes.security__wrapper__block_title}>{t('security.title')}</p>
                        <p className={classes.security__wrapper__block_descr1}>{t('security.descr1')}</p>
                        <p className={classes.security__wrapper__block_descr1}>{t('security.descr2')}</p>
                        {/* <button className={classes.security__wrapper__block_btn}>Download app</button> */}
                    </div>
                    <img src={lock} alt="Lock and a key" className={classes.security__wrapper_icon}/>
                    <div className={classes.security__wrapper_blur1}/>
                    <div className={classes.security__wrapper_blur2}/>
                </div>
            </div>
        </div>
    )
}

export default Security