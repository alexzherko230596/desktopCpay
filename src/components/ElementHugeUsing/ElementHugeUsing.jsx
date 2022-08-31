import React from "react";
import classes from './ElementHugeUsing.module.scss'
import using from '../../img/svg/phoneTemplate.svg'
import { Trans } from "react-i18next";

const ElementHugeUsing = (props) => {
    return(
        <div className={classes.using}>
            <div className={classes.using__wrapper}>
                <img src={using} alt="Install the app" className={classes.using__wrapper_icon}/>
                <div className={classes.using__wrapper__mobile}>
                    <div className={classes.using__wrapper_title}>
                        <Trans i18nKey={props.translateTitle}>
                            {props.title}
                        </Trans>
                    </div>
                    <div className={classes.using__wrapper_descr}>
                        <Trans i18nKey={props.translateDescr}>
                            {props.descr}
                        </Trans>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElementHugeUsing