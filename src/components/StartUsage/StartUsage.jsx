import React from "react";
import ElementUsing from "../ElementUsing/ElementUsing";
import classes from './StartUsage.module.scss'
import using from '../../img/svg/phoneTemplate.svg'
import mobileMockUp from '../../img/svg/shortMockMain.svg'

const StartUsage = () => {
    return(
        <div className={classes.usage}>
            <div className='g-container'>
                <div className={classes.usage__wrapper}>
                    <h2 className={classes.usage__wrapper_h2}>Simple to start using</h2>
                    <img src ={mobileMockUp} alt = 'Main page mobile app' className={classes.usage__wrapper_mobileApp}/>
                    <div className={classes.usage__wrapper__advantages}>
                        <ElementUsing 
                            title={'Install the app'}
                            descr={'Install the app from Google Market or AppStore'}
                            path={using}/>
                        <ElementUsing 
                            title={'KYC check'}
                            descr={'A couple of simple steps to confirm your identity'}
                            path={using}/>
                        <ElementUsing 
                            title={'Creat wallet'}
                            descr={'Select the desired currency and voila'}
                            path={using}/>
                        <ElementUsing 
                            title={'Enjoy the app!'}
                            descr={'That is set up and ready to use'}
                            path={using}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartUsage