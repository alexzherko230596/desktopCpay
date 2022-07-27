import React from "react";
import classes from './Footer.module.scss'
import logo from '../../img/svg/logo.svg'

const Footer = () => {
    return(
        <div className={classes.footer}>
            <div className="g-container">
                <div className={classes.footer__wrapper}>
                    <div className={classes.footer__wrapper__desktop}>
                        <img src={logo} alt="Cpay 24" className={classes.footer__wrapper_icon}/>
                        <div className={classes.footer__wrapper__block}>
                            <div className={classes.footer__wrapper__block__info}>
                                <p className={classes.footer__wrapper__block__info_title}>Information</p>
                                <p className={classes.footer__wrapper__block__info_descr}>Lorem ipsum dolor sit</p>
                                <p className={classes.footer__wrapper__block__info_descr}>Lorem ipsum dolor sit consectetur</p>
                            </div>
                            <div className={classes.footer__wrapper__block__info}>
                                <p className={classes.footer__wrapper__block__info_title}>Privacy policy</p>
                                <p className={classes.footer__wrapper__block__info_descr}>Lorem ipsum dolor consectetur</p>
                                <p className={classes.footer__wrapper__block__info_descr}>Lorem ipsum dolor sit</p>
                            </div>
                            <div className={classes.footer__wrapper__block__info}>
                                <p className={classes.footer__wrapper__block__info_title}>Application</p>
                                <p className={classes.footer__wrapper__block__info_descr}>Lorem ipsum dolor sit amet</p>
                                <p className={classes.footer__wrapper__block__info_descr}>Lorem ipsum dolor amet consectetur</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer_devider}/>
                    <div className={classes.footer_rightReserved}>© 2022 — All right reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer