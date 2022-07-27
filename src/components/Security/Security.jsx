import React from "react";
import classes from './Security.module.scss'
import lock from '../../img/svg/illustrationSecurity.svg'

const Security = () => {
    return(
        <div className={classes.security}>
            <div className="g-container">
                <div className={classes.security__wrapper}>
                    <div className={classes.security__wrapper__block}>
                        <p className={classes.security__wrapper__block_title}>Safety and security</p>
                        <p className={classes.security__wrapper__block_descr1}>Cpay takes care of the safety of its clients' funds and provides an increased level of control at every stage of financial transactions</p>
                        <p className={classes.security__wrapper__block_descr1}>The highest implementation standards ensure the reliability in the use of the multi-currency wallet for personal and corporate purposes around the world</p>
                        <button className={classes.security__wrapper__block_btn}>Download app</button>
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