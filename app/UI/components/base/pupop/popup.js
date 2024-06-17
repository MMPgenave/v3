"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/UI/components/ui/dialog";
import { Input } from "@/app/UI/components/ui/input";
import { Button } from "@/app/UI/components/ui/button";
import Image from "next/image";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { routes } from "@/app/lib/config/routes";
export function DialogDemo() {
  const [inputValue, setinputValue] = useState("");
  const HandlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(routes.ADDFRIENDS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: inputValue,
        }),
      });
      const data = await res.json();
      if (res.statusCode === 422) {
        toast(` ${data.message}`);

        return {
          status: "error",
          message: data.message,
          errors: data.errors,
        };
      }
      if (data.Status !== "success") {
        toast(` ${data.message}`);

        return {
          status: "error",
          message: data.message,
        };
      } else if (data.Status === "success") {
        toast(` successfully friend added`);

        return;
      }
    } catch (error) {
      console.log("error in Sign Up", error);
    }
  };

  return (
    <div className="absolute top-[22rem] right-0 ">
      <Dialog>
        <DialogTrigger asChild>
          <Image src="/icons/add-friends-7.svg" width={50} height={50} alt="add" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-50">
          <DialogHeader>
            <DialogTitle>Add Friends with ID</DialogTitle>
          </DialogHeader>
          <form className="flex flex-col items-center gap-3 w-full " onSubmit={(e) => HandlerSubmit(e)}>
            <Input
              id="name"
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
              className=" focus:none "
              placeholder="Friend ID"
            />

            <Button type="submit" className="bg-blue-violet w-full text-md text-slate-100">
              Add
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
