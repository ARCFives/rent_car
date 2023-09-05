import { useEditPassword } from '../../../data/hooks/useEditPassword/useEditPassword'
import { ButtonForm } from '../ButtonForm'
import { Input } from '../Input'

export function EditPassword() {
  const { errors, register, handleSubmit, alterPassword, replyText } =
    useEditPassword()

  return (
    <>
      <form
        className="flex flex-col mt-5"
        onSubmit={handleSubmit(alterPassword)}
      >
        <h2 className="font-bold text-blue-900 text-xl text-center mb-6">
          Editar Senha
        </h2>
        <div>
          <h3 className="text-blue-900 mb-1 text-center font-medium">
            Nova Senha
          </h3>
          <Input
            typeInput="password"
            id="oldPassword"
            labelText="Seha Atual"
            placeholderText="********"
            register={register}
            errors={errors.oldPassword?.message}
            maxLength={32}
          />
          <Input
            typeInput="password"
            id="newPassword"
            labelText="Nova Senha"
            placeholderText="********"
            register={register}
            errors={errors.newPassword?.message}
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
        {replyText && (
          <p className="text-red-600 text-sm text-center mb-3">{replyText}</p>
        )}
        <ButtonForm text="Alterar senha" />
      </form>
    </>
  )
}
