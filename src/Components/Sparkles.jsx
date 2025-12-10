"use client";
import React, { useId, useEffect, useState, useCallback, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const SparklesCore = memo((props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  }, [controls]);

  // Optimized particle configuration
  const particleOptions = {
    background: {
      color: {
        value: background || "#0d47a1",
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 60, // Reduced from 120 for better performance
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false, // Already disabled, good for performance
        },
        resize: {
          enable: true,
          delay: 0.5, // Add debounce to resize events
        },
      },
      modes: {
        push: {
          quantity: 2, // Reduced from 4
        },
      },
    },
    particles: {
      color: {
        value: particleColor || "#ffffff",
      },
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: speed || 2,
        },
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      number: {
        density: {
          enable: true,
          width: 1920, // Optimized density calculation
          height: 1080,
        },
        value: particleDensity || 120,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: speed || 4,
          sync: false,
          mode: "auto",
          startValue: "random",
        },
      },
      shape: {
        type: "circle", // Circle is fastest to render
      },
      size: {
        value: {
          min: minSize || 1,
          max: maxSize || 3,
        },
      },
      // Removed all unnecessary properties for performance
    },
    detectRetina: true,
    smooth: true, // Enable smooth animations
    reduceDuplicates: true, // Prevent duplicate particles
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
      )}
    </motion.div>
  );
});

SparklesCore.displayName = "SparklesCore";