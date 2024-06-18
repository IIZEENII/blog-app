import { User } from "@features/users/domain/user";

export interface Post {
  id: string;
  title: string;
  content: string;
  multimediaURL?: string;
  user: User;
}
