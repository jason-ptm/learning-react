import React from 'react'
import { getMorty } from '../../services/'
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/states/user'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../model'
import Swal from 'sweetalert2'
export interface LoginProps {
  props?: unknown
}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const result = await getMorty()
      dispatch(createUser(result))
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
