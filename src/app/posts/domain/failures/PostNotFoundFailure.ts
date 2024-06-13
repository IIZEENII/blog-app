import { Failure } from "../../../shared/domain/failures/Failure";

export class PostNotFoundFailure extends Failure {
    constructor() {
        super('post not found');
    }
}