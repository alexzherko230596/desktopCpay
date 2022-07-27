import React from "react";
import classes from './ElementUsing.module.scss'
import using from '../../img/svg/phoneTemplate.svg'

const ElementUsing = (props) => {
    return(
        <div className={classes.using}>
            <div className={classes.using__wrapper}>
                <img src={using} alt="Install the app" className={classes.using__wrapper_icon}/>
                <div className={classes.using__wrapper__mobile}>
                    <div className={classes.using__wrapper_title}>{props.title}</div>
                    <div className={classes.using__wrapper_descr}>{props.descr}</div>
                </div>
            </div>
        </div>
    )
}

export default ElementUsing