import type { User } from "../models/user.ts";
import type { UserRepository } from "./user.repository.ts";

class StorageUserRepository implements UserRepository {
  findById(_id: string): Promise<User | null> {
    const user = localStorage.getItem("user");
    return Promise.resolve(user ? JSON.parse(user) : null);
  }

  findBySession(_session: string): Promise<User | null> {
    return Promise.resolve(null);
  }

  create(user: User): Promise<User> {
    localStorage.setItem("user", JSON.stringify(user));
    return Promise.resolve(user);
  }

  update(user: User): Promise<User> {
    localStorage.setItem("user", JSON.stringify(user));
    return Promise.resolve(user);
  }

  delete(_id: string): Promise<boolean> {
    localStorage.removeItem("user");
    return Promise.resolve(true);
  }
}

export const storageUserRepository = new StorageUserRepository();
