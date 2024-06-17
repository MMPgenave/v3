"use client";

import { setShowModal } from "@/app/lib/redux/features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { Modal } from "../../components/widgets";

export const Body = ({ children, style }) => {
  const { show } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const ToggleModal = () => {
    dispatch(setShowModal(!show));
  };
  return (
    <body className={`${style} ${show ? "overflow-hidden" : ""}`}>
      {children}
      <Modal show={show} toggleShow={ToggleModal} />
    </body>
  );
};
