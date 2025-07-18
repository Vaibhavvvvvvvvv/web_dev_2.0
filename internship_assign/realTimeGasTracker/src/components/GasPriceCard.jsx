import useGasStore from "../store/gasStore";

const CHAIN_LABELS = {
  ethereum: "Ethereum",
  polygon: "Polygon",
  arbitrum: "Arbitrum",
};

export default function GasPriceCard({ chain }) {
  const gasData = useGasStore((state) => state[chain]);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-xl">
      <h3 className="text-lg font-semibold mb-2">{CHAIN_LABELS[chain]}</h3>
      <p>Base Fee: {gasData?.baseFee} Gwei</p>
      <p>Priority Fee: {gasData?.priorityFee} Gwei</p>
      <p>Last Updated: {gasData?.lastUpdated}</p>
    </div>
  );
}
