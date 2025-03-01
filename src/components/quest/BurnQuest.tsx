"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";
import NFTCard from "./NFTCard";
import { useWalletContext } from "@/context/WalletContext";
import "@reown/appkit-wallet-button/react";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Provider } from "@reown/appkit-adapter-solana/react";
import { useAppKitProvider } from "@reown/appkit/react";

export default function BurnQuestPage() {
  const [nfts, setNfts] = useState([]);

  const { handleOpenWallet, isConnected, address } = useWalletContext();
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  const metaplex =
    address !== undefined
      ? Metaplex.make(new Connection("https://api.testnet.solana.com")).use(
          walletAdapterIdentity({
            publicKey: new PublicKey(walletProvider.publicKey || ""),
          })
        )
      : undefined;

  useEffect(() => {
    if (isConnected && address) {
      fetchUserNft(address);
    }
  }, [address]);

  const handleBurnNft = () => {
    if (!isConnected) {
      handleOpenWallet();
      return;
    }
    console.log("address", address);
  };

  const fetchUserNft = async (address: string) => {
    try {
      if (metaplex) {
        const NFTs = await metaplex.nfts().findAllByOwner({
          owner: new PublicKey(address),
        });
        console.log("NFT data", NFTs);
        setNfts(NFTs);
      }
    } catch (err) {
      console.log("Erorr fetching NFTs", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-purple-400">NFTxFungible</h1>
          {isConnected && address ? (
            <Button className="px-4 py-2 rounded-full bg-white text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 hover:bg-white">
              <appkit-account-button />
            </Button>
          ) : (
            <Button
              onClick={handleOpenWallet}
              className="px-4 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
            >
              <Wallet className="mr-1 h-4 w-4" /> Connect Wallet
            </Button>
          )}
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Active Burn Quests</h2>
          <Card className="bg-gray-800 border-purple-500">
            <CardHeader>
              <CardTitle className="text-xl text-purple-400">
                Burn 5 Common DRiP NFTs to craft 1 Rare DRiP NFT
              </CardTitle>
              <CardDescription>
                Eligible: You have 7 Common DRiP NFTs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white">
              <p className="mb-2">
                <strong>NFT Requirements:</strong> 5 Common DRiP NFTs
              </p>
              <p>
                <strong>Reward:</strong> 1 Rare DRiP NFT
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-500"
                onClick={handleBurnNft}
              >
                Select NFTs to Burn
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Select NFTs to Burn</h2>
          {nfts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
            </div>
          ) : (
            <div className="w-full text-center text-2xl font-semibold">
              You currently have no NFTs in your wallet
            </div>
          )}
        </section>

        {/* <section className="space-y-6">
          <Button
            size="lg"
            className="w-full bg-red-600 hover:bg-red-500 text-white"
          >
            <Flame className="mr-2 h-5 w-5" /> Burn and Craft
          </Button>
        </section> */}
      </div>
    </div>
  );
}
