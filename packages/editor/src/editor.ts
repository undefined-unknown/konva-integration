import Konva from "konva";
export function createEditor(containerId: string) {
  const stage = new Konva.Stage({
    container: containerId,
    width: 500,
    height: 500,
  });

  const layer = new Konva.Layer();
  const rect = new Konva.Rect({
    x: 20,
    y: 20,
    width: 100,
    height: 50,
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
  });
  const rect2 = new Konva.Rect({
    x: 20,
    y: 40,
    width: 100,
    height: 50,
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
  });

  layer.add(rect);
  layer.add(rect2);
  stage.add(layer);

  // 你的编辑器初始化代码return stage;}
}
