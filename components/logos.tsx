"use client";
import {
  clamp,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";

const useBoundedScroll = (bounds: number) => {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    let diff = current - previous;
    const newScrollBounded = scrollYBounded.get() + diff;

    scrollYBounded.set(clamp(0, bounds, newScrollBounded));
  });
  return { scrollBounded: scrollYBounded, scrollYBoundedProgress };
};

function Logo({ logoAnimation = false }: { logoAnimation?: boolean }) {
  const { scrollYBoundedProgress } = useBoundedScroll(100);

  const dynamicSize = useTransform(
    scrollYBoundedProgress,
    [0, 1],
    ["1.5rem", "1.3rem"]
  );
  const animationVal = logoAnimation ? dynamicSize : "1.5rem";

  return (
    <Link
      href={"/"}
      className="cursor-pointer select-none hover:text-yellow-300"
    >
      <div className="flex items-center space-x-1 font-semibold ">
        <IoTicket className="w-10 h-10" />
        <motion.h1 style={{ fontSize: animationVal }}>
          Events In Kandy
        </motion.h1>
      </div>
    </Link>
  );
}

export default Logo;
