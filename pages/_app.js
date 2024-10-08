import Layout from '../components/layouts/main.js'
import { Chakra } from '../components/chakra'
import Fonts from '../components/font.js'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}

export default Website
