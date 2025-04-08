"use client";

import { Form, FormSubmitButton } from "@/components/forms/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { addMarathon, updateMarathon } from "../action/marathon";
import { ErrorMessage } from "@/components/text/error-message";
import { MultiInput } from "@/components/inputs/mulit-input";
import { Marathon } from "@/types/marathon";
import Image from "next/image";
import { X } from "lucide-react";
import { deleteReward } from "../server/marathons";

const MarathonForm = ({
  onClose,
  marathon,
}: {
  onClose: () => void;
  marathon?: Marathon;
}) => {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [rewards, setRewards] = useState<string | undefined>("");
  const [deletedRewardList, setDeletedRewardList] = useState<string[]>([]);

  const [data, action] = useFormState(
    marathon ? updateMarathon.bind(null, marathon.id) : addMarathon,
    null
  );

  useEffect(() => {
    if (data?.toast) {
      toast.error(data.toast);
    } else if (data?.sucess) {
      toast.success(data?.sucess);
      onClose();
    }
  }, [data]);

  return (
    <Form action={action} className="flex flex-col gap-5 [&_p_input]:mt-1">
      <p>
        <Label>Title</Label>
        <Input
          name="title"
          placeholder="Type marathon title."
          defaultValue={marathon?.title}
        />
        {data?.error && <ErrorMessage message={data.error.title} />}
      </p>

      <p>
        <Label>Description</Label>
        <Textarea
          placeholder="Type your description here."
          name="description"
          defaultValue={marathon?.description}
        />
        {data?.error && <ErrorMessage message={data.error.description} />}
      </p>
      <p>
        <Label>About</Label>
        <Textarea
          placeholder="Type your about here."
          name="about"
          defaultValue={marathon?.about}
        />
        {data?.error && <ErrorMessage message={data.error.about} />}
      </p>
      <p>
        <Label>Distance (KM)</Label>
        <Input
          type="number"
          name="distanceKm"
          placeholder="Type marathon distance."
          defaultValue={marathon?.distanceKm}
        />
        {data?.error?.distancekm && (
          <ErrorMessage message={"Enter a valid number of distance in km"} />
        )}
      </p>
      <p>
        <Label>Type</Label>
        <Select
          name="type"
          onValueChange={(value) => setType(value)}
          defaultValue={marathon?.type}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="onsite">On site</SelectItem>
              <SelectItem value="virtual">Virtual</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {data?.error?.type && <ErrorMessage message={"Select a type"} />}
      </p>
      {type === "onsite" && (
        <p>
          <Label>Location</Label>
          <Input
            name="location"
            placeholder="Type your marathon location here."
            defaultValue={marathon?.location}
          />
          {data?.error?.location && (
            <ErrorMessage message={"Enter a location"} />
          )}
        </p>
      )}

      <p>
        <Label>Start Date</Label>
        <Input
          type="datetime-local"
          placeholder="Type your marathon start date here."
          onChange={(e) => {
            if (e.target.value) {
              setStartDate(new Date(e.target.value));
            }
          }}
        />
        {marathon?.startDate && (
          <p className="text-sm text-muted-foreground">
            Start Date - {new Date(marathon?.startDate).toLocaleString()}
          </p>
        )}

        <input
          type="hidden"
          name="startDate"
          value={startDate?.toUTCString()}
        />

        {data?.error?.startDate && (
          <ErrorMessage message={data?.error.startDate} />
        )}
      </p>
      <p>
        <Label>End Date</Label>
        <Input
          type="datetime-local"
          placeholder="Type your marathon location here."
          onChange={(e) => {
            if (e.target.value) {
              setEndDate(new Date(e.target.value));
            }
          }}
        />

        {marathon?.endDate && (
          <p className="text-sm text-muted-foreground">
            End Date - {new Date(marathon?.endDate).toLocaleString()}
          </p>
        )}

        <input type="hidden" name="endDate" value={endDate?.toUTCString()} />

        {data?.error?.endDate && (
          <ErrorMessage message={"Select a date of marathon"} />
        )}
      </p>
      <p>
        <Label>Image</Label>
        <Input type="file" name="imagePath" />

        {/* default image */}
        {marathon?.imagePath && (
          <div className="relative min-w-30 w-30 h-20 mt-2 rounded-lg overflow-hidden">
            <Image
              fill
              objectFit="cover"
              src={marathon?.imagePath ?? ""}
              alt={marathon?.imagePath ?? ""}
            />
          </div>
        )}

        {data?.error && <ErrorMessage message={data?.error.imagePath} />}
      </p>

      <p>
        <Label>Rewards</Label>

        {/* reward section */}
        {marathon?.Rewards && (
          <div className="flex items-center gap-3 flex-wrap">
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
                    const response = await deleteReward(item.id);

                    if (response.data) {
                      toast.success(response.data.message);
                      setDeletedRewardList((prev) => {
                        return [...prev, item.id];
                      });
                    } else {
                      toast.error(response.error?.message);
                    }
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
        <MultiInput
          placeholder="Enter rewards using ; as separator"
          onValueChange={(value) => setRewards(value.join(";"))}
        />
        <input type="hidden" name="reward" value={rewards} />
        {data?.error && <ErrorMessage message={data?.error.reward} />}
      </p>

      <FormSubmitButton />
    </Form>
  );
};

export { MarathonForm };
