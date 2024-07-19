{
  /*截图函数 */
}
import domtoimage from "dom-to-image";

{
  /*下载图片 */
}
export const downloadScreenshot = (element, filename = "screenshot.png") => {
  if (element) {
    domtoimage
      .toPng(element)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = filename;
        link.click();
      })
      .catch((error) => {
        console.error("Error taking screenshot:", error);
      });
  }
};
