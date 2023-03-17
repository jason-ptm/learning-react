import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../model'
import { resetUser } from '../../redux/states/user'
export interface LogoutProps {
  props?: unknown
}

const Logout: React.FC<LogoutProps> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(resetUser())
    navigate(PublicRoutes.LOGIN)
  }

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
