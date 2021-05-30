import Head from 'next/head'
import {Header1, Footer} from './component';

export default function Home() {
  return (
    <div className="container">
      {/* <Head>
        <title>IVDY Group</title>
        <link rel="icon" href="img/logo.jpeg" />
      </Head> */}

      <Header1 />
      <main></main>
      <Footer />
      
      
    </div>
  )
}