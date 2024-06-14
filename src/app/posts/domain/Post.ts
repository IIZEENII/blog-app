import { User } from "../../users/domain/user";

export interface Post {
    id: number;
    title: string;
    content: string;
    autor: User;
    mediaURL?: string;
}
