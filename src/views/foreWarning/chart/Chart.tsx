{
  /* 预警 - 图表组件 */
}
{
  /*导入 图表 组件 */
}
import { Line } from "@ant-design/plots";

export default function Chart() {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-connect-nulls.json",
      transform: [
        {
          type: "map",
          callback: (d) => ({
            ...d,
            close: new Date(d.date).getUTCMonth() < 3 ? NaN : d.close,
          }),
        },
      ],
    },
    height: 300,
    xField: (d) => new Date(d.date),
    yField: "close",
    connectNulls: {
      connect: true,
      connectStroke: "#aaa",
    },
  };
  return (
    <div className="w-full h-fit  p-10">
      <Line {...config} />
    </div>
  );
}
