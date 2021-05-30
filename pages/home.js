import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import {Header,Footer} from './component';

function Domain(props) {
  const {navigateTo,title} = props;
  console.log(title)
  return(
    <Link href={navigateTo}>
      <p className="domain">{title}</p>
    </Link>
  )
}

export default function Home() {
  let {t} = useTranslation(); 
  return (
    <div className="container">
      <Head>
        <title>IVDY Group</title>
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Header />
      <main>
        <h1 className="title">
          {t("home:DIGITAL TRANSFORMATION")}
        </h1>

        <p className="description">
          <li style={{ listStyleType: 'none' }}>{t("home:Automoatisierung")}</li>
          <li>{t("home:Optimierung")}</li>
          <li>{t("home:Wissensentdeckung aus Daten")}</li>
        </p>

        <div className="grid">
        <Domain navigateTo="/who-we-are" title={t("home:WER WIR SIND")}/>
          <Domain navigateTo="/what-we-do" title={t("home:WAS WIR TUN")}/>
          <Domain navigateTo="/how-we-do" title={t("home:WIE WIR ES TUN")}/>
        </div>
      </main>

      <Footer />
    </div>
  )
}
