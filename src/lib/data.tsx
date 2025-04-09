import { NotepadText, Route } from "lucide-react";
import Link from "next/link";

export const navList = [
  {
    id: 1,
    title: "Marathon",
    key: "marathon",
    url: "/dashboard/marathon",
    label: <Link href={"/dashboard/marathon"}>Marathon</Link>,
    icon: Route,
    subList: [
      {
        id: 1,
        title: "Leaderboard",
        key: "leaderboard",
        label: <span className="text-muted-foreground font-medium">Leaderboard</span>,
      },
    ],
  },
  {
    id: 2,
    title: "Blog",
    key: "blog",
    url: "/dashboard/blog",
    label: <Link href={"/dashboard/blog"}>Blog</Link>,
    icon: NotepadText,
  },
];

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;
