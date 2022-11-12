import { useState } from 'react'
import styled from '@emotion/styled'

const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  width: 'max';
`

const Bar = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 2s ease 0.5s;
`

const ProgressBar = ({ proficiency }) => {
  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${proficiency}%`,
    }

    setStyle(newStyle)
  }, 100)
  return (
    <Progress>
      <Bar style={style}>{proficiency}%</Bar>
    </Progress>
  )
}

export default ProgressBar
