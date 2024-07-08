"use client";
import { useState, useRef, useEffect } from "react";
import { Player } from "@/app/lib/scripts/backgammon/util";
import styled from "styled-components";
import { CheckerStack } from "./checker-stack";
import { Dice } from "./dice";
import { BoardButtons } from "./board-buttons";
import woodTexture from "@/app/lib/assets/img/wood-texture.jpg";

const Board = styled.div`
  margin: auto;
  background-image: url("/img/wood-texture.jpg");
  background-position: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  height: 100%;
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr) 50px minmax(0, 1fr);
  grid-column-gap: 5px;
  grid-template-areas:
    "top-left p13 p14 p15 p16 p17 p18 top-mid p19 p20 p21 p22 p23 p24 top-right"
    "mid-left ui-l ui-l ui-l ui-l ui-l ui-l mid-mid ui-r ui-r ui-r ui-r ui-r ui-r mid-right"
    "bot-left p12 p11 p10 p9 p8 p7 bot-mid p6 p5 p4 p3 p2 p1 bot-right";
`;

const BoardChild = styled.div`
  grid-area: ${(props) => props.$gridArea};
  background-color: ${(props) => props.$canMoveTo && "gray"} !important;
  cursor: ${(props) => (props.$canMoveFrom || props.$canMoveTo) && "pointer"};
`;

const Pip = styled(BoardChild)`
  margin-top: ${(props) => props.$reverse && "15px"};
  margin-bottom: ${(props) => !props.$reverse && "15px"};
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${(props) =>
      props.$bg === "dark"
        ? "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDYwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwIiB5MT0iMCIgeDI9IjUwIiB5Mj0iNTAwIiBpZD0iZ3JhZGllbnQtMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IHJnYigyMS45NjElIDExLjM3MyUgNS4wOTglKSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiByZ2IoMTcuMTI4JSA2Ljc5NjMlIDAlKSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGc+CiAgICA8cG9seWdvbiBwb2ludHM9IjUwIDUwMCAxMDAgMCAwIDAgNTAgNTAwIiBzdHlsZT0icGFpbnQtb3JkZXI6IHN0cm9rZTsgZmlsbC1ydWxlOiBub256ZXJvOyBzdHJva2Utd2lkdGg6IDVweDsgc3Ryb2tlOiByZ2IoMjU1LCAyMjgsIDE0MCk7IGZpbGw6IHVybCgnI2dyYWRpZW50LTEnKTsiLz4KICA8L2c+Cjwvc3ZnPg=="
        : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDYwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwIiB5MT0iMCIgeDI9IjUwIiB5Mj0iNTAwIiBpZD0iZ3JhZGllbnQtMCIgc3ByZWFkTWV0aG9kPSJwYWQiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiByZ2IoMTAwJSA5Mi45NDElIDcxLjM3MyUpIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IHJnYigyNTUsIDIyNiwgMTMxKTsiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnPgogICAgPHBvbHlnb24gcG9pbnRzPSI1MCA1MDAgMTAwIDAgMCAwIDUwIDUwMCIgc3R5bGU9InBhaW50LW9yZGVyOiBzdHJva2U7IGZpbGwtcnVsZTogbm9uemVybzsgc3Ryb2tlLXdpZHRoOiA1cHg7IHN0cm9rZTogcmdiKDUzLCAyNiwgMTApOyBmaWxsOiB1cmwoJyNncmFkaWVudC0wJyk7Ii8+CiAgPC9nPgo8L3N2Zz4="});
    background-size: 100% 100%;
    transform: ${(props) => props.$reverse && "scaleY(-1)"};
  }
`;
const Bar = styled(BoardChild)`
  background-color: #351a09;
  background-image: url(${woodTexture});
  background-position: center;
  background-blend-mode: screen;
`;

const Off = styled(BoardChild)`
  background-color: #351a09;
  background-image: url(${woodTexture});
  background-position: center;
  background-blend-mode: screen;
`;

