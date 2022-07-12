import React from "react";
import classes from './ItemFunctional.module.scss'
import checkMark from '../../img/svg/checkMark.svg'

const ItemFunctional = (props) => {
    return(
        <div className={classes.overview}>
            <img src={checkMark} alt="Home screen application" className={classes.overview_icon}/>
            <p className={classes.overview_text}>{props.title}</p>
        </div>
    )
}

export default ItemFunctional