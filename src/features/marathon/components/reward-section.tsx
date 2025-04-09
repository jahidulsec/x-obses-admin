"use client";

import { Marathon } from "@/types/marathon";
import React from "react";
import { deleteReward } from "../server/marathons";
import { toast } from "sonner";
import { X } from "lucide-react";

export default function RewardSection({
  marathon,
  deletedRewardList,
  onDelete,
}: {
  marathon: Marathon;
  deletedRewardList: string[];
  onDelete: (id: string) => Promise<void>;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap mb-1">
      {marathon?.Rewards.map((item) => (
        <div
          className={`border bg-muted w-fit px-4 rounded-lg text-sm text-muted-foreground flex items-center gap-1 ${
            deletedRewardList.includes(item.id) ? " line-through" : ""
          }`}
          key={item.id}
        >
          <span>{item.text}</span>
          <button
            type="button"
            className={`hover:text-primary ${
              deletedRewardList.includes(item.id) ? "hidden" : ""
            }`}
            onClick={async () => {
              onDelete(item.id);
            }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