export function BackgammonBoard({
  player,
  boardState: { pips, off, turn, recentMove, dice, diceRolled, turnValidity },
  isTurn,
  doMove,
  getPossiblePips,
  flipOffWhite,
  applyTurn,
  undoMove,
  startingRollW,
  startingRollB,
  gameInfoButton,
}) {
  const [moving, setMoving] = useState(false);
  const [sourcePip, setSourcePip] = useState(null);
  const [highlightedPips, setHighlightedPips] = useState({});
  // console.log(`dice:${JSON.stringify(dice)}`);

  const clearMove = () => {
    setHighlightedPips({});
    setSourcePip(null);
    setMoving(false);
  };

  const startMove = (from) => {
    if (isTurn && pips[from].top === turn && pips[from].size > 0) {
      setMoving(true);
      setSourcePip(from);
      setHighlightedPips(getPossiblePips(from));
    }
  };
  const [index, setindex] = useState(0);
  // console.log(`index:${index}`);
  const handleClickPip = (clickedPip) => {
    // console.log(`highlightedPips :${JSON.stringify(highlightedPips)}`);
    // console.log(`clickedPip:${JSON.stringify(clickedPip)}`);
    // console.log(`sourcePip:${JSON.stringify(sourcePip)}`);
    // console.log(`moving:${JSON.stringify(moving)}`);

    let correctedClickedPip;
    if (turn === Player.white) {
      // console.log("white moves");
      correctedClickedPip = clickedPip + dice[index];
      // console.log(`correctedClickedPip:${correctedClickedPip}`);
    } else {
      // console.log("black moves");
      correctedClickedPip = clickedPip - dice[index];
      // console.log(`correctedClickedPip:${correctedClickedPip}`);
    }
    if (!moving) startMove(clickedPip);
    else {
      // We are moving; complete the move if it's valid (and not to the bar)
      if (correctedClickedPip in highlightedPips && correctedClickedPip !== 0 && correctedClickedPip !== 25) {
        doMove(sourcePip, highlightedPips[correctedClickedPip]);
        clearMove();
      } else {
        // Try to start a new move if this one wasn't valid
        clearMove();
        startMove(clickedPip);
      }
      setindex(0);
    }
  };

  const handleClickOff = (clickedOff) => {
    if (moving) {
      if (clickedOff === Player.white && 25 in highlightedPips) {
        doMove(sourcePip, highlightedPips[25]);
      }

      if (clickedOff === Player.black && 0 in highlightedPips) {
        doMove(sourcePip, highlightedPips[0]);
      }

      clearMove();
    }
  };
  let titleStyle = {};
  let PlayerWhiteCss = {};
  if (player == 1) {
    titleStyle = {
      transform: "scale(1,-1)",
      height: "75%",
    };
    PlayerWhiteCss = `
      .sc-kFCroH {
    transform: scale(1, -1);
}
      `;
  } else {
    titleStyle = {
      transform: "scale(1, 1)",
    };
    PlayerWhiteCss = `
      .sc-kFCroH {
    transform: scale(1, 1);
}
      `;
  }

  return (
    <Board style={titleStyle}>
      <style jsx>{PlayerWhiteCss}</style>
      {pips.map((pip, i) => {
        if (i === 0 || i === 25)
          return (
            <Bar
              key={i}
              onClick={() => {
                handleClickPip(i);
              }}
              $canMoveFrom={isTurn && pip.top === turn && pip.size > 0}
              $gridArea={i === 0 ? "bot-mid" : "top-mid"}
            >
              <CheckerStack
                size={pip.size}
                top={pip.top}
                bot={pip.bot}
                $reverse={i > 12}
                recentMove={recentMove}
                pipNum={i}
                isSource={i === sourcePip}
              />
            </Bar>
          );

        return (
          <Pip
            key={i}
            onClick={() => {
              handleClickPip(i);
            }}
            $canMoveTo={i in highlightedPips}
            $canMoveFrom={isTurn && pip.top === turn && pip.size > 0}
            $gridArea={"p" + i}
            $reverse={i <= 12}
            $bg={i > 12 && i % 2 !== 0 ? "light" : i < 12 && i % 2 !== 0 ? " light" : "dark"}
          >
            <CheckerStack
              size={pip.size}
              top={pip.top}
              bot={pip.bot}
              $reverse={i > 12}
              recentMove={recentMove}
              pipNum={i}
              isSource={i === sourcePip}
            />
          </Pip>
        );
      })}
      {/* <!-- --> */}
      <Off
        $gridArea={flipOffWhite ? "top-left" : "top-right"}
        onClick={() => handleClickOff(Player.white)}
        $canMoveTo={25 in highlightedPips}
      >
        <CheckerStack
          size={off[Player.white]}
          top={Player.white}
          bot={Player.white}
          $reverse={false}
          recentMove={recentMove}
          pipNum={25}
        />
      </Off>
      <Off $gridArea="bot-right" onClick={() => handleClickOff(Player.black)} $canMoveTo={0 in highlightedPips}>
        <CheckerStack
          size={off[Player.black]}
          top={Player.black}
          bot={Player.black}
          $reverse={true}
          recentMove={recentMove}
          pipNum={0}
        />
      </Off>
      {/* <!-- --> */}
      <Off $gridArea={flipOffWhite ? "top-right" : "top-left"}></Off>
      <Off $gridArea="bot-left"></Off>
      {/* <!-- UI --> */}
      <Off $gridArea="mid-left">{gameInfoButton}</Off>
      <Off $gridArea="mid-right"></Off>
      <BoardChild $gridArea="ui-l">
        {startingRollW}
        {turn === Player.white && (
          <Dice
            setindex={setindex}
            index={index}
            initialDice={diceRolled}
            nut="white"
            remainingDice={dice}
            sourcePip={sourcePip}
          />
        )}
      </BoardChild>
      <BoardChild $gridArea="ui-l">
        {startingRollB}
        {turn === Player.black && (
          <Dice
            setindex={setindex}
            index={index}
            initialDice={diceRolled}
            nut="black"
            remainingDice={dice}
            sourcePip={sourcePip}
          />
        )}
      </BoardChild>
      <Bar $gridArea="mid-mid">
        {isTurn && (
          <BoardButtons
            applyTurn={applyTurn}
            undoMove={undoMove}
            canUndo={dice.length < diceRolled.length}
            turnValidity={turnValidity}
          />
        )}
      </Bar>
    </Board>
  );
}
