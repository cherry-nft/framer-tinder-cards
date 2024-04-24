"use client";

import React from "react";
import { Alert } from "@/components/subframe/components/Alert.tsx";
import { Button } from "@/components/subframe/components/Button.tsx";

function InstallationSuccessPage() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-8 bg-default-background pt-12 pr-6 pb-12 pl-6">
      <img
        className="h-6 flex-none"
        src="https://res.cloudinary.com/subframe/image/upload/v1711417518/shared/fdb8rlpzh1gds6vzsnt0.svg"
      />
      <div className="flex w-full max-w-[576px] flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-4 rounded bg-brand-100 pt-12 pr-12 pb-12 pl-12">
          <span className="text-[40px] font-[600] leading-[40px] text-default-font">
            🥳
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Nice work, you&#39;re all set up!
            </span>
            <span className="text-body font-body text-subtext-color">
              Get started building your own UI below
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <Alert
            className="h-full w-full grow shrink-0 basis-0"
            icon="FeatherTerminalSquare"
            title="Components are synced"
            description="Run the CLI anytime you add or edit components"
          />
          <Alert
            className="h-full w-full grow shrink-0 basis-0"
            icon="FeatherClipboardCheck"
            title="Pages are copy & pasted"
            description="Export your code to a .tsx file and start developing"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center gap-6 bg-default-background pt-6 pr-6 pb-6 pl-6">
            <div className="flex w-full flex-col items-center">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-full flex-col items-center pt-1.5">
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <div className="flex h-full w-0.5 grow shrink-0 basis-0 flex-col items-start gap-2 bg-brand-600" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 pb-9">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Build your first page
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Choose from our designer-curated templates, or start from
                      scratch.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex h-full flex-col items-center">
                  <div className="flex h-1.5 w-0.5 flex-none flex-col items-start gap-2 bg-brand-600" />
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <div className="flex h-full w-0.5 grow shrink-0 basis-0 flex-col items-start gap-2 bg-brand-600" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 pb-9">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Export page code
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Copy &amp; paste generated code to your project, just like
                      you did here.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex h-full flex-col items-center">
                  <div className="flex h-1.5 w-0.5 flex-none flex-col items-start gap-2 bg-brand-600" />
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Write your business logic
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      The code is all yours! Refactor or add custom code to your
                      pixel-perfect UI.
                    </span>
                  </div>
                  <Button icon="FeatherCode">
                    Try adding an onClick handler to me!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallationSuccessPage;


// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import type { NextPage } from "next";
// import RotateIcon from "@icons/RotateIcon";
// import Counter from "@components/Counter";
// import { CardType, HistoryType, ResultType, SwipeType } from "types";
// import CARDS from "@data/cards";
// import Card from "@components/Card";
// import Head from "next/head";

// const Home: NextPage = () => {
//   const [cards, setCards] = useState(CARDS);
//   const [result, setResult] = useState<ResultType>({
//     like: 0,
//     nope: 0,
//     superlike: 0,
//   });
//   const [history, setHistory] = useState<HistoryType[]>([]);
//   // index of last card
//   const activeIndex = cards.length - 1;
//   const removeCard = (oldCard: CardType, swipe: SwipeType) => {
//     setHistory((current) => [...current, { ...oldCard, swipe }]);
//     setCards((current) =>
//       current.filter((card) => {
//         return card.id !== oldCard.id;
//       })
//     );
//     setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
//   };
//   const undoSwipe = () => {
//     const newCard = history.pop();
//     if (newCard) {
//       const { swipe } = newCard;
//       setHistory((current) =>
//         current.filter((card) => {
//           return card.id !== newCard.id;
//         })
//       );
//       setResult((current) => ({ ...current, [swipe]: current[swipe] - 1 }));
//       setCards((current) => [...current, newCard]);
//     }
//   };
//   return (
//     <div className="relative flex flex-col justify-center items-center w-full h-screen gradient">
//       <Head>
//         <title>Tinder cards with Framer motion</title>
//       </Head>
//       <AnimatePresence>
//         {cards.map((card, index) => (
//           <Card
//             key={card.name}
//             active={index === activeIndex}
//             removeCard={removeCard}
//             card={card}
//           />
//         ))}
//       </AnimatePresence>
//       {cards.length === 0 ? (
//         <span className="text-white text-xl">hi sher of Stack</span>
//       ) : null}
//       <footer className="absolute bottom-4 flex items-center space-x-4">
//         <div className="flex flex-col items-center space-y-2">
//           <button
//             disabled={history.length === 0}
//             className="w-14 h-14 rounded-full text-black bg-white inline-flex justify-center items-center disabled:cursor-not-allowed"
//             onClick={undoSwipe}
//             data-testid="undo-btn"
//             aria-label="Undo Swipe"
//           >
//             <RotateIcon strokeWidth={3} />
//           </button>
//           <span className="text-xs text-white">Undo</span>
//         </div>
//         <Counter label="Likes" count={result.like} testid="like-count" />
//         <Counter label="Nopes" count={result.nope} testid="nope-count" />
//         <Counter
//           label="Superlike"
//           count={result.superlike}
//           testid="superlike-count"
//         />
//       </footer>
//     </div>
//   );
// };

// export default Home;

