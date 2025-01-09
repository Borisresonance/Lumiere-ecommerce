"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, ReactNode, useContext } from "react";

// Debug environment variables
if (typeof window !== "undefined") {
  console.log("Environment check:", {
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    nodeEnv: process.env.NODE_ENV,
  });
}

// Validation
if (!process.env.NEXT_PUBLIC_WIX_CLIENT_ID) {
  console.error("Missing WIX_CLIENT_ID in environment variables");
  throw new Error(
    "NEXT_PUBLIC_WIX_CLIENT_ID is not defined in environment variables"
  );
}

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,

    //current cart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,

    tokens: {
      refreshToken: JSON.parse(Cookies.get("refreshToken") || "{}"),
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

type WixClientType = ReturnType<typeof createClient>;

export const WixClientContext = createContext<WixClientType>(wixClient);

export const useWixClient = () => {
  const context = useContext(WixClientContext);
  if (!context) {
    throw new Error(
      "useWixClient must be used within WixClientContextProvider"
    );
  }
  return context;
};

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
