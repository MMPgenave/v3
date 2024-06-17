"use client";
import React, { useEffect, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { routes } from "@/app/lib/config/routes";
import Image from "next/image";
import clsx from "clsx";
export const GlobalResult = () => {
  const searchParams = useSearchParams();
  const [isloading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const UserName = searchParams.get("UserName");
  useEffect(() => {
    const fetchResult = async () => {
      setResult([]);
      setIsLoading(true);
      try {
        const res = await fetch(routes.SEARCHUSERS, {
          method: "POST",
          headers: {
            "Contenst-Type": "application/json",
          },
          body: JSON.stringify({
            UserName,
          }),
        });
        const data = await res.json();
        // console.log(`data is ${JSON.stringify(data)}`);
        if (res.statusCode === 422) {
          return {
            status: "error",
            message: data.message,
            errors: data.errors,
          };
        }
        if (data.Status !== "success") {
          return {
            status: "error",
            message: data.message,
          };
        } else if (data.Status === "success") {
          setResult(data.Data.Users);
          return {
            status: "success",
            message: "search was Successful ",
          };
        }
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    if (UserName) {
      fetchResult();
    }
  }, [UserName]);

  return (
    <div
      className=" top-full z-10 mt-3 w-full rounded-xl
      py-5 shadow-sm "
    >
      <div className=" h-px" />
      <div className=" ">
        {isloading ? (
          <div className="flex flex-col items-center px-5">
            <ReloadIcon className="my-2 size-10 animate-spin text-primary-500" />
            <p className="text-dark200_light800 body-regular">Search in All Users </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {result.length > 0 ? (
              result.map((user) => {
                const userTypeStyle = clsx(
                  "capitalize",
                  user.Type === "Diamond" && "text-sky-blue",
                  user.Type === "Gold" && "text-neon-carrot",
                  user.Type === "Silver" && "text-slate-400",
                  user.Type === "Bronze" && "text-firebrick"
                );
                return (
                  <Link
                    key={user.id}
                    href={`/dashboard/users/${user.UserName}`}
                    className="flex justify-between w-full cursor-pointer items-center   px-1 py-2.5
                      "
                  >
                    <div className="flex items-center gap-2">
                      <Image src={user.Avatar} width={40} height={40} alt="avatar" className="rounded-full" />
                      <div className="flex flex-col ">
                        <div className="w-full p-1 ">{user.UserName}</div>
                        <div className={userTypeStyle}>
                          <i className="bi bi-award-fill "></i>
                          {user.Type}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="flex flex-col items-center px-5">
                <p className="text-dark200_light800 body-regular px-5 py-2.5"> No Result Found!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
