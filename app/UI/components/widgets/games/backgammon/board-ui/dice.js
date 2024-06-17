"use client";
import styled from "styled-components";
import { Die } from "./die";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;

  > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export function Dice({ initialDice, remainingDice, sourcePip, nut, setindex, index }) {
  // console.log(`initialDice:${JSON.stringify(initialDice)}`);
  // console.log(`remainingDice:${JSON.stringify(remainingDice)}`);

  return (
    <Container className=" ">
      {initialDice.map((die, i) => (
        <div
          key={i}
          onClick={() => {
            setindex(remainingDice.length - 1);
          }}
          className={`rounded-md z-50 cursor-pointer ${remainingDice.length > 1 && index === i && " "}  `}
        >
          <Die
            number={die}
            key={i}
            used={
              initialDice.length === 4 ? i < initialDice.length - remainingDice.length : !remainingDice.includes(die)
            }
          />
        </div>
      ))}
    </Container>
  );
}
