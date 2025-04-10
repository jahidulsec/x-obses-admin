export type Blog = {
  id: string;
  createdBy: string | null;
  title: string;
  readTime: number;
  description: string;
  details: string;
  imagePath: string;
  createdAt: string;
  updatedAt: string;
  admin?: {
    name: string
  }
};
