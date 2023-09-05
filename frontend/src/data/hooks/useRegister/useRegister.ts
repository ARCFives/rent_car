import { useState } from 'react'
import { FormProps } from '../../types/registerForm'
import axios from 'axios'
import { useRegisterForm } from '../useRegisterForm/useRegisterForm'
import { useNavigate } from 'react-router-dom'

export function useRegister() {
  const [replyText, setReplyText] = useState('')
  const { reset } = useRegisterForm()
  const navigate = useNavigate()

  async function sendRegisterForm(data: FormProps) {
    await axios
      .post('http://localhost:8080/oauth/register', data)
      .then(reply => {
        setReplyText(reply.data)
        reset()
        navigate('/')
      })
      .catch(error => {
        const { data } = error.response
        return setReplyText(data)
      })
  }

  return {
    sendRegisterForm,
    replyText
  }
}
