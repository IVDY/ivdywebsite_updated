import React from 'react';
import ImageItem from './ImageItem';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from 'next/router';

function Header(props) {
  let router = useRouter();
  let {t} = useTranslation();
  return (
    <header>
      <div style={{ flex: 1 }}></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p className="headerKontakt">{t("common:Kontakt")}</p>
        <div className="language-select">
          <li className="language-select-item">
            <ImageItem
              src="/germany.png"
              alt="DE"
              title="DE"
              localPath={router.asPath}
              locale="de"

            />
          </li>
          <li className="language-select-item">
            <ImageItem
              src="/Britain.webp"
              alt="EN"
              title="EN"
              localPath={router.asPath}
              locale="en-US"
            />
          </li>
          <li className="language-select-item">
            <ImageItem
              src="/turkish.png"
              alt="TR"
              title="TR"
              localPath={router.asPath}
              locale="tr"
            />
          </li>
        </div>
      </div>
    </header>
  )
}

export default Header;
