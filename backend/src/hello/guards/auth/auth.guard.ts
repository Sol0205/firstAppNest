import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url)

    if (request.url === '/greet') {
      return false
    }
    return true;  //dependiendo el dato que yo reciba veo si puedo continuar o no

    // En el caso de la pagina web que quiero hacer seria algo asi la autorizacion de si es administrador:

    // if(!request.headers['autorization']) {
    //   return false
    // }

    // Desde Thunder Client tenfria que ir a Headers y agregarle un header y un Value (tercer campo)
  }
}
