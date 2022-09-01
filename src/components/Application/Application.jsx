import React, { useState } from "react";
import classes from './Application.module.scss'
import ItemFunctional from "../ItemFunctional/ItemFunctional";
import smth from '../../img/svg/smth.svg'
import bg from '../../img/svg/backgroungLogo.svg'
import left from '../../img/svg/leftExample.svg'
import right from '../../img/svg/rightExample.svg'
import { useTranslation } from "react-i18next";
import mockUp from '../../img/svg/lastMockUp.svg'

const Application = () => {
    const {t} = useTranslation()
    // const [isFiat, setIsFiat] = useState(true)
    // const handleTabs = () => {
    //     setIsFiat(prev => !prev)
    // }

    return(
        <div className={classes.application} id = 'BlockToScrollAboutUs'>
            <img src={left} alt ="Opportunity" className={classes.application_leftImg}/>
            <img src={right} alt ="Opportunity" className={classes.application_rightImg}/>
            <div className="g-container">
                <div className={classes.application__wrapper}>
                    <img src={bg} alt ="Cpay logo" className={classes.application__wrapper_mobileLogo}/>
                    <p className={classes.application__wrapper_title}>{t('application.title')}</p>
                    <div className={classes.application__wrapper__tab}>
                        <div 
                            className={classes.application__wrapper__tab_fiat}
                            // onClick={!isFiat && handleTabs}
                            style={{ background: 'linear-gradient(322.41deg, #1E1E1E 0%, #343434 100%)', color: '#E0E0E0', cursor: 'default'}}>
                                FIAT
                        </div>
                        <div 
                            className={classes.application__wrapper__tab_crypto}
                            // onClick={isFiat && handleTabs}
                            style={{color: '#A0A0A0'}}>
                                CRYPTO
                        </div>
                    </div>
                    <div className={classes.application__wrapper__functional}>
                        <div className={classes.application__wrapper__functional__overview}>
                            <p className={classes.application__wrapper__functional__overview_title}>{t('application.overview')}</p>
                            <ItemFunctional 
                                title = {'3 simple steps to transfer money within the system'}
                                translateTitle={'application.adv1'}/>
                            <ItemFunctional 
                                title = {'International transfer support'}
                                translateTitle={'application.adv2'}/>
                            <ItemFunctional 
                                title = {'Pay anywhere with the help of Сpay code'}
                                translateTitle={'application.adv3'}/>
                            <ItemFunctional 
                                title = {'Transfer money using a QR code'}
                                translateTitle={'application.adv4'}/>
                            <ItemFunctional 
                                title = {'Track your spendings'}
                                translateTitle={'application.adv5'}/>
                            <ItemFunctional 
                                title = {'10+ additional services'}
                                translateTitle={'application.adv6'}/>
                            {/* <button className={classes.application__wrapper__functional__overview_button}>Download app</button> */}
                        </div>
                        <img src={mockUp} alt ="Mockup application Cpay24" className={classes.application__wrapper__functional_icon}/>
                    </div>
                    <div className={classes.application__wrapper_blur1}/>
                    <div className={classes.application__wrapper_blur2}/>
                    <div className={classes.application__wrapper_blur3}/>
                </div>
            </div>
        </div>
    )
}

export default Application