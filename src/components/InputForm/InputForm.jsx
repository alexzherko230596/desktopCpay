import React, { useState } from "react";
import classes from './InputForm.module.scss'
import { db } from '../../api/firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useTranslation } from "react-i18next";
import notify from '../../img/svg/notification.svg'
import checkMarkInput from '../../img/svg/checkMarkInput.svg'

const InputForm = () => {
    const {t} = useTranslation()
    const [inputEmail, setInputEmail] = useState('')
    const [isSuccess, setSuccess]= useState(localStorage.getItem("email") == null)
    const [error,setError] = useState(false)
    const usersCollectionRef = collection(db, "email")
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


    const handleForm = async (inputEmail) => {
        console.log('here')
        setError(false)
        if(regex.test(inputEmail)){
            console.log('here2')
            await addDoc(usersCollectionRef, { email: inputEmail })
            const data = await getDocs(usersCollectionRef);
            setInputEmail('')
            localStorage.setItem("email", inputEmail)
        }
        else{
            setError(true)
        }
    }
    return !localStorage.getItem("email") ? (
        <div className={classes.access__wrapper__block__inputForm}>
            <input 
                className={classes.access__wrapper__block__inputForm_input}
                type={'email'} 
                placeholder={"Enter your email"} 
                value = {inputEmail} 
                onChange={(e) => {setInputEmail(e.target.value)}}/>
            <div className={classes.access__wrapper__block__inputForm_button} onClick={() => handleForm(inputEmail)}>
                <img src={notify} alt="notify" className={classes.access__wrapper__block__inputForm_button_img}/>
                <p className={classes.access__wrapper__block__inputForm_button_text}>{t('downloadApp.button')}</p>
            </div>
            {error && 
                <div className={classes.access__wrapper__block__inputForm__error}>
                    <p className={classes.access__wrapper__block__inputForm__error_text}>
                    {t('esayAccess.incorrect')}
                </p>
                </div>
            }
        </div>
    )
    :
    (
        <div className={classes.access__wrapper__block__inputFormSuccess}>
            <div className={classes.access__wrapper__block__inputFormSuccess__input}>
                <img src={checkMarkInput} alt="check mark" className={classes.access__wrapper__block__inputForm_button_img}/>
                <p className={classes.access__wrapper__block__inputFormSuccess__input_text}>{t('esayAccess.button')}</p>
            </div>
        </div>
    )
}

export default InputForm