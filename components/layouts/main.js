import Head from 'next/head'
import dynamic from 'next/dynamic'

import { Box, Container } from '@chakra-ui/react'

import Navbar from '../navbar.js'
import TotoroModelLoader from '../totoro-model-loader.js'
import { prefix } from '../../config/prefix.js'

const LazyLoadModel = dynamic(() => import('../totoro-3d-model'), {
  ssr: false,
  loading: () => <TotoroModelLoader />,
})

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width = device-width, initial-scale=1' />
        <link
          rel='shortcut icon'
          href={`${prefix}/favicon.png`}
          type='image/x-icon'
        />
        <title> Jian Hui - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        <LazyLoadModel />
        {children}
      </Container>
    </Box>
  )
}

export default Main
