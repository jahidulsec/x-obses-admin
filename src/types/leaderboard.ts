export type Particiants = {
  id: string;
  fullName: string;
  image?: string;
  imagePath?: string;
};

export type MarathonUser = {
  id: string;
  userId: string;
  marathonId: string;
  distanceKm: number;
  durationMs: number;
  createdAt: string;
  updatedAt: string;
  user: {
    fullName: string;
    imagePath: string;
  };
};
