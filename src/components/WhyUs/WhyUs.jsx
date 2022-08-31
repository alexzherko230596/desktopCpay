import React from "react";
import ElementUsing from '../ElementUsing/ElementUsing'
import ElementHugeUsing from '../ElementHugeUsing/ElementHugeUsing'
import classes from './WhyUs.module.scss'
import Carousel from '@itseasy21/react-elastic-carousel';
import { useTranslation } from "react-i18next";

const WhyUs = () => {
    const {t} = useTranslation()
    return(
        <div className={classes.advantages} id = 'BlockToScrollBenefits'>
            <div className="g-container">
                <div className={classes.advantages__wrapper}>
                    <p className={classes.advantages__wrapper_title}>{t('whyUs.title')}</p>
                    <div className={classes.advantages__wrapper__block}>
                        <ElementUsing 
                            title = {'Banking system'} 
                            descr={'Buy fiat and crypto assets using bank cards.'}
                            translateTitle={'whyUs.title1'}
                            translateDescr={'whyUs.descr1'}/>
                        <ElementUsing 
                            title = {'Versatility'} 
                            descr={'Support for popular blockchains and their tokens.'}
                            translateTitle={'whyUs.title2'}
                            translateDescr={'whyUs.descr2'}/>
                        <ElementUsing 
                            title = {'Usability'} 
                            descr={'User-friendly interface that’s built to high industry standards'}
                            translateTitle={'whyUs.title3'}
                            translateDescr={'whyUs.descr3'}/>
                        <ElementUsing 
                            title = {'Support'} 
                            descr={'Cpay has friendly support that is always ready to help'}
                            translateTitle={'whyUs.title4'}
                            translateDescr={'whyUs.descr4'}/>
                        <ElementUsing 
                            title = {'Loyalty'} 
                            descr={'Low fees compared to other wallet apps'}
                            translateTitle={'whyUs.title5'}
                            translateDescr={'whyUs.descr5'}/>
                        <ElementUsing 
                            title = {'Transparency'} 
                            descr={'No additional charges, only transfer fees'}
                            translateTitle={'whyUs.title6'}
                            translateDescr={'whyUs.descr6'}/>
                        <ElementUsing 
                            title = {'Unique'} 
                            descr={'Fiat and crypto combined in one app'}
                            translateTitle={'whyUs.title7'}
                            translateDescr={'whyUs.descr7'}/>
                        <ElementUsing 
                            title = {'Limitless'} 
                            descr={'Fiat and crypto are separated by a single swipe'}
                            translateTitle={'whyUs.title8'}
                            translateDescr={'whyUs.descr8'}/>
                    </div>
                    <div className={classes.advantages__wrapper__mobile}>

                            <Carousel>

                                <div className={classes.advantages__wrapper__mobile__block}>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>
                                        <ElementHugeUsing 
                                            title = {'Banking system'} 
                                            descr={'Buy fiat and crypto assets using bank cards.'}
                                            translateTitle={'whyUs.title1'}
                                            translateDescr={'whyUs.descr1'}
                                            />
                                        <ElementHugeUsing 
                                            title = {'Versatility'} 
                                            descr={'Support for popular blockchains and their tokens.'}
                                            translateTitle={'whyUs.title2'}
                                            translateDescr={'whyUs.descr2'}
                                            />
                                    </div>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>   
                                        <ElementHugeUsing 
                                            title = {'Usability'} 
                                            descr={'User-friendly interface that’s built to high industry standards'}
                                            translateTitle={'whyUs.title3'}
                                            translateDescr={'whyUs.descr3'}/>
                                        <ElementHugeUsing 
                                            title = {'Support'}
                                            descr={'Cpay has friendly support that is always ready to help'}
                                            translateTitle={'whyUs.title4'}
                                            translateDescr={'whyUs.descr4'}/>
                                    </div>
                                </div>

                                <div className={classes.advantages__wrapper__mobile__block}>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>
                                        <ElementHugeUsing 
                                            title = {'Loyalty'} 
                                            descr={'Low fees compared to other wallet apps'}
                                            translateTitle={'whyUs.title5'}
                                            translateDescr={'whyUs.descr5'}/>
                                        <ElementHugeUsing 
                                            title = {'Transparency'} 
                                            descr={'No additional charges, only transfer fees'}
                                            translateTitle={'whyUs.title6'}
                                            translateDescr={'whyUs.descr6'}/>
                                    </div>
                                    <div className={classes.advantages__wrapper__mobile__block_direction}>   
                                        <ElementHugeUsing 
                                            title = {'Unique'} 
                                            descr={'Fiat and crypto combined in one app'}
                                            translateTitle={'whyUs.title7'}
                                            translateDescr={'whyUs.descr7'}/>
                                        <ElementHugeUsing 
                                            title = {'Limitless'} 
                                            descr={'Fiat and crypto are separated by a single swipe'}
                                            translateTitle={'whyUs.title8'}
                                            translateDescr={'whyUs.descr8'}/>
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