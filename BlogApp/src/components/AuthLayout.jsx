import React from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'

function Protected({children,authentication = true}) {
  return (
    <>
      {children}
    </>
  )
}

export default Protected
