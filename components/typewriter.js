import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { Box } from '@chakra-ui/react'

const TYPING = 0
const PAUSING = 1
const DELETING = 2

const TYPING_PAUSE_MS = 1000
const DELETING_INTERVAL = 50
const DELETING_PAUSE_MS = 500

const blink = keyframes`
  50% {
    opacity:0;
  }
`
const BlinkingCursor = styled.span`
  .cursor {
    animation: ${blink} 1.75s step-start infinite;
  }

  .typewriterText {
    font-size: 21px;
  }
`

const useTypewriter = (TEXTLIST) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const [phase, setPhase] = useState(TYPING)

  useEffect(() => {
    switch (phase) {
      case TYPING: {
        const nextText = TEXTLIST[selectedIndex].slice(
          0,
          typewriterText.length + 1
        )
        if (nextText === typewriterText) {
          setPhase(PAUSING)
          return
        }
        const timeout = setTimeout(() => {
          setTypewriterText(
            TEXTLIST[selectedIndex].slice(0, typewriterText.length + 1)
          )
        }, 150)
        return () => clearTimeout(timeout)
      }
      case DELETING: {
        if (!typewriterText) {
          const timeout = setTimeout(() => {
            setSelectedIndex(
              TEXTLIST[selectedIndex + 1] ? selectedIndex + 1 : 0
            )
            setPhase(TYPING)
          }, DELETING_PAUSE_MS)
          return () => clearTimeout(timeout)
        }
        const deleteRemaining = TEXTLIST[selectedIndex].slice(
          0,
          typewriterText.length - 1
        )
        const timeout = setTimeout(() => {
          setTypewriterText(deleteRemaining)
        }, DELETING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case PAUSING:
      default: {
        const timeout = setTimeout(() => {
          setPhase(DELETING)
        }, TYPING_PAUSE_MS)
        return () => clearTimeout(timeout)
      }
    }
  }, [typewriterText, selectedIndex, phase])
  return typewriterText
}

const Typewriter = ({ Text }) => {
  const typewriter = useTypewriter(Text)
  return (
    <Box>
      <BlinkingCursor>
        <span className='typewriterText'>{typewriter}</span>
        <span className='cursor'>|</span>
      </BlinkingCursor>
    </Box>
  )
}
export default Typewriter
