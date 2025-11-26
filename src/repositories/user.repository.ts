import type { User } from "../models/user.ts";

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  findBySession(session: string): Promise<User | null>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<boolean>;
}
