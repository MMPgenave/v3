"use client";
import { UncontrolledTooltip } from "reactstrap";
import { useSocketStatus, useSocketPing } from "@/app/lib/hooks/hooks";
import { SignalBars } from "./signal-bars";

export function ConnectionStatus() {
  const [isConnected, isConnecting] = useSocketStatus();
  const [ping] = useSocketPing();

  let pingStrength = 0;
  if (isConnected && ping === null) pingStrength = 3;
  else if (ping !== null && ping < 100) pingStrength = 3;
  else if (ping >= 100) pingStrength = 2;
  else if (ping >= 200) pingStrength = 1;

  const pingText = ping !== null ? `Ping: ${ping}ms` : "Ping: N/A";

  return (
    <span>
      <SignalBars
        animate={isConnecting}
        strength={pingStrength}
        id="connectionTooltip"
      />

      <UncontrolledTooltip placement="left" target="connectionTooltip">
        {isConnected ? pingText : isConnecting ? "Connecting" : "Disconnected"}
      </UncontrolledTooltip>
    </span>
  );
}
