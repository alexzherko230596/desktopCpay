import React from "react";
import classes from './Security.module.scss'
import lock from '../../img/svg/illustrationSecurity.svg'

const Security = () => {
    return(
        <div className={classes.security}>
            <div className="g-container">
                <div className={classes.security__wrapper}>
                    <div className={classes.security__wrapper__block}>
                        <p className={classes.security__wrapper__block_title}>Safety and security</p>
                        <p className={classes.security__wrapper__block_descr1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum et nunc dui velit velit dui congue pretium. Quis feugiat eu, nibh venenatis.</p>
                        <p className={classes.security__wrapper__block_descr1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ipsum, dui id ultrices faucibus. Tortor, tristique venenatis habitasse velit. Cursus nunc, id nisl enim, odio interdum et in varius.</p>
                        <button className={classes.security__wrapper__block_btn}>Download app</button>
                    </div>
                    <img src={lock} alt="Lock and a key" className={classes.security__wrapper_icon}/>
                    <div className={classes.security__wrapper_blur1}/>
                    <div className={classes.security__wrapper_blur2}/>
                </div>
            </div>
        </div>
    )
}

export default Security