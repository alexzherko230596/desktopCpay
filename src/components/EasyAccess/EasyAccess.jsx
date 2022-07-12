import React, { useState } from "react";
import classes from './EasyAccess.module.scss'
import illustration from '../../img/svg/accessIllustration.svg'

const EasyAccess = () => {
    const [inputEmail, setInputEmail] = useState('')

    const handleForm = () => {
        console.log('123')
    }
    return(
        <div className={classes.access}>
            <div className="g-container">
                <div className={classes.access__wrapper}>
                    <img src={illustration} alt="Illustration" className={classes.mainPage__wrapper_icon}/>
                    <div className={classes.access__wrapper__block}>
                        <p className={classes.access__wrapper__block_title}>Get early access<br/>to the demo version</p>
                        <p className={classes.access__wrapper__block_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing     elit. Dictum et nunc dui velit velit dui congue pretium. Quis feugiat eu, nibh venenatis.
                        </p>
                        <div className={classes.access__wrapper__block__inputForm}>
                            <input 
                                className={classes.access__wrapper__block__inputForm_input}
                                type={'email'} 
                                placeholder={"Enter your email"} 
                                value = {inputEmail} 
                                onChange={(e) => {setInputEmail(e.target.value)}}/>
                            <button className={classes.access__wrapper__block__inputForm_button} onClick={handleForm}>Notify me</button>
                        </div>
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