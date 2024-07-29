import { useCallback, useEffect, useRef, useState } from "react";
import { createEmptyGrid, COLS, ROWS, DIRECTIONS } from "../utils/utils";
import { PlayPauseButton } from "./PlayPauseButton";
import "../css/Board.css";

function Board() {
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid());
  const [active, setActive] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const getGridSize = () => {
    const size = Math.min(window.innerHeight / ROWS, window.innerWidth / COLS);
    return size;
  };

  const [cellSize, setSize] = useState(getGridSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getGridSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeRef = useRef(active);
  activeRef.current = active;

  const runGame = useCallback(() => {
    if (!activeRef.current) {
      return;
    }
    setGrid((currentGrid) => {
      const newGrid = currentGrid.map((arr) => [...arr]);
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          let liveNeighbors = 0;

          DIRECTIONS.forEach(([directionX, directionY]) => {
            const neighborRow = row + directionX;
            const neighborCol = col + directionY;

            if (
              neighborRow >= 0 &&
              neighborRow < ROWS &&
              neighborCol >= 0 &&
              neighborCol < COLS
            ) {
              liveNeighbors += currentGrid[neighborRow][neighborCol] ? 1 : 0;
            }
          });

          if (liveNeighbors < 2 || liveNeighbors > 3) {
            newGrid[row][col] = 0;
          } else if (currentGrid[row][col] === 0 && liveNeighbors === 3) {
            newGrid[row][col] = 1;
          }
        }
      }
      return newGrid;
    });
    setTimeout(runGame, 200);
  }, [activeRef, setGrid]);

  const handleMouseDown = (row: number, col: number) => {
    setMouseDown(true);
    toggleCell(row, col);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleToggle = (row: number, col: number) => {
    if (mouseDown) {
      toggleCell(row, col);
    }
  };

  const toggleCell = (rowToToggle: number, colToToggle: number) => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === rowToToggle && colIndex === colToToggle
          ? cell
            ? 0
            : 1
          : cell
      )
    );
    setGrid(newGrid);
  };

  return (
    <div className="board-container">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${cellSize}px)`,
        }}
        onMouseLeave={handleMouseUp}
      >
        {grid.map((rows, originalRowIndex) =>
          rows.map((col, originalColIndex) => (
            <button
              onMouseDown={() =>
                handleMouseDown(originalRowIndex, originalColIndex)
              }
              onMouseUp={handleMouseUp}
              onMouseEnter={() =>
                handleToggle(originalRowIndex, originalColIndex)
              }
              key={`${originalRowIndex}-${originalColIndex}`}
              className={`cell ${
                grid[originalRowIndex][originalColIndex] ? "active" : ""
              }`}
            />
          ))
        )}
      </div>
      <div className="playbutton-container">
        <PlayPauseButton
          active={active}
          onClick={() => {
            setActive(!active);
            if (!active) {
              activeRef.current = true;
              runGame();
            }
          }}
        />
      </div>
    </div>
  );
}

export default Board;
