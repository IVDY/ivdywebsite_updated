import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function Footer() {
    let {t} = useTranslation();
    return (
        <footer>
            <div className="footerContainer">
                <p style={{ flex: 1 }}>© {t("common:Copyright 2021")}, {t("common:IVDY Group")}. {t("common:Alle Rechte vorbehalten")}.</p>
                <li style={{ listStyleType: 'none' }}>{t("common:Kontakt")}</li>
                <li>{t("common:Werde ein Unicorn")}</li>
                <li>{t("common:Impressum")}</li>
                <li>{t("common:AGB")}</li>
                <li>{t("common:Datenschutz")}</li>
            </div>
        </footer>
    )
}