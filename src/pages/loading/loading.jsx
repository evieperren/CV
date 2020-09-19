import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { CurrentPageContext } from '../../context/current-page'

const LoadingPage = () => {
  const [ loadingPercentage, setLoadingPercentage ] = useState(0)

  useEffect(() => {
    const time = new Date()
    for( let i = 0; i < 100; i++){
      setTimeout(() => {

        setLoadingPercentage(i)
      }, 2000)
    }
  })
  return (
    <main>
      <p>loading page here</p>
      <p>{loadingPercentage}</p>

    </main>

  )
}
export default LoadingPage