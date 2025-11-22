import { useState, useEffect, useRef } from "react"; // 1. Import useRef

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fade, setFade] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // 2. New state for tracking interaction
  
  const fullText = "<Emmanuel.Dev />";
  const typingIntervalRef = useRef(null); // 3. Ref to hold the interval ID

  // 4. Function to start the typing process
  const startTyping = () => {
    // If we've already started, return.
    if (typingIntervalRef.current) return;

    setHasInteracted(true); // Signal that interaction has happened
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));

      if (index < fullText.length && fullText[index] !== " ") {
        // This is now safe to play because it's linked to the initial user click
        const keySound = new Audio("/typing.mp3");
        keySound.volume = 0.3;
        // Add .catch() here to prevent console warnings even if the browser policy is extremely strict
        keySound.play().catch(() => {/* Autoplay prevented, but user clicked, so ignore */}); 
      }

      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setFade(true);

        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 90);
    
    typingIntervalRef.current = interval; // Store the interval ID
  };
  
  // 5. Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // 6. Conditional rendering based on user interaction
  return (
    <div
      className={`
        fixed inset-0 z-50 
        bg-[#05070A] 
        flex flex-col items-center justify-center 
        text-blue-400
        transition-opacity duration-700 
        ${fade ? "opacity-0" : "opacity-100"}
        h-[100dvh] w-full
        px-4 
      `}
    >
        
      {/* 7. Show the button until interaction happens */}
      {!hasInteracted ? (
        <button
          onClick={startTyping} // <-- User click starts everything
          className="
            px-8 py-3 
            bg-blue-600 hover:bg-blue-700 
            text-white font-semibold 
            rounded-lg shadow-lg 
            transition duration-300 
            uppercase tracking-wider
          "
        >
          Click to Enter
        </button>
      ) : (
        <>
          {/* Floating Logo */}
          <div className="mb-6 animate-bounce-slow">
            <div className="
              w-16 h-16 sm:w-20 sm:h-20 
              rounded-full 
              bg-blue-500/20 
              flex items-center justify-center 
              border border-blue-500/30 
              shadow-lg
            ">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400">
                E
              </span>
            </div>
          </div>

          {/* Typing Effect */}
          <div className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-mono font-bold 
            mb-6 
            flex items-center
            text-center
            max-w-[90%]
          ">
            {text}
            <span className="animate-blink ml-1">|</span>
          </div>

          {/* Loading Bar */}
          <div className="w-[180px] sm:w-[220px] h-[3px] bg-blue-500/10 overflow-hidden rounded">
            <div className="h-full w-[45%] bg-blue-500 animate-loading-bar shadow-[0_0_12px_#3b82f6]"></div>
          </div>
        </>
      )}
    </div>
  );
};