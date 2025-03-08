import React from "react";
import { FizziLogo } from "@/components/FizziLogo";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="-mb-28 flex justify-center py-1">
      <FizziLogo className="h-20 z-10 cursor-pointer text-sky-800"/>
    </header>
  );
};
