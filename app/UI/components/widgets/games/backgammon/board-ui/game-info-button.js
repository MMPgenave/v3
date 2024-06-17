"use client";
import styled from "styled-components";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { Player } from "@/app/lib/scripts/backgammon/util";
import { ConnectionStatus } from "../base";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Container = styled.div`
  background-color: #402d26;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const InfoButton = styled(Button)`
  width: 100%;
  padding: 0;
  font-weight: bold;
  background-color: #745138;
  color: #fff;

  &:hover,
  &:active,
  &:focus {
    background-color: #c49158;
  }
`;

const PopupDiv = styled.div`
  background-color: #eecfb1;
  padding: 10px;
`;
export function GameInfoButton({ player, score, roomName }) {
  console.log("gmeinfo button", player, score, roomName);
  const pathname = usePathname();
  return (
      <Container>
        <InfoButton label="Info" id="game-info-popover">
          &#8942;
        </InfoButton>
        <UncontrolledPopover
            placement="right"
            trigger="legacy"
            target="game-info-popover"
        >
          <PopupDiv >
            <PopoverHeader>
              Backgammon
              <span className="float-right ml-3">
            <ConnectionStatus />
          </span>
            </PopoverHeader>
            <PopoverBody>
              <div>
                Score:{" "}
                <strong>
                  White {score[Player.white]} – {score[Player.black]} Black
                </strong>
              </div>
              <div>
                {player
                    ? `Playing as ${Player.properties[player].colorName}`
                    : "Spectating"}
              </div>
              <hr />
              <Link href="/">&larr; Leave game</Link>
            </PopoverBody>
          </PopupDiv>

        </UncontrolledPopover>
      </Container>
  );
}
