import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Languages() {
    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return(
        <div>
            <button onClick = {() => changeLanguage("ru")}>ru</button>
            <button onClick = {() => changeLanguage("en")}>en</button>
            <Trans i18nKey="h2">
                h2
            </Trans>
            <div>{t('h2')}</div>
        </div>
    )
}

export default Languages