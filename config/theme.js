import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#eceff1', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {
    baseStyle : {
      fontFamily: 'Montserrat'
    },
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 36,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        textAlign: 'left',
      },
      'job-company-name': {
        fontSize: 20,
      },
      'job-title': {
        fontSize: 14,
      },
      'project-title': {
        fontSize: 20,
        margin: 2,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
  Text: {
    variants: {
      'project-description': {
        fontSize: 16,
        textAlign: 'center',
      },
    },
  },
}

const colors = {
  glassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, components, colors, styles })

export default theme
