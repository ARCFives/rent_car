import { useContext } from 'react'
import { Input } from '../ui/components/Input'
import { Link } from 'react-router-dom'
import { ButtonForm } from '../ui/components/ButtonForm'
import { useLoginForm } from '../data/hooks/useLoginForm/useLoginForm'
import { useLogin } from '../data/hooks/useLogin/useLogin'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'

export function Login() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(true)
  const { handleSubmit, errors, register } = useLoginForm()
  const { loginForm, errorLogin } = useLogin()

  return (
    <div className="md:flex md:justify-center">
      <div className="bg-gray-100 p-4 rounded shadow-sm flex-1 md:max-w-[34.5rem]">
        <h2 className="font-bold text-blue-900 text-2xl text-center mb-8">
          Acesse sua conta
        </h2>
        <form onSubmit={handleSubmit(loginForm)} className="flex flex-col">
          <div>
            <Input
              typeInput="email"
              labelText="Email"
              placeholderText="meuemail@email.com"
              id="email"
              register={register}
              errors={errors.email?.message}
            />
            <Input
              typeInput="password"
              labelText="Senha"
              placeholderText="********"
              id="password"
              register={register}
              errors={errors.password?.message}
            />
            <Link
              to="#"
              className="text-blue-700 text-sm underline block mb-5 hover:text-blue-500"
            >
              Esqueci minha senha
            </Link>
          </div>
          {errorLogin && (
            <p className="text-red-600 text-sm text-center mb-2">
              {errorLogin}
            </p>
          )}
          <div className="flex justify-center">
            <ButtonForm text="Login" />
          </div>
          <hr className="mt-8 mb-8" />
          <Link
            to="/register"
            className="border py-3 px-5 rounded uppercase border-blue-900 text-blue-900 mx-auto hover:text-blue-600 hover:border-blue-600"
          >
            Criar sua conta
          </Link>
        </form>
      </div>
    </div>
  )
}
