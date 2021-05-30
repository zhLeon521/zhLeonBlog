/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-30 13:50:26
 * @LastEditTime: 2021-05-30 15:25:06
 * @FilePath: \zhleon\pages\_app.js
 */
import 'tailwindcss/tailwind.css'

import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/avatar.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp