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
import { useRouter } from "next-nprogress-bar";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { addMarathon } from "../action/marathon";
import { ErrorMessage } from "@/components/text/error-message";
import { MultiInput } from "@/components/inputs/mulit-input";

const MarathonForm = ({ onClose }: { onClose: () => void }) => {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [rewards, setRewards] = useState<string | undefined>("");

  const [data, action] = useFormState(addMarathon, null);

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
        <Input name="title" placeholder="Type marathon title." />
        {data?.error && <ErrorMessage message={data.error.title} />}
      </p>

      <p>
        <Label>Description</Label>
        <Textarea
          placeholder="Type your description here."
          name="description"
        />
        {data?.error && <ErrorMessage message={data.error.description} />}
      </p>
      <p>
        <Label>About</Label>
        <Textarea placeholder="Type your about here." name="about" />
        {data?.error && <ErrorMessage message={data.error.about} />}
      </p>
      <p>
        <Label>Distance (KM)</Label>
        <Input
          type="number"
          name="distanceKm"
          placeholder="Type marathon distance."
        />
        {data?.error && (
          <ErrorMessage message={"Enter a valid number of distance in km"} />
        )}
      </p>
      <p>
        <Label>Type</Label>
        <Select name="type" onValueChange={(value) => setType(value)}>
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
        {data?.error && <ErrorMessage message={"Select a type"} />}
      </p>
      {type === "onsite" && (
        <p>
          <Label>Location</Label>
          <Input
            name="location"
            placeholder="Type your marathon location here."
          />
          {data?.error && <ErrorMessage message={"Enter a location"} />}
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

        <input
          type="hidden"
          name="startDate"
          value={startDate?.toUTCString()}
        />

        {data?.error && <ErrorMessage message={data?.error.startDate} />}
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

        <input type="hidden" name="endDate" value={endDate?.toUTCString()} />

        {data?.error && <ErrorMessage message={"Select a date of marathon"} />}
      </p>
      <p>
        <Label>Image</Label>
        <Input type="file" name="imagePath" />
        {data?.error && <ErrorMessage message={data?.error.imagePath} />}
      </p>

      <p>
        <Label>Rewards</Label>

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
