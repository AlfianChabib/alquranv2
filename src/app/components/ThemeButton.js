"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-[#0A5356] p-2 rounded-lg text-[#E3F5F8]"
    >
      {resolvedTheme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={1.5}
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M19.9604 12.7596C19.3268 14.8283 18.0571 16.6444 16.3319 17.9495C14.8173 19.0897 13.0149 19.7851 11.127 19.9577C9.23917 20.1302 7.3406 19.7731 5.64441 18.9263C3.94822 18.0796 2.52154 16.7767 1.52452 15.164C0.527497 13.5513 -0.000411107 11.6926 4.79949e-05 9.79642C-0.00676793 7.58323 0.712554 5.42892 2.04766 3.66399C3.35246 1.93842 5.16814 0.668437 7.23632 0.0347474C7.37263 -0.00723376 7.5178 -0.0112538 7.65623 0.0231198C7.79465 0.0574933 7.92109 0.12896 8.02194 0.229833C8.12279 0.330707 8.19424 0.457171 8.22861 0.595625C8.26297 0.734078 8.25895 0.879283 8.21698 1.01562C7.76474 2.51188 7.72682 4.10282 8.10727 5.61893C8.48771 7.13504 9.27226 8.51951 10.3773 9.62482C11.4824 10.7301 12.8665 11.5148 14.3823 11.8954C15.8981 12.2759 17.4887 12.238 18.9846 11.7856C19.1209 11.7437 19.2661 11.7396 19.4045 11.774C19.5429 11.8084 19.6694 11.8798 19.7702 11.9807C19.8711 12.0816 19.9425 12.2081 19.9769 12.3465C20.0113 12.485 20.0072 12.6302 19.9653 12.7665L19.9604 12.7596Z"
            fill="#E3F5F8"
          />
        </svg>
      )}
    </button>
  );
}
