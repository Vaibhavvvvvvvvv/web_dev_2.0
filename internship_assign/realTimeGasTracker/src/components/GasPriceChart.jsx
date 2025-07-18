import React, { useEffect, useRef } from 'react';
import { useGasStore } from '../store/gasStore';
import { createChart } from 'lightweight-charts';

const getThemeByTitle = (title) => {
  switch (title.toLowerCase()) {
    case 'ethereum gas price':
      return { background: '#f0f8ff', upColor: '#26a69a', downColor: '#ef5350' };
    case 'polygon gas price':
      return { background: '#f3e5f5', upColor: '#7e57c2', downColor: '#ab47bc' };
    case 'arbitrum gas price':
      return { background: '#e3f2fd', upColor: '#42a5f5', downColor: '#1e88e5' };
    default:
      return { background: '#ffffff', upColor: '#26a69a', downColor: '#ef5350' };
  }
};

const ChartSection = ({ title, data }) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const candleSeriesRef = useRef(null);

  useEffect(() => {
    const { background, upColor, downColor } = getThemeByTitle(title);

    // Destroy previous chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.remove();
    }

    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
      layout: {
        background: { color: background },
        textColor: '#000',
      },
      grid: {
        vertLines: { color: '#ddd' },
        horzLines: { color: '#ddd' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
      crosshair: {
        mode: 1,
      },
    });

    const series = chart.addCandlestickSeries({
      upColor,
      downColor,
      borderUpColor: upColor,
      borderDownColor: downColor,
      wickUpColor: upColor,
      wickDownColor: downColor,
    });

    chartInstanceRef.current = chart;
    candleSeriesRef.current = series;

    if (data.length > 0) {
      series.setData(data.slice(-50));
    }

    return () => chart.remove();
  }, [title]);

  useEffect(() => {
    if (candleSeriesRef.current) {
      candleSeriesRef.current.setData(data.slice(-50));
    }
  }, [data]);

  return (
    <div style={{ marginBottom: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <div ref={chartContainerRef} style={{ borderRadius: '8px', overflow: 'hidden', margin: 'auto' }} />
    </div>
  );
};

export default function GasPriceChart() {
  const chains = useGasStore((state) => state.chains);

  return (
    <div>
      <ChartSection title="Ethereum Gas Price" data={chains.ethereum.history} />
      <ChartSection title="Polygon Gas Price" data={chains.polygon.history} />
      <ChartSection title="Arbitrum Gas Price" data={chains.arbitrum.history} />
    </div>
  );
}
