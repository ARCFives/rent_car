import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  labelText: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  errors?: string
}

export function InputDate({
  id,
  labelText,
  register,
  errors,
  ...rest
}: InputDateProps) {
  const [data, setData] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value
    let formattedDate = ''

    if (/^\d{0,2}$/.test(inputDate)) {
      formattedDate = inputDate
    }
    if (/^\d{2}$/.test(inputDate)) {
      formattedDate = `${inputDate}/`
    }
    if (/^\d{2}\/\d{0,2}$/.test(inputDate)) {
      formattedDate = inputDate
    }
    if (/^\d{2}\/\d{2}$/.test(inputDate)) {
      formattedDate = `${inputDate}/`
    }
    if (/^\d{2}\/\d{2}\/\d{0,4}$/.test(inputDate)) {
      formattedDate = inputDate
    }
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(inputDate)) {
      formattedDate = inputDate
    }

    setData(formattedDate)
  }

  return (
    <div className="mb-3">
      <label htmlFor={id} className="block mb-1 text-gray-700">
        {labelText}:
      </label>
      <input
        type="text"
        id={id}
        {...register(id)}
        {...rest}
        className="w-full rounded border border-gray-300 text-blue-900 p-2 bg-gray-100 focus:border-blue-900 placeholder:text-gray-500"
        placeholder="dd/mm/aaaa"
        autoComplete="off"
        onChange={handleChange}
        value={data}
      />
      {errors && (
        <p className="mt-2 font-light text-xs text-red-600">{errors}</p>
      )}
    </div>
  )
}
