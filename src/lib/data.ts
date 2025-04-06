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
