import React, { useState } from 'react';
import { VscBook } from "react-icons/vsc";
import KataloqMenu from './KataloqMenu';

function KataloqButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='bg-red-600 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300'
        onClick={() => setOpen(true)}
      >
        <VscBook />
        <h2 className='font-bold'>Kataloq</h2>
      </button>

      {open && <KataloqMenu onClose={() => setOpen(false)} />}
    </div>
  );
}

export default KataloqButton;
