import "./App.css";
import {
  ArcRotateCamera,
  Color3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Vector3,
} from "@babylonjs/core";
import SceneComponent from "./sceneComponent";

function App() {
  const onSceneReady = (scene) => {
    const camera = new ArcRotateCamera(
      "Camera",
      0,
      0,
      10,
      new Vector3(0, 0, 0),
      scene
    );

    camera.setPosition(new Vector3(0, 0, 20));

    const canvas = scene.getEngine().getRenderingCanvas();

    camera.attachControl(canvas, true);

    const light1 = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    light1.intensity = 0.7;

    const light2 = new HemisphericLight("light", new Vector3(0, -1, 0), scene);
    light2.intensity = 0.7;

    const light3 = new HemisphericLight("light", new Vector3(0, 0, 0), scene);
    light3.intensity = 0.1;

    const mat = new StandardMaterial("", scene);

    mat.diffuseColor = new Color3(1, 0, 0); // Red color

    let box = MeshBuilder.CreateBox("box", { size: 4 }, scene);

    box.material = mat;

    canvas.addEventListener("pointerdown", function () {
      console.log("Mouse button pressed");
    });

    canvas.addEventListener("pointerup", function () {
      console.log("Mouse button released");
    });
  };

  return (
    <>
      <SceneComponent id="canvas" antialias onSceneReady={onSceneReady} />
    </>
  );
}

export default App;
