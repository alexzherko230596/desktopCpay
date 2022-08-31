import React from "react";
import classes from './ItemFunctional.module.scss'
import checkMark from '../../img/svg/checkMark.svg'
import { Trans } from "react-i18next";

const ItemFunctional = (props) => {
    return(
        <div className={classes.overview}>
            <img src={checkMark} alt="Home screen application" className={classes.overview_icon}/>
            <p className={classes.overview_text}>
                <Trans i18nKey={props.translateTitle}>
                    {props.title}
                </Trans>
            </p>
        </div>
    )
}

export default ItemFunctional