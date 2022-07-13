import React from "react";
import classes from './ElementUsing.module.scss'
import using from '../../img/svg/phoneTemplate.svg'

const ElementUsing = (props) => {
    return(
        <div className={classes.using}>
            <img src={using} alt="Install the app" className={classes.using_icon}/>
            <div className={classes.using_title}>{props.title}</div>
            <div className={classes.using_descr}>{props.descr}</div>
        </div>
    )
}

export default ElementUsing