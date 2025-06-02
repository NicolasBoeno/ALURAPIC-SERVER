import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "../decorators/is-nome-de-usuario-unico.validator";
import { Exclude, Expose } from "class-transformer";
export class Usuario {
  id: number;

  @Expose({
    name: 'username'
  })
  @IsNomeDeUsuarioUnico({ message: 'nomeDeUsuario precisar ser único' })
  @IsNotEmpty()
  @IsString({ message: 'nomeDeUsuario precisa ser uma string' })
  nomeDeUsuario: string;

  @Expose({
    name: 'email'
  })
  @IsEmail({}, { message: 'email precisa ser um endereço de email válido' })
  email: string;

  @Expose({
    name: 'password'
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({ message: 'senha é obrigatório' })
  senha: string;

  @Expose({
    name: 'fullName'
  })
  @IsNotEmpty({ message: "nomeCompleto é obrigatório" })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate'
  })
  dataDeEntrada: Date;
}