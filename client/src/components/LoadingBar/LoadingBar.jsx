import React from 'react'
import { ThreeDots } from  'react-loader-spinner'
import { LoadingContainer } from './LoadingBar.styles'

const LoadingBar = () => {
  return (
    <LoadingContainer>
      <ThreeDots  color="#fff" height={80} width={80} />
    </LoadingContainer>
  )
}

export  { LoadingBar }