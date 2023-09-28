import { useRef, useLayoutEffect } from "react";

export const Lights = () => {
  const light = useRef<any>(null);

  useLayoutEffect(() => {
    // Ajustar el normal bias
    light.current.shadow.normalBias = 0.01; // Ajusta este valor según tus necesidades

    // Configurar el mapa de sombras
    light.current.shadow.mapSize.width = 2048;
    light.current.shadow.mapSize.height = 2048;
    light.current.shadow.camera.left = -3;
    light.current.shadow.camera.right = 3;
    light.current.shadow.camera.top = 3;
    light.current.shadow.camera.bottom = -3;
  }, []);

  return <directionalLight ref={light} position={[10, 10, 10]} intensity={3.5} castShadow />;
};
