// import { cn } from "@/lib/utils";
import { DockProps, DockIconProps } from "../types"; // Importa los tipos desde el archivo `types.ts`
// import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

function Dock(
  {
    className,
    children,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    ...props
  }: DockProps,
  ref: React.Ref<HTMLDivElement>
) {
  const mouseX = useMotionValue(Infinity);

  function renderChildren() {
    return React.Children.map(children, (child: any) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          mouseX,
          magnification,
          distance,
        } as DockIconProps);
      }
      return child;
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={className}
      //   className={cn(dockVariants({ className }))}
    >
      {renderChildren()}
    </motion.div>
  );
}

function DockIcon({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={
        // cn(
        // "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
        //   )
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon };
