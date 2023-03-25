import Timer from "@/components/Timer";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";
import { Ref, useRef } from "react";
import { BiGrid, BiShowAlt } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { CgCheckR } from "react-icons/cg";
import { TbColumns3, TbSquare } from "react-icons/tb";

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
		<div className="border-b border-neutral-200 flex flex-row items-center justify-between py-2 px-5">
			<div className="flex">
				Time Elapsed: <Timer start={!correct} />
			</div>
      <div className="flex justify-center items-center">
        <FiDelete className="w-8 h-8"/>
        <TbSquare className="w-5 h-5" title="clear square" />
        <TbColumns3 className="w-5 h-5" title="clear word" />
        <BiGrid title="clear puzzle" className="w-5 h-5"/>
        <CgCheckR className="w-8 h-8"/>
        <TbSquare title="check square" className="w-8 h-8"/>
        <TbColumns3 title="check word" className="w-8 h-8"/>
        <BiGrid title="check puzzle" className="w-8 h-8"/>
        <BiShowAlt className="w-8 h-8"/>
        <TbSquare title="show square" className="w-8 h-8"/>
        <TbColumns3 title="show word" className="w-8 h-8"/>
        <BiGrid title="show puzzle" className="w-8 h-8"/>
      </div>
		</div>
	);
}
