import React, { useState } from "react";
import classes from './Application.module.scss'
import mockups from '../../img/svg/2MockUps.svg'
import ItemFunctional from "../ItemFunctional/ItemFunctional";

const Application = () => {
    const [isFiat, setIsFiat] = useState(true)

    const handleTabs = () => {
        setIsFiat(prev => !prev)
    }

    return(
        <div className={classes.application}>
            <div className="g-container">
                <div className={classes.application__wrapper}>
                    <p className={classes.application__wrapper_title}>Mobile application</p>
                    <div className={classes.application__wrapper__tab}>
                        <div 
                            className={classes.application__wrapper__tab_fiat}
                            onClick={!isFiat && handleTabs}
                            style={isFiat ? { background: 'linear-gradient(322.41deg, #1E1E1E 0%, #343434 100%)', color: '#E0E0E0', cursor: 'default'} : {color: '#A0A0A0'}}>
                                FIAT
                        </div>
                        <div 
                            className={classes.application__wrapper__tab_crypto}
                            onClick={isFiat && handleTabs}
                            style={!isFiat ? { background: 'linear-gradient(322.41deg, #1E1E1E 0%, #343434 100%)', color: '#E0E0E0', cursor: 'default'} : {color: '#A0A0A0'}}>
                                CRYPTO
                        </div>
                    </div>
                    <div className={classes.application__wrapper__functional}>
                        <div className={classes.application__wrapper__functional__overview}>
                            <p className={classes.application__wrapper__functional__overview_title}>Functional overview</p>
                            <ItemFunctional title = {'Convallis tortor urna elementum pellentesque'}/>
                            <ItemFunctional title = {'Lorem ipsum dolor sit amet, consectetur adipiscing'}/>
                            <ItemFunctional title = {'Lorem ipsum dolor sit amet, consectetur'}/>
                            <ItemFunctional title = {'Orci ullamcorper cras euismod sollicitudin'}/>
                            <ItemFunctional title = {'At accumsan amet ultrices amet, pellentesque sodales'}/>
                            <ItemFunctional title = {'Convallis tortor elementum pellentesque'}/>
                            <button className={classes.application__wrapper__functional__overview_button}>Download app</button>
                        </div>
                        <img src={mockups} alt="Mockup application Cpay24" className={classes.application__wrapper__functional_icon}/>
                    </div>
                    <div className={classes.application__wrapper_blur1}/>
                    <div className={classes.application__wrapper_blur2}/>
                </div>
            </div>
        </div>
    )
}

export default Application