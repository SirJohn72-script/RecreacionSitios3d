import { useLoader } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export interface ModelProps {
  modelPath: string;
}

export const Cars: React.FC<ModelProps> = ({ modelPath }): React.ReactNode => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const actions = useAnimations(gltf.animations!, gltf.scene);
  for (const action in actions.actions) {
    actions.actions[action]?.play();
  }

  return <primitive object={gltf.scene} />;
};

export const Floor: React.FC<ModelProps> = ({ modelPath }): React.ReactNode => {
  const gltf = useLoader(GLTFLoader, modelPath);

  return <primitive object={gltf.scene} />;
};
