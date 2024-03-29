import React from "react";
import classes from './EasyAccess.module.scss'
import illustration from '../../img/svg/accessIllustration.svg'
import InputForm from "../InputForm/InputForm";

const EasyAccess = () => {
    return(
        <div className={classes.access}>
            <div className="g-container">
                <div className={classes.access__wrapper}>
                    <img src={illustration} alt="Illustration" className={classes.access__wrapper_icon}/>
                    <div className={classes.access__wrapper__block}>
                        <p className={classes.access__wrapper__block_title}>Get early access to the demo version</p>
                        <p className={classes.access__wrapper__block_descr}>
                            We are still working on the app, leave your email and we will notify you when the app goes into beta
                        </p>
                        {/* <div className={classes.access__wrapper__block__inputForm}>
                            <input 
                                className={classes.access__wrapper__block__inputForm_input}
                                type={'email'} 
                                placeholder={"Enter your email"} 
                                value = {inputEmail} 
                                onChange={(e) => {setInputEmail(e.target.value)}}/>
                            <div className={classes.access__wrapper__block__inputForm_button} onClick={() => handleForm(inputEmail)}>
                                <img src={notify} alt="notify" className={classes.access__wrapper__block__inputForm_button_img}/>
                                <p className={classes.access__wrapper__block__inputForm_button_text}>Notify me</p>
                            </div>
                        </div> */}
                        <InputForm />
                    </div>
                    <div className={classes.access__wrapper_blur1}/>
                    <div className={classes.access__wrapper_blur2}/>
                    <div className={classes.access__wrapper_blur3}/>
                    <div className={classes.access__wrapper_blur4}/>
                    <div className={classes.access__wrapper_blur5}/>
                </div>
            </div>
        </div>
    )
} 

export default EasyAccess