import Image from "next/image";

export default function NFTCard() {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur" />

      {/* Card content */}
      <div className="relative flex flex-col bg-[rgba(20,20,43,0.5)] backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600">
        {/* Image container */}
        <div className="aspect-square overflow-hidden p-3">
          <Image
            src={
              ""
            }
            className="w-full h-full object-cover rounded-lg"
            alt="nft-image"
            height={200}
            width={200}
          />
        </div>

        {/* Content container */}
        <div className="p-4 space-y-3">
          {/* Title and creator */}
          <div>
            <h3 className="font-bold text-lg text-white">{"COOLGUYZZ"}</h3>
            <p className="text-sm text-gray-400">{"Coolguyzz.io"}</p>
          </div>

          {/* Price information */}
          <div className="flex justify-between items-baseline">
            <div>
              <p className="text-lg font-semibold text-white">{"2"} SOL</p>
              <p className="text-xs text-gray-400">Floor Price</p>
            </div>
            <span
              className={`text-sm ${
                34.5 >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {34.5 >= 0 ? "+" : ""}
              {34.5}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
