import CongratsModal from "@/components/CongratsModal";
import CrosswordComponent from "@/components/Crossword";
import GameNav from "@/components/GameNav";
import NavBar from "@/components/NavBar";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import dbConnect from "@/lib/mongoose";
import { Crossword } from "@/models/Crossword";
import { User } from "@/models/User";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

export default function CrosswordPage({
  crossword,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: session } = useSession();
  const [correct, setCorrect] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const crosswordRef = useRef<CrosswordProviderImperative>(null);

  return (
    <>
      <NavBar user={session ? session.user : null} />
      <div>
        <h1 className="text-center items-center">
          {JSON.parse(crossword).title}
        </h1>
      </div>
      <hr />
      <GameNav correct={correct} crosswordRef={crosswordRef} />
      <hr />
      {correct && (
        <>
          <CongratsModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      )}
      <CrosswordComponent
        data={crossword}
        correct={correct}
        setCorrect={setCorrect}
        setModalShow={setModalShow}
        cRef={crosswordRef}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  await dbConnect();

  const crossword = await Crossword.findOne({}, {}, { sort: { date: -1 } });
  const leaderboard = await User.find(
    { completed: { $gt: 0 } },
    { sort: { completed: -1 } }
  ).select("name completed today");

  return {
    props: {
      crossword: JSON.stringify(crossword),
      leaderboard: JSON.stringify(leaderboard),
    },
  };
};
