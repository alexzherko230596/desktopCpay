import React, {useState, useEffect} from "react";
import classes from './MobileSetLanguage.module.scss'
import usa from '../../img/svg/unitedStates.svg'
import poland from '../../img/svg/poland.svg'
import russia from '../../img/svg/russia.svg'
import ItemLanguage from "../ItemLanguage/ItemLanguage";
import { useTranslation } from "react-i18next";

const MobileSetLanguage = (props) => {
    const {t, i18n} = useTranslation()
    const [textLanguage, setTextLanguage] = useState('en')

    // const onChangeLanguage = (language) => {
    //     setTextLanguage(language)
    //     props.hideModal()
    // }

    useEffect(() => {
        i18n.changeLanguage('en')
    }, [])

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
        setTextLanguage(language)
        props.hideModal()
    }
    return(
        <div className={props.modalActive ? classes.modal : classes.close}>

            <ItemLanguage 
                src={usa} 
                text={'English'}
                alt = {'English'} 
                value={'en'} 
                textLanguage={textLanguage} 
                setTextLanguage={setTextLanguage} 
                onChangeLanguage={changeLanguage}
                id={1}
                currentLanguage={props.currentLanguage}
                setCurrentLanguage={props.setCurrentLanguage}/>

            <ItemLanguage 
                src={poland} 
                text={'Polish'} 
                alt = {'Polish'} 
                value={'pl'} 
                textLanguage={textLanguage} 
                setTextLanguage={setTextLanguage} 
                onChangeLanguage={changeLanguage}
                id={2}
                currentLanguage={props.currentLanguage}
                setCurrentLanguage={props.setCurrentLanguage}/>

            <ItemLanguage 
                src={russia} 
                text={'Russian'} 
                alt = {'Russian'} 
                value={'ru'} 
                textLanguage={textLanguage} 
                setTextLanguage={setTextLanguage} 
                onChangeLanguage={changeLanguage}
                id={3}
                currentLanguage={props.currentLanguage}
                setCurrentLanguage={props.setCurrentLanguage}/>

        </div> 
    )
}

export default MobileSetLanguage