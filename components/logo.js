import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  30%, 43% {
    transform: translate3d(0, -10px, 0);
  }

  70% {
    transform: translate3d(0, -6px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;


  img {
    animation: ${bounce} 1s ease infinite;
  }
`

const Logo = () => {
  const logoImg = `/images/logo.png`

  return (
    <Link href='/'>
      <LogoBox>
        <Image src={logoImg} width={20} height={20} alt='logo' />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS ROunded 1c'
          fontWeight='bold'
          ml={3}
        >
          Jian Hui
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
