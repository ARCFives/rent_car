import { useForm } from 'react-hook-form'
import { EditFormProps } from '../../types/TEditForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { editForm } from '../../schemas/editForm'

export function useEditProfile() {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm<EditFormProps>({
    mode: 'all',
    resolver: zodResolver(editForm)
  })

  return { register, errors, handleSubmit, setValue }
}
