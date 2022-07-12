import React from "react";
import classes from './ItemLanguage.module.scss'
import checkMark from '../../img/svg/checkMark.svg'

const ItemLanguage = (props) => {
    const closeModal = () => {
        switch(props.id) {
            case 1:
                props.setCurrentLanguage('EN')
                props.onChangeLanguage('english')
                break;

            case 2:
                props.setCurrentLanguage('PL')
                props.onChangeLanguage('polish')
                break;
            
            case 3:
                props.setCurrentLanguage('RU')
                props.onChangeLanguage('russian')
                break;

            default:
                props.setCurrentLanguage('EN')
                props.onChangeLanguage('english')
                break;
        }
    }
 
    return(
        <div className={classes.block} onClick={closeModal}>
            <div className={classes.block__language}>
                <img src={props.src} alt={props.alt} className={classes.block__language_flag}/>
                <p className={classes.block__language_text}>{props.text}</p>
            </div>
            <img src={checkMark} alt="Check mark" className={props.textLanguage === props.value ? `${classes.block_checkMark}` : `${classes.block_hideCheckMark}`}/>
        </div>
    )
}

export default ItemLanguage