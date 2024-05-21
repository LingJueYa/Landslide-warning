{
  /*菜单 组件 */
}
import { useState, useMemo, useCallback } from "react";
{
  /*导入 配置 文件 */
}
import settings from "../../../public/json/setting.json";
{
  /*导入 全局 状态管理 */
}
import { useSnapshot } from "valtio";
import { isOpenMenuState } from "../../store/isOpenMenu";
{
  /*导入 Link 组件 */
}
import { useNavigate } from "react-router-dom";
{
  /*导入 图标 */
}
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  WarningOutlined,
  FundOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
{
  /*导入 目录、侧边栏 组件 */
}
import { Affix, Button, Menu, Layout } from "antd";
const { Sider } = Layout;

const iconMapping = {
  "<WarningOutlined />": <WarningOutlined />,
  "<FundOutlined />": <FundOutlined />,
  "<DeploymentUnitOutlined />": <DeploymentUnitOutlined />,
};

export default function Menus() {
  {
    /*创建全局状态快照 */
  }
  const isOpenMenuSnap = useSnapshot(isOpenMenuState);
  {
    /*创建 菜单组件 固定状态 */
  }
  const [top, setTop] = useState<number>(0);
  {
    /*获取 useNavigate 钩子函数，用于路由跳转 */
  }
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (url) => {
      navigate(url);
    },
    [navigate]
  );
  {
    /*定义 菜单 */
  }
  const items = useMemo(
    () =>
      settings.menu_link.items.map((item) => ({
        key: item.id,
        icon: iconMapping[item.icon],
        label: item.label,
        onClick: () => handleNavigate(item.url),
      })),
    [handleNavigate]
  );

  return (
    <Affix offsetTop={top}>
      <div className="w-auto h-screen bg-white overflow-hidden">
        <div className="flex flex-col justify-between h-full py-4 border-r border-gray-200">
          <div>
            <Sider trigger={null} collapsible collapsed={isOpenMenuSnap.fold}>
              <div className="flex justify-center">
                <span className="mb-6 text-xl text-black font-bold">
                  {isOpenMenuSnap.fold ? "🦺" : settings.name.project_name}
                </span>
              </div>
              <Menu
                defaultSelectedKeys={["1"]}
                mode="inline"
                inlineCollapsed={isOpenMenuSnap.fold}
                items={items}
              />
            </Sider>
          </div>
          <div className="flex justify-end pr-2">
            <Button
              type="primary"
              onClick={isOpenMenuSnap.isOpen}
              style={{ marginBottom: 16 }}
            >
              {isOpenMenuSnap.fold ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )}
            </Button>
          </div>
        </div>
      </div>
    </Affix>
  );
}
