import React from "react";
import ElementUsing from "../ElementUsing/ElementUsing";
import classes from './StartUsage.module.scss'
import using from '../../img/svg/phoneTemplate.svg'

const StartUsage = () => {
    return(
        <div className={classes.usage}>
            <div className='g-container'>
                <div className={classes.usage__wrapper}>
                    <h2 className={classes.usage__wrapper_h2}>Easy way to start using</h2>
                    <div className={classes.usage__wrapper__advantages}>
                        <ElementUsing 
                            title={'Install the app'}
                            descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}
                            path={using}/>
                        <ElementUsing 
                            title={'KYC check'}
                            descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}
                            path={using}/>
                        <ElementUsing 
                            title={'Creat wallet'}
                            descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}
                            path={using}/>
                        <ElementUsing 
                            title={'Enjoy the app!'}
                            descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}
                            path={using}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartUsage