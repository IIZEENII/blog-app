import { User } from "@features/users/domain/user";

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
  user: User;
}
