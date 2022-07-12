import React, { useState } from "react";
import classes from './Header.module.scss'
import logo from '../../img/svg/logo.svg'
import language from '../../img/svg/languagesSelector.svg'
import ModalSetLanguage from "../ModalSetLanguage/ModalSetLanguage";

const Header = () => {

    const [modalActive, setModalActive] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState('EN')

    const hideModal = () => {
        setModalActive(false)
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
                            <li className={classes.header__wrapper__menu__list_item}>About</li>
                            <li className={classes.header__wrapper__menu__list_item}>Pricing</li>
                            <li className={classes.header__wrapper__menu__list_item}>Contacts</li>
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
            </div>
        </div>
    )
}

export default Header