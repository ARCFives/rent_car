import { useForm } from 'react-hook-form'
import { FormProps } from '../../types/registerForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaForm } from '../../schemas/register'

export function useRegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      cep: '',
      andress: '',
      neighborhood: '',
      city: '',
      complement: '',
      state: '',
      cpf: '',
      email: '',
      name: '',
      nHouse: '',
      confirmPassword: '',
      birthday: '',
      password: ''
    }
  })

  return {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    errors
  }
}
