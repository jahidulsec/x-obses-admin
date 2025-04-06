import { NotepadText, Route } from "lucide-react";

export const navList = [
  {
    id: 1,
    title: "Marathon",
    url: "/dashboard/marathon",
    icon: Route,
  },
  {
    id: 2,
    title: "Blog",
    url: "/dashboard/blog",
    icon: NotepadText,
  },
];

export const marathonCards = [
  { id: 1, title: "Total Counts", count: 10 },
  { id: 2, title: "Virtual Marathons", count: 8 },
  { id: 3, title: "Onsite Marathons", count: 2 },
];


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
 
export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]