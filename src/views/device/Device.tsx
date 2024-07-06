// 设备监控页面

// 导入组件
import Indicator from "./Indicator";
import Condition from "./Condition";

export default function Device() {
  return (
    <div className="flex justify-center  w-full h-screen bg-white">
      <div className="flex flex-col justify-center items-center max-w-[1000px] min-w-[700px] pt-12">
        <span className="w-full px-5 py-3 rounded-md text-xl text-white font-blod bg-blue-500">
          全部系统设备监控
        </span>
        <div className="w-full mt-20">
          <Indicator />
        </div>
        <div className="w-full mt-20">
          <Condition />
        </div>
      </div>
    </div>
  );
}
