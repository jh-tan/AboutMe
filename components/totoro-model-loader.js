import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const CustomSpinner = () => (
  <Spinner
    size='xl'
    position='absolute'
    left='50%'
    top='50%'
    ml='calc(0px - var(--spinner-size) / 2)'
    mt='calc(0px - var(--spinner-size))'
  />
)

const ModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className='totoro'
    m='auto'
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-175px']}
    w={[280, 480, 640]}
    h={[280, 480, 650]}
    position='relative'
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <ModelContainer>
      <CustomSpinner />
    </ModelContainer>
  )
}

export default Loader
export { CustomSpinner, ModelContainer }
