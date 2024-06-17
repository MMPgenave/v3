"use client";
import styled from "styled-components";
import { Button } from "./button";
import { TurnMessage } from "@/app/lib/scripts/backgammon/util";

const Buttons = styled.div`
    height: 130%;
    width: 700%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    background-color: transparent;
    padding: 5px 0;
    margin: 0px 28px;
    gap: 30%;
`;

const BoardButton = styled(Button)`
  font-weight: bold;
  padding: 0 0.5em;
`;

export function BoardButtons({ applyTurn, undoMove, canUndo, turnValidity }) {
    return (
        <Buttons>
            <BoardButton
                onClick={applyTurn}
                disabled={turnValidity <= 0}
                label={TurnMessage.properties[turnValidity].text}
            >
                &#10003;
            </BoardButton>
            <BoardButton onClick={undoMove} disabled={!canUndo} label="Undo move">
                &#8634;
            </BoardButton>
        </Buttons>
    );
}
