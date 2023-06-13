import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react';
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <Analytics />
    </>
  )
}

export default MyApp