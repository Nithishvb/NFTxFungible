"use client";

import { ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";

import { WalletConnectWalletAdapter } from "@walletconnect/solana-adapter";

const projectId =
  (process.env.REOWN_PROJECT_ID as string) ||
  "";

if (!projectId) {
  throw new Error("Invalid Project Id");
}

export const SolanaContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const endpoint = useMemo(
    () => clusterApiUrl(WalletAdapterNetwork.Testnet),
    []
  );

  const wallets = useMemo(
    () => [
      new WalletConnectWalletAdapter({
        network: WalletAdapterNetwork.Mainnet,
        options: {
          projectId: projectId,
        },
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
