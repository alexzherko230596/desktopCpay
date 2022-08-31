import React from "react";
import ElementUsing from "../ElementUsing/ElementUsing";
import classes from './StartUsage.module.scss'
import using from '../../img/svg/phoneTemplate.svg'
import mobileMockUp from '../../img/svg/shortMockMain.svg'
import { useTranslation } from "react-i18next";

const StartUsage = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.usage}>
            <div className='g-container'>
                <div className={classes.usage__wrapper}>
                    <h2 className={classes.usage__wrapper_h2}>{t('startUsage.title')}</h2>
                    <img src ={mobileMockUp} alt = 'Main page mobile app' className={classes.usage__wrapper_mobileApp}/>
                    <div className={classes.usage__wrapper__advantages}>
                        <ElementUsing 
                            title={'Install the app'}
                            descr={'Install the app from Google Market or AppStore'}
                            translateTitle = {'startUsage.title1'}
                            translateDescr = {'startUsage.descr1'}
                            path={using}/>
                        <ElementUsing 
                            title={'KYC check'}
                            descr={'A couple of simple steps to confirm your identity'}
                            translateTitle = {'startUsage.title2'}
                            translateDescr = {'startUsage.descr2'}
                            path={using}/>
                        <ElementUsing 
                            title={'Creat wallet'}
                            descr={'Select the desired currency and voila'}
                            translateTitle = {'startUsage.title3'}
                            translateDescr = {'startUsage.descr3'}
                            path={using}/>
                        <ElementUsing 
                            title={'Enjoy the app!'}
                            descr={'That is set up and ready to use'}
                            translateTitle = {'startUsage.title4'}
                            translateDescr = {'startUsage.descr4'}
                            path={using}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartUsage