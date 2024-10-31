import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

const dirs = ["top", "bottom", "left", "right"] as const;
type Dir = (typeof dirs)[number];

const opositeDir = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const orientation = {
  top: "vertical",
  bottom: "vertical",
  left: "horizontal",
  right: "horizontal",
};

export const vignetteZIndex = 10;

export const Vignette = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-vignette h-full w-full overflow-hidden">
      <VignetteStrip sizing="300px" pos="top" />
      {dirs.map((dir) => (
        <VignetteStrip key={dir} pos={dir} />
      ))}
    </div>
  );
};

const defaultSizes = {
  top: "100px",
  bottom: "100px",
  left: "0px", //10vw
  right: "0px", //10vw
};

const VignetteStrip = ({
  sizing,
  pos,
  className,
  ...rest
}: { sizing?: string; pos: Dir } & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "fixed z-vignette select-none from-transparent blur-[1px] backdrop-filter",
        orientation[pos] === "vertical" && "w-full",
        orientation[pos] === "horizontal" &&
          "h-full min-w-[120px] max-md:hidden",
        pos === "top" && "top-0 bg-gradient-to-t from-transparent to-[#111110]",
        pos === "bottom" &&
          "-bottom-px bg-gradient-to-b from-transparent to-[#111110]",
        // pos === "left" && "-left-6 bg-gradient-to-l from-transparent to-[#111110]",
        // pos === "right" && "-right-6 bg-gradient-to-r from-transparent to-[#111110]",
        className
      )}
      style={{
        [pos === "top" || pos === "bottom" ? "height" : "width"]:
          sizing || defaultSizes[pos],
        maskImage: `linear-gradient(to ${opositeDir[pos]}, #111110 20%, transparent)`,
      }}
      {...rest}
    />
  );
};
