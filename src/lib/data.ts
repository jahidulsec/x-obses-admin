import { Bolt, LogOut, NotepadText, Route } from "lucide-react";

export const navList = [
  {
    id: 1,
    title: "Marathon",
    key: "marathon",
    url: "/dashboard/marathon",
    icon: Route,
  },
  {
    id: 2,
    title: "Blog",
    key: "blog",
    url: "/dashboard/blog",
    icon: NotepadText,
  },
];

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;
