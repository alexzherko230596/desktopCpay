import React, { useState } from "react";
import classes from './Header.module.scss'
import logo from '../../img/svg/logo.svg'
import language from '../../img/svg/languagesSelector.svg'
import ModalSetLanguage from "../ModalSetLanguage/ModalSetLanguage";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";
import MobileSetLanguage from "../MobileSetLanguage/MobileSetLanguage";

const Header = () => {
    const {t} = useTranslation()
    const [modalActive, setModalActive] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState('EN')
    const [isBurgerMenu, setBurgerMenu] = useState(true)

    const hideModal = () => {
        setModalActive(false)
    }

    const handleBurger = () => {
        if(isBurgerMenu){
            document.body.style.overflow = "hidden"
        }
        else{
            document.body.style.overflow = "visible"
        }
        setBurgerMenu(prev => !prev)
    }

    const openModalSwitchLanguages = () => {
        setModalActive(true)
    }
    return(
        <div className={classes.header}>
            <div className="g-container">
                <div className={classes.header__wrapper}>
                    <img src={logo} alt="Logo CPAY24" className={classes.header__wrapper_icon}/>
                    <div className={classes.header__wrapper__menu}>
                        <ul className={classes.header__wrapper__menu__list}>
                            {/* <li className={classes.header__wrapper__menu__list_item}>{t('header.about')}</li> */}
                            {/* <li className={classes.header__wrapper__menu__list_item}>{t('header.pricing')}</li>
                            <li className={classes.header__wrapper__menu__list_item}>{t('header.contacts')}</li> */}
                            <Link
                                className={classes.header__wrapper__menu__list_item}
                                activeClass="linkMenuHover"
                                to="BlockToScrollAboutUs"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                {t('header.about')}
                            </Link>
                            <Link
                                className={classes.header__wrapper__menu__list_item}
                                activeClass="linkMenuHover"
                                to="BlockToScrollBenefits"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                {t('header.pricing')}
                            </Link>
                            <Link
                                className={classes.header__wrapper__menu__list_item}
                                activeClass="linkMenuHover"
                                to="BlockToScrollContacts"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                {t('header.contacts')}
                            </Link>
                        </ul>
                        <div className={classes.header__wrapper__menu__languages}>
                            <img src={language} alt="language" className={classes.header__wrapper__menu__languages_icon} onClick={openModalSwitchLanguages}/>
                            <p className={classes.header__wrapper__menu__languages_text} onClick={openModalSwitchLanguages}>{currentLanguage}</p>
                            <ModalSetLanguage 
                                modalActive={modalActive} 
                                setModalActive={setModalActive} 
                                hideModal={hideModal}
                                currentLanguage={currentLanguage}
                                setCurrentLanguage={setCurrentLanguage}/> 
                        </div>
                    </div>
                </div>
                <div className={classes.header__mobile} onClick = {handleBurger}>
                    <div className={isBurgerMenu ? classes.header__mobile__burger : `${classes.header__mobile__burger} ${classes.header__mobile_hidden}`}>
                        <span/>
                    </div>
                </div>
            </div>
            <div className={ isBurgerMenu ? classes.header__mobile__wrapper_hidden : classes.header__mobile__wrapper}>
                <div className={classes.header__mobile__wrapper__content}>
                    <ul className={classes.header__mobile__wrapper__content__list}>
                        {/* <li className={classes.header__mobile__wrapper__content__list_item}>About</li>
                        <li className={classes.header__mobile__wrapper__content__list_item}>Pricing</li>
                        <li className={classes.header__mobile__wrapper__content__list_item}>Contacts</li> */}
                            <Link
                                className={classes.header__mobile__wrapper__content__list_item}
                                activeClass="linkMenuHover"
                                to="BlockToScrollAboutUs"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick = {handleBurger}>
                                {t('header.about')}
                            </Link>
                            <Link
                                className={classes.header__mobile__wrapper__content__list_item}
                                activeClass="linkMenuHover"
                                to="BlockToScrollBenefits"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick = {handleBurger}>
                                {t('header.pricing')}
                            </Link>
                            <Link
                                className={classes.header__mobile__wrapper__content__list_item}
                                activeClass="linkMenuHover"
                                to="BlockToScrollContacts"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick = {handleBurger}>
                                {t('header.contacts')}
                            </Link>
                    </ul>
                </div>
                <div className={classes.header__mobile__wrapper__content_chooseLanguage}>
                    <img src={language} alt="language" className={classes.header__wrapper__menu__languages_icon} onClick={openModalSwitchLanguages}/>
                    <p className={classes.header__wrapper__menu__languages_text} onClick={openModalSwitchLanguages}>{currentLanguage}</p>
                        <MobileSetLanguage
                            modalActive={modalActive} 
                            setModalActive={setModalActive} 
                            hideModal={hideModal}
                            currentLanguage={currentLanguage}
                            setCurrentLanguage={setCurrentLanguage}/> 
                </div>
            </div>
        </div>
    )
}

export default Header