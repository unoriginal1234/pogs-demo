import React from 'react';

const ScoreDisplay: React.FC = () => {
  return (<div className="score-display bg-[#fffacd] border-2 border-gray-300 py-2.5 px-5 rounded-lg mb-5 w-3/5 text-center text-lg">
    SCORE: <span>0</span>
    </div>);
};

export default ScoreDisplay;