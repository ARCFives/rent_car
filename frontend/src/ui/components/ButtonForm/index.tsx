import { ButtonFormProps } from './buttonFormProps'

export function ButtonForm({ text }: ButtonFormProps) {
  return (
    <>
      <button
        type="submit"
        className="text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center"
      >
        {text}
      </button>
    </>
  )
}
