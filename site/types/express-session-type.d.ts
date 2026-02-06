declare module "express-session" {
  interface SessionData {
    user: {
      id: string;
      type: number;
      status: number;
    };
  }
}

export { };
