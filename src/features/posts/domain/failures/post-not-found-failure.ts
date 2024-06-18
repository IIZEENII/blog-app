import { Failure } from '@features/shared/domain/failures/failure';

export class PostNotFoundFailure extends Failure {
  constructor() {
    super('post not found');
  }
}
