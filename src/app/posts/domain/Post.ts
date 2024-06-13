import { User } from "../../users/domain/User";

export interface Post {
    id: number;
    title: string;
    content: string;
    autor: User;
    mediaURL?: string;
}