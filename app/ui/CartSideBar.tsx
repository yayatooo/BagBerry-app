import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosCart, IoMdClose } from "react-icons/io";
import clsx from "clsx";

interface OpenCartProps {
  opened: boolean;
  setOpened: (isOpen: boolean) => void;
}

function CartSideBar({ opened, setOpened }: OpenCartProps) {
  const clickCart = () => {
    setOpened(false);
  };

  return (
    <section
      className={clsx(
        "w-4/12 h-full bg-white backdrop-blur-md fixed z-50 top-0  transition-all",
        opened ? "right-0" : "-right-[200%]"
      )}
    >
      <div className="flex w-full justify-between items-center p-5 shadow-lg">
        <div className="flex items-center gap-6">
          <IoIosCart className="text-xl font-semibold" />
          <h1 className="text-xl font-semibold">Your Cart</h1>
        </div>
        <button onClick={() => setOpened(false)}>
          <IoMdClose className="text-xl font-semibold" />
        </button>
      </div>
      <div className="bg-gray-200 text-center">
        <h1 className="text-2xl py-36">Belum ada product</h1>
      </div>
      <div className="flex justify-between p-6 text-xl shadow-md">
        <h1>Total</h1>
        <h1>Rp. 0</h1>
      </div>
      <div className="m-6">
        <Button className="w-full bg-[#DF6724] text-white rounded-full text-xl">
          Order
        </Button>
      </div>
    </section>
  );
}

export default CartSideBar;
