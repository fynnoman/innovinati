import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLDivElement> & {
  strong?: boolean;
};

export const GlassPanel = forwardRef<HTMLDivElement, Props>(function GlassPanel(
  { className, strong, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx("glass", strong && "glass-strong", className)} {...props}>
      {children}
    </div>
  );
});
