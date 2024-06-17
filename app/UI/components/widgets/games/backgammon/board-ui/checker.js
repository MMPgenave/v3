"use client";
import { Player } from "@/app/lib/scripts/backgammon/util";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: #484848 2px solid;
  border-radius: 50%;
  box-shadow: ${(props) => props.glow && "0 0 0 5px gray"};

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border-radius: 50%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 50%;
  }
`;




const BaseWhite = styled.div`
  width: 100%;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: #acaaaa 2px solid;
  border-radius: 50%;
  box-shadow: ${(props) => props.glow && "0 0 0 5px gray"};

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border-radius: 50%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 50%;
  }
`;

const Black = styled(Base)`
  background: #232222;
  //background: linear-gradient(-30deg, #383838, #000);

  &::before {
    background: linear-gradient(8deg, #000, #626060);
  }

  &::after {
    background: linear-gradient(181deg, #000000, #4f4d4d);
  }
`;

const White = styled(BaseWhite)`
  background: linear-gradient(-30deg, #7f7f7f, #cccaca);

  &::before {
    background: linear-gradient(10deg, #7f7f7f, #cccaca);
  }

  &::after {
    background: linear-gradient(10deg, #fff, #7f7f7f);
  }
`;

export function Checker({ color, glow }) {
  return color === Player.white ? (
    <White $glow={glow} />
  ) : (
    <Black $glow={glow} />
  );
}
