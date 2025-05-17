import React from 'react';
import Pog from './Pog'; // We'll create this next
import SmashButton from './SmashButton'; // And this

interface PogData {
  id: number;
  status: string;
}

const GameSpace: React.FC = () => {
  // Placeholder for pogs data
  const pogs: PogData[] = [
    { id: 1, status: 'active' },
    { id: 2, status: 'active' },
    { id: 3, status: 'active' },
    { id: 4, status: 'active' },
    { id: 5, status: 'active' },
  ];

  return (
    <div className="game-space bg-white border-2 border-gray-300 p-5 rounded-[15px] grow flex flex-col items-center relative min-h-[300px">
      <h2>GameSpace</h2>
      <div className="pog-area flex flex-wrap gap-2.5 justify-center items-center mb-5 min-h-[150px]">
        {pogs.map((pog) => (
          <Pog key={pog.id} />
        ))}
      </div>
      {/* Placeholder for slammer */}
      <div className="slammer-area">
        {/* You might render a Slammer component here later */}
      </div>
      <SmashButton />
    </div>
  );
};

export default GameSpace;