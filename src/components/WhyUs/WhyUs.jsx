import React from "react";
import ElementUsing from "../ElementUsing/ElementUsing";
import classes from './WhyUs.module.scss'

const WhyUs = () => {
    return(
        <div className={classes.advantages}>
            <div className="g-container">
                <div className={classes.advantages__wrapper}>
                    <p className={classes.advantages__wrapper_title}>Why is Cpay special?</p>
                    <p className={classes.advantages__wrapper_descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit dictum et nunc</p>
                    <div className={classes.advantages__wrapper__block}>
                        <ElementUsing title = {'Safety'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Worldwide'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Customizable'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Payment'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Friendly'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Free'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Unique'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                        <ElementUsing title = {'Multifunctional'} descr={'Lorem ipsum dolor sit amet, lorem consectetur adipiscing'}/>
                    </div>
                    <div className={classes.advantages__wrapper_blur1}/>
                    <div className={classes.advantages__wrapper_blur2}/>
                </div>
            </div>
        </div>
    )
}

export default WhyUs