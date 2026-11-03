

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollingUpIcon() {
  const [scrollTopBtn, setScrollTopBtn] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopBtn(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        onClick={scrollTop}
        className={
          scrollTopBtn
            ? "Btn group w-9 h-9 flex justify-center items-center fixed border-none bg-accent-400 hover:bg-accent-300 rounded-lg transition-all duration-200 cursor-pointer bottom-4 right-4 z-120"
            : "hidden"
        }
      >
        <ArrowUp className="w-5 h-5 text-white transition-all duration-300 group-hover:-translate-y-0.5" />
        
      </button>
    </div>
  );
}
