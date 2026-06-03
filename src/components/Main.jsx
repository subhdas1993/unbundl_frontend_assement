import React from 'react'
import FetchData from './subComponents/main/fetchdata'

function Main({headerHeight}) {
  return (
    <div style={{ marginTop: `${headerHeight}px` }}>
      <FetchData />
    </div>
  )
}

export default Main