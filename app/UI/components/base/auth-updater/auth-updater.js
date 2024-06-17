"use client";

import { verifyToken } from "@/app/lib/redux/features/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { useEffect } from "react";

export const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  const { error, isLoggedIn } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  return <div className="hidden">AuthUpdater</div>;
};
