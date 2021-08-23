import { useEffect, useState } from "react";

function useKey(key) {
  // Keep track of key state
  const [pressed, setPressed] = useState(0);

  // Does an event match the key we're watching?
  const match = (event) => key.toLowerCase() == event.key.toLowerCase();

  // Event handlers
  // const onDown = event => {
  //     if (match(event)) setPressed(Math.round)
  // }

  const onUp = (event) => {
    if (match(event)) setPressed(Math.random());
  };

  // Bind and unbind events
  useEffect(() => {
    // window.addEventListener("keydown", onDown)
    window.addEventListener("keyup", onUp);
    return () => {
      // window.removeEventListener("keydown", onDown)
      window.removeEventListener("keyup", onUp);
    };
  }, [key]);

  return pressed;
}

export default useKey;
