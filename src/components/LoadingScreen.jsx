import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fade, setFade] = useState(false);

  const fullText = "<Emmanuel.Dev />";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));

      // play sound per character
      if (index < fullText.length && fullText[index] !== " ") {
        const keySound = new Audio("/typing.mp3");
        keySound.volume = 0.3;
        keySound.play();
      }

      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setFade(true); // fade out

        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#05070A] flex flex-col items-center justify-center text-blue-400
      transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}
    >

      {/* Floating Logo */}
      <div className="mb-6 animate-bounce-slow">
        <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-lg">
          <span className="text-3xl font-bold text-blue-400">E</span>
        </div>
      </div>

      {/* Typing Effect */}
      <div className="text-4xl sm:text-5xl font-mono font-bold mb-6 flex items-center">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-[220px] h-[3px] bg-blue-500/10 overflow-hidden rounded">
        <div className="h-full w-[45%] bg-blue-500 animate-loading-bar shadow-[0_0_12px_#3b82f6]"></div>
      </div>
    </div>
  );
};
