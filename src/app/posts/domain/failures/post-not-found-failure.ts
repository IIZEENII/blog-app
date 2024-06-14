import { Failure } from "../../../shared/domain/failures/failure";

export class PostNotFoundFailure extends Failure {
    constructor() {
        super('post not found');
    }
}
