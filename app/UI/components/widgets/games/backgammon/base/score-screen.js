import { Player } from "@/app/lib/scripts/backgammon/util";

export function ScoreScreen({ winner, score }) {
  if (winner === null) return null;

  return (
    <div>
      {Player.properties[winner].colorName} won! Score:{" "}
      <strong>
        White {score[Player.white]} – {score[Player.black]} Black
      </strong>
    </div>
  );
}
