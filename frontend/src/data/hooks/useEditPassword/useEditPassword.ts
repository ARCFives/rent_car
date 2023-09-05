import { useForm } from 'react-hook-form'
import { schemaEditPassword } from '../../schemas/editPassword'
import { zodResolver } from '@hookform/resolvers/zod'
import { TEditPassword } from '../../types/TEditPassword'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { jwtPayloadDecoded } from '../../types/jwtPayloadDecoded'
import { IEditPassword } from '../../interfaces/IEditPassword'

export function useEditPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<TEditPassword>({
    mode: 'all',
    resolver: zodResolver(schemaEditPassword)
  })
  const [replyText, setReplyText] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get('token')
  const decodedToken = jwtDecode<jwtPayloadDecoded>(token)

  async function alterPassword(data: IEditPassword) {
    await axios
      .put(`http://localhost:8080/edit/password/${decodedToken.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setReplyText(res.data)
        reset()
      })
      .catch(err => {
        const { data } = err.response
        return setReplyText(data)
      })
  }

  return { register, errors, handleSubmit, alterPassword, replyText }
}
