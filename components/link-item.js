import { useColorModeValue, Link } from '@chakra-ui/react'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const newTab = path === 'newTab'
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      href={href}
      p={2}
      bg={active ? 'glassTeal' : 'undefined'}
      color={active ? '#202023' : inactiveColor}
      target={newTab ? '_blank' : ''}
    >
      {children}
    </Link>
  )
}

export default LinkItem
