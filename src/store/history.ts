import { proxy } from "valtio";

export const historyStore = proxy({
    history: [],
    error: null,
    isLoading: false, // 初始化为false，将在请求开始时设置为true
    getHistory: async () => {
        try {
            historyStore.isLoading = true; // 请求开始前设置加载状态为true
            const response = await fetch('http://localhost:8080/view/history', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // 解析响应数据为JSON
            historyStore.history = data; // 将数据存入history状态中
        } catch (error) {
            historyStore.error = error.message; // 错误信息存入error状态中
        } finally {
            historyStore.isLoading = false; // 请求结束后重置加载状态为false
        }
    }
});