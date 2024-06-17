import { User } from "../../users/domain/entities/user";

export interface Post {
    id: number;
    title: string;
    content: string;
    user: User;
    mediaURL?: string;
}
