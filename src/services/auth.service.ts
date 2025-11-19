import type { User } from "../models/user.ts";

interface AuthService {
  register(user_name: string, password: string): Promise<User>;
  login(user_name: string, password: string): Promise<User>;
  logout(): Promise<void>;
  getUser(): Promise<User | null>;
}

class AuthServiceImpl implements AuthService {
  register(user_name: string, password: string): Promise<User> {
    const user = {
      id: 0,
      user_name,
      password,
      session: "no implementation",
    };
    localStorage.setItem("user", JSON.stringify(user));
    return Promise.resolve(user);
  }

  login(user_name: string, password: string): Promise<User> {
    const user = {
      id: 0,
      user_name,
      password,
      session: "no implementation",
    };
    localStorage.setItem("user", JSON.stringify(user));
    return Promise.resolve(user);
  }

  logout(): Promise<void> {
    localStorage.removeItem("user");
    return Promise.resolve();
  }

  getUser(): Promise<User | null> {
    const item = localStorage.getItem("user");
    const user = item ? JSON.parse(item) : null;
    return Promise.resolve(user);
  }
}

export const authService = new AuthServiceImpl();
