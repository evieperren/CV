import React, { useState, Fragment } from 'react'
import { useEffect } from 'react'

const LoadingPage = () => {
  const [ loadingPercentage, setLoadingPercentage ] = useState(0)

  useEffect(() => {
    const time = new Date()
    console.log(time)
    for( let i = 0; i < 100; i++){
      setTimeout(() => {

        setLoadingPercentage(i)
      }, 2000)
    }

  })
  return (
    <Fragment>
      <p>loading page here</p>
      <p>{loadingPercentage}</p>

    </Fragment>

  )
}
export default LoadingPage