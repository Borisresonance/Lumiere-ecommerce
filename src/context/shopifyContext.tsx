"use client";

import { createContext, useContext, ReactNode } from "react";
import { GraphQLClient } from "graphql-request";

// Environment variables type check
if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN) {
  throw new Error("NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN is not defined");
}
if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
  throw new Error("NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN is not defined");
}

// Create the GraphQL client
const shopifyClient = new GraphQLClient(
  `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  }
);

// Context type
type ShopifyContextType = {
  client: GraphQLClient;
};

// Create context
const ShopifyContext = createContext<ShopifyContextType | null>(null);

// Provider component
export function ShopifyProvider({ children }: { children: ReactNode }) {
  return (
    <ShopifyContext.Provider value={{ client: shopifyClient }}>
      {children}
    </ShopifyContext.Provider>
  );
}

// Hook to use the context
export function useShopify() {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error("useShopify must be used within a ShopifyProvider");
  }
  return context;
}
