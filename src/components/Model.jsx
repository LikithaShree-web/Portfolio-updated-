import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Center } from "@react-three/drei";

export default function Model({ url = "/avatar-animated.glb", ...props }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, group);

  const [currentAction, setCurrentAction] = useState(null);

  // 🎯 Play animation function (clean + reusable)
  const playAnimation = (name) => {
    if (!actions || !actions[name]) return;

    // fade out previous
    if (currentAction && actions[currentAction]) {
      actions[currentAction].fadeOut(0.4);
    }

    // fade in new
    actions[name].reset().fadeIn(0.4).play();
    setCurrentAction(name);
  };

  // 🚀 Initial animation
  useEffect(() => {
  if (actions && names.length > 0) {
    const first = names[0];
    console.log("Playing:", first);

    actions[first]
      .reset()
      .fadeIn(0.5)
      .play();
  }
}, [actions, names]);

  // 🎲 Random animation loop (makes it feel alive)
  useEffect(() => {
    if (!names.length) return;

    const interval = setInterval(() => {
      const random = names[Math.floor(Math.random() * names.length)];
      playAnimation(random);
    }, 8000); // every 8 sec

    return () => clearInterval(interval);
  }, [names, currentAction]);

  // 🖱️ Click → Dance
  const handleClick = () => {
    if (names.includes("Dance")) {
      playAnimation("Dance");
    } else {
      const random = names[Math.floor(Math.random() * names.length)];
      playAnimation(random);
    }
  };

  // ⌨️ Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "d" && names.includes("Dance")) {
        playAnimation("Dance");
      }
      if (e.key === "w" && names.includes("Walking")) {
        playAnimation("Walking");
      }
      if (e.key === "i" && names.includes("Idle")) {
        playAnimation("Idle");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [names, currentAction]);

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <Center>
        <primitive object={scene} scale={2.5} position={[0, -2, 0]} />
      </Center>
    </group>
  );
}

useGLTF.preload("/avatar-animated.glb");