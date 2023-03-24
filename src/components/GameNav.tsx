import Timer from "@/components/Timer";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";
import { Ref, useRef } from "react";

export default function GameNav({
  correct,
  crosswordRef,
}: {
  correct: boolean;
  crosswordRef: Ref<CrosswordProviderImperative>;
}) {
  const clearAll = () => {
    localStorage.removeItem("completed");
    (crosswordRef! as any).current.reset();
  };

  return (
    <>
      <div>
        Time Elapsed: <Timer start={!correct} />
      </div>
      <button aria-controls="gamenav" />
      <div id="gamenav" className="justify-content-end">
        <button onClick={clearAll}>Clear</button>
        <div title={"Reveal"}>
          <button>Square</button>
          <button>Word</button>
          <button>Puzzle</button>
        </div>
        <div title={"Check"}>
          <button>Square</button>
          <button>Word</button>
          <button>Puzzle</button>
        </div>
      </div>
    </>
  );
}
