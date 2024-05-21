{
  /* 预警 - 天气预报组件 */
}
import { useEffect, useMemo, useCallback } from "react";
{
  /*导入 全局状态 管理 */
}
import { useSnapshot } from "valtio";
import { weatherStore } from "../../../store/weather";

export default function Weather() {
  {
    /*创建 状态 快照 */
  }
  const weatherSnapShot = useSnapshot(weatherStore);
  {
    /*请求数据 */
  }
  useEffect(() => {
    weatherSnapShot.getCity();
  }, []);

  // 使用 useMemo 缓存天气信息
  const weatherInfo = useMemo(
    () => weatherSnapShot.weatherInfo,
    [weatherSnapShot.weatherInfo]
  );

  // 使用 useCallback 缓存模板
  const weatherDetail = useCallback(
    (label, value) => (
      <div className="flex">
        <p className="mr-2">{label}:</p>
        <p>{value}</p>
      </div>
    ),
    []
  );
  return (
    <div className="w-full h-fit p-10 bg-white overflow-hidden">
      <div className="grid grid-cols-4 gap-4 text-black">
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform-gpu hover:shadow-xl">
          {weatherInfo && (
            <>
              {weatherDetail("温度", weatherInfo.lives[0].temperature)}
              {weatherDetail("湿度", weatherInfo.lives[0].humidity)}
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform-gpu hover:shadow-xl">
          {weatherInfo && (
            <>
              {weatherDetail("风力", weatherInfo.lives[0].windpower)}
              {weatherDetail("风向", weatherInfo.lives[0].winddirection)}
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform-gpu hover:shadow-xl">
          {weatherInfo && (
            <>
              {weatherDetail("天气", weatherInfo.lives[0].weather)}
              {weatherDetail("海拔", weatherInfo.lives[0].altitude)}
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform-gpu hover:shadow-xl">
          {weatherInfo && (
            <>{weatherDetail("温度", weatherInfo.lives[0].temperature)}</>
          )}
        </div>
      </div>
    </div>
  );
}
