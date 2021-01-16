import React from 'react'
import './loading.scss'
import spinner from '../../assets/images/spinner .png'

const LoadingPage = () => {
  return (
    <main>
      <div className="loading__container">
          <h3>Loading</h3>
          <img src={spinner} alt=""/>
      </div>
    </main>
  )
}
export default LoadingPage