import { UseFormRegister } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  labelText: string
  placeholderText: string
  typeInput: 'text' | 'password' | 'email'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  errors?: string
}

export function Input({
  id,
  labelText,
  register,
  placeholderText,
  typeInput,
  errors,
  ...rest
}: InputProps) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block mb-1 text-gray-700">
        {labelText}:
      </label>
      <input
        type={typeInput}
        id={id}
        {...register(id)}
        {...rest}
        className="w-full rounded border border-gray-300 text-blue-900 p-2 bg-gray-100 focus:border-blue-900 placeholder:text-gray-500"
        placeholder={placeholderText}
        autoComplete="off"
      />
      {errors && (
        <p className="mt-2 font-light text-sm text-red-600">{errors}</p>
      )}
    </div>
  )
}
