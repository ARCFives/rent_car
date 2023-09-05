import jwtDecode from 'jwt-decode'
import { useEditProfile } from '../../../data/hooks/useEditProfile/useEditProfile'
import Cookies from 'js-cookie'
import { jwtPayloadDecoded } from '../../../data/types/jwtPayloadDecoded'
import { useEffect } from 'react'
import axios from 'axios'
import { IUserData } from '../../../data/interfaces/IUserData'
import { Input } from '../Input'
import { InputDate } from '../InputDate'
import { ButtonForm } from '../ButtonForm'
import { useNavigate } from 'react-router-dom'
import { EditPassword } from './EditPassword'

export function EditForm() {
  const { errors, handleSubmit, register, setValue } = useEditProfile()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get('token')
  const decodedToken = jwtDecode<jwtPayloadDecoded>(token)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${decodedToken.id}/info`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const userData: IUserData = res.data
        setValue('name', userData.name)
        setValue('email', userData.email)
        setValue('cpf', userData.cpf)
        setValue('birthday', userData.birthday.split('-').reverse().join('/'))
        setValue('cep', userData.cep)
        setValue('andress', userData.andress)
        setValue('city', userData.city)
        setValue('complement', userData.complement)
        setValue('nHouse', userData.nHouse)
        setValue('neighborhood', userData.neighborhood)
        setValue('state', userData.state)
      })
  }, [])

  async function handleUpdateUser(data: IUserData) {
    await axios
      .put(`http://localhost:8080/edit/profile/${decodedToken.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => navigate('/usermenu'))
  }

  return (
    <div className="flex justify-center">
      <section className="bg-gray-100 p-4 rounded shadow-sm flex-1 md:max-w-[38.8rem]">
        <h2 className="font-bold text-blue-900 text-xl text-center mb-6">
          Editar Perfil
        </h2>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(handleUpdateUser)}
        >
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
          </div>
          <ButtonForm text="Salvar" />
        </form>
        <EditPassword />
      </section>
    </div>
  )
}
