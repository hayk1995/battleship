import React, { useCallback, useEffect, useMemo, useState } from "react";
import BattleGrid from "../../components/Grid/BattleGrid";
import { containsCoordinate } from "../../utils/helpers";
import ShipGrid from "../../components/Grid/ShipGrid";
import { GridsWrapper } from "./styles";

const GAME_LAYOUT = {
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
    submarine: { size: 3, count: 1 },
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
};

const Game: React.FC = () => {
  const [playerHits, setPlayerHits] = useState<[number, number][]>([]);
  const [playerMisses, setPlayerMisses] = useState<[number, number][]>([]);

  const computerShipsCoords: Array<[number, number]> = useMemo(() => {
    const result: Array<[number, number]> = [];
    GAME_LAYOUT.layout.forEach((item) => {
      for (const position of item.positions) {
        result.push([position[0] + 1, position[1] + 1]);
      }
    });
    return result;
  }, []);

  useEffect(() => {
    if (playerHits.length == computerShipsCoords.length) {
      setPlayerMisses([]);
      setPlayerHits([]);
      alert("You have won");
    }
  }, [playerHits]);

  const handlePlayerMove = useCallback(
    (x: number, y: number) => {
      if (
        containsCoordinate(playerHits, [x, y]) ||
        containsCoordinate(playerMisses, [x, y])
      ) {
        return;
      }

      if (containsCoordinate(computerShipsCoords, [x, y])) {
        setPlayerHits([...playerHits, [x, y]]);
      } else {
        setPlayerMisses([...playerMisses, [x, y]]);
      }
    },
    [playerHits, playerMisses]
  );

  return (
    <GridsWrapper>
      {/* This is only for demo purposes shows ships grid with data prepared for computer. */}
      <ShipGrid
        shipsPositions={computerShipsCoords}
        hits={[[1, 1]]}
        misses={[[1, 7]]}
      />
      <BattleGrid
        hits={playerHits}
        misses={playerMisses}
        handlePlayerMove={handlePlayerMove}
      />
    </GridsWrapper>
  );
};

export default Game;
