import React, { useState, useEffect } from "react";

const TikTakToeBox = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [currentShape, setCurrentShape] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const HandleOnclick = (index) => {
    if (winner || isDraw) return;

    const copy = [...boxes];
    if (copy[index]) return;

    copy[index] = currentShape;
    setBoxes(copy);

    const win = checkWinner(copy);
    if (win) {
      setWinner(win);
      return;
    }

    if (!copy.includes(null)) {
      setIsDraw(true);
      return;
    }

    setCurrentShape(currentShape === "X" ? "O" : "X");
  };

  const checkWinner = (board) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of patterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
    setCurrentShape("X");
  };

  useEffect(() => {
    if (winner || isDraw) {
      const timer = setTimeout(() => {
        resetGame();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [winner, isDraw]);

  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center text-white select-none">

      {/* Board */}
      <div className="grid grid-cols-3 gap-2">
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => HandleOnclick(index)}
            className={`
              w-20 h-20 flex items-center justify-center 
              text-3xl font-bold cursor-pointer
              bg-gray-800 border border-gray-600 
              hover:bg-gray-700 transition-all
              rounded-lg
              ${
                box === "X"
                  ? "text-[#00f2ff] shadow-[0_0_10px_#00f2ff,0_0_25px_#00f2ff]"
                  : ""
              }
              ${
                box === "O"
                  ? "text-[#ff00ea] shadow-[0_0_10px_#ff00ea,0_0_25px_#ff00ea]"
                  : ""
              }
            `}
          >
            {box}
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="mt-6 text-2xl font-semibold">
        {winner ? (
          <span className="text-green-400">
            {winner} Wins! Auto reset in 2s
          </span>
        ) : isDraw ? (
          <span className="text-yellow-400">Match Draw! Auto reset in 2s</span>
        ) : (
          <span className="text-blue-400">{currentShape} Turn</span>
        )}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="
          mt-5 px-6 py-2 rounded-md 
          bg-blue-600 hover:bg-blue-700 
          active:scale-95 transition-all
        "
      >
        Reset
      </button>
    </div>
  );
};

export default TikTakToeBox;
