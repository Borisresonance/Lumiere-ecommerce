"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  const client = useContext(WixClientContext);
  if (!client) {
    throw new Error(
      "useWixClient must be used within WixClientContextProvider"
    );
  }
  return client;
};
