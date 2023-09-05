import { useCallback, useEffect } from 'react'
import { Input } from '../Input'
import { InputDate } from '../InputDate'
import axios from 'axios'
import { AndressProps } from '../../../data/types/andressProps'
import { useRegisterForm } from '../../../data/hooks/useRegisterForm/useRegisterForm'
import { useRegister } from '../../../data/hooks/useRegister/useRegister'
import { ButtonForm } from '../ButtonForm'

export function RegisterForm() {
  const { errors, handleSubmit, register, setValue, watch } = useRegisterForm()
  const { replyText, sendRegisterForm } = useRegister()
  const cep = watch('cep')

  const handleValues = useCallback(
    (data: AndressProps) => {
      setValue('neighborhood', data.bairro)
      setValue('andress', data.logradouro)
      setValue('city', data.localidade)
      setValue('state', data.uf)
    },
    [setValue]
  )

  const handleFetchAndress = useCallback(
    async (cep: string) => {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      handleValues(data)
    },
    [handleValues]
  )

  useEffect(() => {
    if (cep.length != 8) return
    handleFetchAndress(cep)
  }, [handleFetchAndress, cep])

  return (
    <section className="bg-gray-100 p-4 rounded shadow-sm flex-1 md:max-w-[38.8rem]">
      <h2 className="font-bold text-blue-900 text-xl text-center mb-6">
        Cadastre-se
      </h2>
      <form onSubmit={handleSubmit(sendRegisterForm)} className="flex flex-col">
        <div>
          <div className="mb-6">
            <h3 className="text-blue-900 mb-1 text-center font-medium">
              Informações
            </h3>
            <Input
              typeInput="text"
              id="name"
              labelText="Nome"
              placeholderText="Insira seu nome..."
              errors={errors.name?.message}
              register={register}
              maxLength={65}
            />
            <Input
              typeInput="email"
              id="email"
              labelText="Email"
              placeholderText="meuemail@email.com"
              register={register}
              errors={errors.email?.message}
              maxLength={45}
            />
            <Input
              typeInput="text"
              id="cpf"
              labelText="CPF"
              placeholderText="Seu CPF, somente números."
              register={register}
              errors={errors.cpf?.message}
              maxLength={11}
            />
            <InputDate
              id="birthday"
              labelText="Data de Nascimento"
              register={register}
              errors={errors.birthday?.message}
              maxLength={10}
            />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  {...register('gender')}
                  className="h-5 w-5"
                  value="Masculino"
                  checked
                />
                <label className="text-sm text-gray-700">Masculino</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  {...register('gender')}
                  className="h-5 w-5"
                  value="Feminino"
                />
                <label className="text-sm text-gray-700">Feminino</label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-900 mb-1 text-center font-medium">
              Endereço
            </h3>
            <Input
              typeInput="text"
              id="cep"
              labelText="CEP"
              placeholderText="Digite seu CEP, somente números."
              register={register}
              errors={errors.cep?.message}
              maxLength={8}
            />
            <Input
              typeInput="text"
              id="andress"
              labelText="Endereço"
              placeholderText="Rua exemplo"
              register={register}
              errors={errors.andress?.message}
              maxLength={40}
            />
            <Input
              typeInput="text"
              id="neighborhood"
              labelText="Bairro"
              placeholderText="Meu Bairro"
              register={register}
              errors={errors.neighborhood?.message}
              maxLength={25}
            />
            <Input
              typeInput="text"
              id="city"
              labelText="Cidade"
              placeholderText="Minha Cidade"
              register={register}
              errors={errors.city?.message}
              maxLength={40}
            />
            <Input
              typeInput="text"
              id="state"
              labelText="Estado"
              placeholderText="Estado"
              register={register}
              errors={errors.state?.message}
              maxLength={2}
            />
            <div className="flex items-center justify-between gap-8">
              <Input
                typeInput="text"
                id="nHouse"
                labelText="N° Casa"
                placeholderText="Número da casa"
                register={register}
                maxLength={6}
              />
              <Input
                typeInput="text"
                id="complement"
                labelText="Complemento"
                placeholderText="Complemento"
                register={register}
                maxLength={30}
              />
            </div>
          </div>
          <div>
            <h3 className="text-blue-900 mb-1 text-center font-medium">
              Senha
            </h3>
            <Input
              typeInput="password"
              id="password"
              labelText="Senha"
              placeholderText="********"
              register={register}
              errors={errors.password?.message}
              maxLength={32}
            />
            <Input
              typeInput="password"
              id="confirmPassword"
              labelText="Confirme sua senha"
              placeholderText="********"
              register={register}
              errors={errors.confirmPassword?.message}
              maxLength={32}
            />
          </div>
        </div>
        {replyText && (
          <p className="text-red-600 text-sm text-center mb-3">{replyText}</p>
        )}
        <ButtonForm text="Enviar" />
      </form>
    </section>
  )
}
