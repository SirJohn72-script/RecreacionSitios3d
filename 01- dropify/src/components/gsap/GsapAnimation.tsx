import { useThree } from "@react-three/fiber";
import gsap, { Power2 } from "gsap";
import { useLayoutEffect } from "react";

export const GsapAnimation = ({ controlsRef }: { controlsRef: any }) => {
  const { camera } = useThree((state) => state);

  const timeline = gsap.timeline({ defaults: { duration: 1, ease: Power2.easeInOut } });
  const items = document.getElementsByClassName("anim-item");
  const items2 = document.getElementsByClassName("anim-item-2");

  useLayoutEffect(() => {
    timeline
      .to(
        controlsRef.current.target,
        {
          x: 1,
          y: 0,
          z: -0.1,
          duration: 2,
        },
        4
      )
      .to(
        camera.position,
        {
          x: 1,
          y: 0.1,
          z: 4,
          duration: 2,
        },
        4
      )
      .to(
        camera,
        {
          zoom: 6,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        4
      )
      .to(
        items,
        {
          opacity: 1,
          stagger: 0.2,
        },
        4
      )
      .to(
        items2,
        {
          opacity: 1,
          stagger: 0.2,
        },
        6
      );
  }, []);

  return null;
};
