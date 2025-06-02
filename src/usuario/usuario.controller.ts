import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    const usuarioEncontrado =
      this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

    if (!usuarioEncontrado) {
      return new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado',
      });
    }
    return usuarioEncontrado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario);

    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({ location: `/users/${usuarioCriado.nomeDeUsuario}` })
      .comBody(usuarioCriado)
      .build();
  }
}