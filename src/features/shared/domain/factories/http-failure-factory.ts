import { HttpStatusCode } from '@angular/common/http';
import { Failure } from '../failures/failure';
import { UnauthorizedAccountFailure } from '../failures/unauthorized-account-failure';
import { NotFoundFailure } from '../failures/not-found-failure';
import { ForbiddenActionFailure } from '../failures/forbidden-action-failure';

export abstract class HttpStatusFailureFactory {
  static createFailure(httpStatusCode: number): Failure {
    switch (httpStatusCode) {
      case HttpStatusCode.Unauthorized:
        return new UnauthorizedAccountFailure();
      case HttpStatusCode.NotFound:
        return new NotFoundFailure();
      default:
        return new ForbiddenActionFailure();
    }
  }
}
