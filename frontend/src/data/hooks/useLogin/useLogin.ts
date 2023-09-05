import axios from 'axios'
import { FormLoginProps } from '../../types/formLoginProps'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLoginForm } from '../useLoginForm/useLoginForm'
import { useState } from 'react'

export function useLogin() {
  const { reset } = useLoginForm()
  const navigate = useNavigate()
  const [errorLogin, setErrorLogin] = useState<string>('')

  async function loginForm(data: FormLoginProps) {
    await axios
      .post('http://localhost:8080/oauth/login', data)
      .then(reply => {
        const { token } = reply.data
        Cookies.set('token', token, {
          expires: 30,
          secure: true
        })
        reset()
        navigate('/')
      })
      .catch(error => {
        const { data } = error.response
        return setErrorLogin(data)
      })
  }

  return {
    loginForm,
    errorLogin
  }
}
