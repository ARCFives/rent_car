import { useForm } from "react-hook-form";
import { FormLoginProps } from "../../types/formLoginProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "../../schemas/login";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormLoginProps>({
    mode: 'onBlur',
    resolver: zodResolver(schemaLogin)
  })

  return {
    register,handleSubmit, reset, errors
  }
}