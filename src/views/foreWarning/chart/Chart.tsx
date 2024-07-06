import React, { useRef, useEffect, useMemo, useCallback } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartStore } from "../../../store/charts";
import { useSnapshot } from "valtio";
import useWebSocketHandler from "../../../hooks/useWebSocketHandler";
import { downloadScreenshot } from "../../../utils/screenshotUtils";

const WaveformChart: React.FC = () => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const chartSnapshot = useSnapshot(chartStore);

  const data = useMemo(
    () => chartSnapshot.chartData.map((point) => ({ ...point })),
    [chartSnapshot.chartData]
  );

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "line",
        height: "550px",
      },
      title: {
        text: null,
      },
      xAxis: {
        title: {
          text: "ID",
        },
        gridLineWidth: 1,
        gridLineColor: "#f0f0f0",
      },
      yAxis: {
        title: {
          text: "风险分数",
        },
        gridLineWidth: 1,
        gridLineColor: "#f0f0f0",
      },
      series: [
        {
          name: "Risk Score",
          data: data,
        },
      ],
    }),
    [data]
  );

  const handleDownload = useCallback(() => {
    if (waveformRef.current) {
      downloadScreenshot(waveformRef.current, "chart-screenshot.png");
    }
  }, []);
  useEffect(() => {
    if (waveformRef.current) {
      Highcharts.charts.forEach((chart) => {
        if (chart) {
          chart.series[0].setData(data, true);
        }
      });
    }
  }, [data]);

  return (
    <div className="relative w-full h-full">
      <button
        type="button"
        onClick={handleDownload}
        className="absolute right-2 lg:static ml-4 p-2 rounded-lg bg-yellow-400/20 text-orange-400 text-sm"
      >
        下载波形图
      </button>
      <div ref={waveformRef} className="h-full mt-6">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default WaveformChart;
