import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    completed: number;
    today: boolean;
    timeToday: number;
  }

  interface Session {
    user: User & {
      completed: number;
      today: boolean;
      timeToday: number;
    };
  }
}
