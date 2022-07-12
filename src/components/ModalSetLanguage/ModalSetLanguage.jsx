import React, {useState} from "react";
import classes from './ModalSetLanguage.module.scss'
import usa from '../../img/svg/unitedStates.svg'
import poland from '../../img/svg/poland.svg'
import russia from '../../img/svg/russia.svg'
import ItemLanguage from "../ItemLanguage/ItemLanguage";

const ModalSetLanguage = (props) => {
    const [textLanguage, setTextLanguage] = useState('english')

    const onChangeLanguage = (language) => {
        setTextLanguage(language)
        props.hideModal()
    }
    return(
        <div className={props.modalActive ? classes.modal : classes.close}>

            <ItemLanguage 
                src={usa} 
                text={'English'}
                alt = {'English'} 
                value={'english'} 
                textLanguage={textLanguage} 
                setTextLanguage={setTextLanguage} 
                onChangeLanguage={onChangeLanguage}
                id={1}
                currentLanguage={props.currentLanguage}
                setCurrentLanguage={props.setCurrentLanguage}/>

            <ItemLanguage 
                src={poland} 
                text={'Polish'} 
                alt = {'Polish'} 
                value={'polish'} 
                textLanguage={textLanguage} 
                setTextLanguage={setTextLanguage} 
                onChangeLanguage={onChangeLanguage}
                id={2}
                currentLanguage={props.currentLanguage}
                setCurrentLanguage={props.setCurrentLanguage}/>

            <ItemLanguage 
                src={russia} 
                text={'Russian'} 
                alt = {'Russian'} 
                value={'russian'} 
                textLanguage={textLanguage} 
                setTextLanguage={setTextLanguage} 
                onChangeLanguage={onChangeLanguage}
                id={3}
                currentLanguage={props.currentLanguage}
                setCurrentLanguage={props.setCurrentLanguage}/>

        </div> 
    )
}

export default ModalSetLanguage