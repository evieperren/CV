import React, { useState, useEffect } from 'react'

const LoadingPage = () => {
  const [ loadingPercentage, setLoadingPercentage ] = useState(0)

  useEffect(() => {
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