import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    // {
    //   id: 1,
    //   nomeDeUsuario: 'teste',
    //   email: 'teste@email.com',
    //   senha: '123456',
    //   nomeCompleto: 'teste',
    //   dataDeEntrada: new Date(),
    // },
  ];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string) {
    return this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario === nomeDeUsuario,
    );
  }
}
