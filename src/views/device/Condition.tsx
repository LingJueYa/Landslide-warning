// 设备情况组件

// 导入数据
import { condition } from "../../data/condition";

export default function Condition() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {condition.map((item) => (
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-lg leading-6 text-gray-900">
                {item.name}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            {item.condition ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                近期情况 {item.condition}
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">正常</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
