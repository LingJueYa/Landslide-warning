{
  /* 预警 - 地图组件 */
}
{
  /* 导入pigeon-maps */
}
import { Map, Marker } from "pigeon-maps";
{
  /* 导入 全局状态 管理 */
}
import { useSnapshot } from "valtio";
import { weatherStore } from "../../../store/weather";
import { divide } from "lodash";

export default function GPS() {
  {
    /*创建 状态 快照 */
  }
  const weatherSnapShot = useSnapshot(weatherStore);
  const lat = weatherSnapShot.lat;
  const lng = weatherSnapShot.lng;
  const defaultCenter: [number, number] = [lat, lng];
  return (
    <div className="w-full h-hit bg-white rounded-xl overflow-hidden">
      {lat ? (
        <Map height={320} defaultCenter={defaultCenter} defaultZoom={11}>
          <Marker width={50} anchor={defaultCenter} />
        </Map>
      ) : (
        <div className="py-32 text-center">正在获取位置信息...</div>
      )}
    </div>
  );
}
