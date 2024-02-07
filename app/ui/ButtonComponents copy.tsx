import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonComponentsProps {
  children: React.ReactNode;
}

const ButtonComponents: React.FC<ButtonComponentsProps> = ({ children }) => {
  return (
    <Button className="rounded-full w-[250px] bg-[#DF6724]">{children}</Button>
  );
};

export default ButtonComponents;
