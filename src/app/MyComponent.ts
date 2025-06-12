import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    loop: 0
  })

  return (
    <div className='App'>
      <span>{text}</span>
    </div>
  )
}