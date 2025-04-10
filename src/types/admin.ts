export type Admin = {
  id: string;
  name: string;
  username: string;
  password: string;
  role: "superadmin" | "admin";
  createdAt: string;
  updateAt: string;
};
