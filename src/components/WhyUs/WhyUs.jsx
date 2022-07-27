import React from "react";
import ElementUsing from '../ElementUsing/ElementUsing'
import ElementHugeUsing from '../ElementHugeUsing/ElementHugeUsing'
import classes from './WhyUs.module.scss'
import Carousel from '@itseasy21/react-elastic-carousel';

const WhyUs = () => {
    return(
        <div className={classes.advantages}>
            <div className="g-container">
                <div className={classes.advantages__wrapper}>
                    <p className={classes.advantages__wrapper_title}>Why is Cpay special?</p>
                    <div className={classes.advantages__wrapper__block}>
                        <ElementUsing title = {'Banking system'} descr={'Buy fiat and crypto assets using bank cards.'}/>
                        <ElementUsing title = {'Versatility'} descr={'Support for popular blockchains and their tokens.'}/>
                        <ElementUsing title = {'Usability'} descr={'User-friendly interface that’s built to high industry standards'}/>
                        <ElementUsing title = {'Support'} descr={'Cpay has friendly support that is always ready to help'}/>
                        <ElementUsing title = {'Loyalty'} descr={'Low fees compared to other wallet apps'}/>
                        <ElementUsing title = {'Transparency'} descr={'No additional charges, only transfer fees'}/>
                        <ElementUsing title = {'Unique'} descr={'Fiat and crypto combined in one app'}/>
                        <ElementUsing title = {'Limitless'} descr={'Fiat and crypto are separated by a single swipe'}/>
                    </div>
                    <div className={classes.advantages__wrapper__mobile}>

                            <Carousel>

                                <div className={classes.advantages__wrapper__mobile__block}>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>
                                        <ElementHugeUsing title = {'Banking system'} descr={'Buy fiat and crypto assets using bank cards.'}/>
                                        <ElementHugeUsing title = {'Versatility'} descr={'Support for popular blockchains and their tokens.'}/>
                                    </div>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>   
                                        <ElementHugeUsing title = {'Usability'} descr={'User-friendly interface that’s built to high industry standards'}/>
                                        <ElementHugeUsing title = {'Support'} descr={'Cpay has friendly support that is always ready to help'}/>
                                    </div>
                                </div>

                                <div className={classes.advantages__wrapper__mobile__block}>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>
                                        <ElementHugeUsing title = {'Loyalty'} descr={'Low fees compared to other wallet apps'}/>
                                        <ElementHugeUsing title = {'Transparency'} descr={'No additional charges, only transfer fees'}/>
                                    </div>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>   
                                        <ElementHugeUsing title = {'Unique'} descr={'Fiat and crypto combined in one app'}/>
                                        <ElementHugeUsing title = {'Limitless'} descr={'Fiat and crypto are separated by a single swipe'}/>
                                    </div>
                                </div>

                            </Carousel>

                        </div>
                    <div className={classes.advantages__wrapper_blur1}/>
                    <div className={classes.advantages__wrapper_blur2}/>
                    <div className={classes.advantages__wrapper_blur3}/>
                </div>
            </div>
        </div>
    )
}

export default WhyUs