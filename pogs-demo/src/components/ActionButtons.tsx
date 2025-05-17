import React from 'react';

const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons flex flex-col space-y-2.5">
      <button className="bg-[#90ee90] border-2 border-[#7ccd7c] p-2.5 rounded-lg w-full cursor-pointer">Button 1</button>
      <button className="bg-[#90ee90] border-2 border-[#7ccd7c] p-2.5 rounded-lg w-full cursor-pointer">Button 2</button>
      <button className="bg-[#90ee90] border-2 border-[#7ccd7c] p-2.5 rounded-lg w-full cursor-pointer">Button 3</button>
      <button className="bg-[#90ee90] border-2 border-[#7ccd7c] p-2.5 rounded-lg w-full cursor-pointer">Button 4</button>
    </div>
  );
};

export default ActionButtons;