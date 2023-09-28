import { useThree } from "@react-three/fiber";
import { Mesh } from "three";
import { useLayoutEffect } from "react";

export const AddShadows = () => {
  const { scene } = useThree((state) => state);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  return null;
};
