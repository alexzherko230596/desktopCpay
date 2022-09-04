import React from "react";
import classes from './Footer.module.scss'
import logo from '../../img/svg/logo.svg'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.footer} id = 'BlockToScrollContacts'>
            <div className="g-container">
                <div className={classes.footer__wrapper}>
                    <div className={classes.footer__wrapper__desktop}>
                        <img src={logo} alt="Cpay 24" className={classes.footer__wrapper_icon}/>
                        <div className={classes.footer__wrapper__block}>
                            <div className={classes.footer__wrapper__block__info}>
                                <p className={classes.footer__wrapper__block__info_title}>{t('footer.title1')}</p>
                                {/* <p className={classes.footer__wrapper__block__info_descr}>+48 222472318</p> */}
                                <a className={classes.footer__wrapper__block__info_descr} href='tel:+48123456789'>+48 222472318</a>
                                <a className={classes.footer__wrapper__block__info_descr} href='tel:+48 222472355'>+48 222472355</a>
                            </div>
                            <div className={classes.footer__wrapper__block__info}>
                                <p className={classes.footer__wrapper__block__info_title}>{t('footer.title2')}</p>
                                <p className={classes.footer__wrapper__block__info_descr}>{t('footer.descr2_1')}</p>
                                <p className={classes.footer__wrapper__block__info_descr}>{t('footer.descr2_2')}</p>
                            </div>
                            <div className={classes.footer__wrapper__block__info}>
                                <p className={classes.footer__wrapper__block__info_title}>{t('footer.title3')}</p>
                                <p className={classes.footer__wrapper__block__info_descr}>{t('footer.descr3_1')}</p>
                                <p className={classes.footer__wrapper__block__info_descr}>{t('footer.descr3_2')}</p>
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