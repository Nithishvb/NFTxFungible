"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useAppKit, useAppKitAccount } from "@/config/config";

interface WalletContextType {
  address: string | undefined;
  isConnected: boolean;
  handleOpenWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const modal = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const handleOpenWallet = () => {
    modal.open();
  };

  return (
    <WalletContext.Provider value={{ handleOpenWallet, address, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWalle must be used within a CounterProvider");
  }
  return context;
};
