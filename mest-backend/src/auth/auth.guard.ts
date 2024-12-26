import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { promisify } from 'util';
import { expressjwt as jwt } from 'express-jwt';
import { GetVerificationKey } from 'express-jwt';
// import jwt = require("express-jwt");
// import {GetVerificationKey} = require("express-jwt")
// import jwksClient from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { expressJwtSecret } from 'jwks-rsa';

@Injectable()
export class AuthGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;

  constructor(private configService: ConfigService) {
    this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE');
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req, res } = ctx.getContext();

    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }) as GetVerificationKey,
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256'],
      }),
    );

    try {
      await checkJwt(req, res);

      ctx.getContext().auth0Id = req.auth?.sub;
      return true;
    } catch (error) {
      console.error('ERROR', error);
      throw new UnauthorizedException(error);
    }
  }
}
