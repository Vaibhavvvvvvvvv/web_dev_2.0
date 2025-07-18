import { useGasStore } from '../store/gasStore';

export default function GasPriceTable() {
  const { chains, usdPrice, userInput } = useGasStore();

  const calculateCostUSD = (baseFee, priorityFee) => {
    const gasUsed = 21000;
    const totalGwei = baseFee + priorityFee;
    const ethCost = totalGwei * 1e-9 * gasUsed;
    return ethCost * usdPrice;
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Chain</th>
          <th>Base Fee (Gwei)</th>
          <th>Priority Fee (Gwei)</th>
          <th>USD Cost (for {userInput} ETH)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(chains).map(([name, data]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{data.baseFee.toFixed(2)}</td>
            <td>{data.priorityFee.toFixed(2)}</td>
            <td>${calculateCostUSD(data.baseFee, data.priorityFee).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
