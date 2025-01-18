import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function NFTCard() {
  return (
    <Card className="bg-gray-800 border-purple-500 overflow-hidden">
      <CardContent className="p-0">
        <Image
          src=""
          alt="NFT"
          className="w-full h-48 object-cover"
          height={200}
          width={200}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <span className="font-medium">DRiP NFT #1234</span>
        <Checkbox id="nft-1234" />
      </CardFooter>
    </Card>
  );
}
