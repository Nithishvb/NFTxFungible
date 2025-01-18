import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flame, Wallet } from "lucide-react";
import NFTCard from "./NFTCard";

export default function BurnQuestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-purple-400">NFTxFungible</h1>
          <Button
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
          >
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
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
            <CardContent>
              <p className="mb-2">
                <strong>NFT Requirements:</strong> 5 Common DRiP NFTs
              </p>
              <p>
                <strong>Reward:</strong> 1 Rare DRiP NFT
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-500">
                Select NFTs to Burn
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Select NFTs to Burn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </div>
        </section>

        <section className="space-y-6">
          <Button
            size="lg"
            className="w-full bg-red-600 hover:bg-red-500 text-white"
          >
            <Flame className="mr-2 h-5 w-5" /> Burn and Craft
          </Button>
        </section>

        {/* Transaction Status - This would be conditionally rendered based on transaction state */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Transaction Status</h2>
          <Card className="bg-gray-800 border-green-500">
            <CardHeader>
              <CardTitle className="text-xl text-green-400">Success!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your NFTs have been successfully burned and a new Rare DRiP NFT
                has been crafted.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
