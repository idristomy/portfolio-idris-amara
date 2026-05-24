"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";

type Phase = "covering" | "covered" | "revealing" | "idle";
type Ctx = { navigate: (href: string) => void; mountContent: boolean };

const TransitionContext = createContext<Ctx>({
  navigate: () => {},
  mountContent: true,
});
export const usePageTransition = () => useContext(TransitionContext);

// Renders the page content only once the curtain begins opening, so each
// page's own animations start when the opening animation runs (not hidden
// behind the curtain).
export function RevealGate({ children }: { children: React.ReactNode }) {
  const { mountContent } = usePageTransition();
  return <>{mountContent ? children : null}</>;
}

const PANELS = 5;
const reveal = [0.76, 0, 0.24, 1] as const;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("covered");
  const targetRef = useRef<string | null>(null);

  // First load: panels start covering, then reveal after a brief hold.
  useEffect(() => {
    const t = setTimeout(() => setPhase("revealing"), 800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After a real navigation lands on the new route, reveal it.
  useEffect(() => {
    if (targetRef.current && pathname === targetRef.current) {
      targetRef.current = null;
      const t = setTimeout(() => setPhase("revealing"), 120);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // Lock scroll while the curtain is on screen.
  useEffect(() => {
    document.body.style.overflow = phase === "idle" ? "" : "hidden";
  }, [phase]);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname || phase !== "idle") return;
      targetRef.current = href;
      setPhase("covering");
    },
    [pathname, phase]
  );

  const covered = phase === "covering" || phase === "covered";
  const panelY = covered ? "0%" : "-100%";
  // Keep the current page mounted while closing; unmount only once fully
  // covered so the incoming page mounts fresh as the curtain opens.
  const mountContent = phase !== "covered";

  const handleComplete = (i: number) => {
    if (i !== PANELS - 1) return;
    if (phase === "covering") {
      setPhase("covered");
      if (targetRef.current) router.push(targetRef.current);
    } else if (phase === "revealing") {
      setPhase("idle");
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate, mountContent }}>
      {children}

      {/* Curtain panels */}
      <div className="fixed inset-0 z-[300] flex pointer-events-none">
        {Array.from({ length: PANELS }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full bg-slate-950 border-r border-purple-500/10 last:border-r-0"
            initial={{ y: "0%" }}
            animate={{ y: panelY }}
            transition={{
              duration: 0.55,
              ease: phase === "covering" ? ease : reveal,
              delay: i * 0.06,
            }}
            onAnimationComplete={() => handleComplete(i)}
          />
        ))}
      </div>

      {/* Name + underline (visible while covered) */}
      <motion.div
        className="fixed inset-0 z-[301] flex flex-col items-center justify-center pointer-events-none"
        dir="ltr"
        initial={{ opacity: 0 }}
        animate={{ opacity: covered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-white">Idris</span>{" "}
          <span className="text-purple-500">Amara</span>
        </h1>
        <motion.div
          className="h-1 bg-purple-500 rounded-full mt-4"
          initial={{ width: 0 }}
          animate={{ width: covered ? 200 : 0 }}
          transition={{ duration: 0.4, ease }}
        />
      </motion.div>
    </TransitionContext.Provider>
  );
}
