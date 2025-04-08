export type Marathon = {
  id: string;
  title: string;
  description: string;
  about: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  distanceKm: number;
  imagePath?: string;
  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;
  type: "virtual" | "onsite";
  Rewards: Rewards[];
};

interface Rewards {
  id: string;
  text: string;
  marathonId: string;
  createdAt: Date;
  updatedAt: Date;
}
