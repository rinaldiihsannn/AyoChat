import React from 'react';
import { auth } from '../firebase';

const style = {
  pesan: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 test-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Pesan = ({ pesan }) => {
  const pesanClass = pesan.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

  return (
    <>
      <div className={`${style.pesan} ${pesanClass}`}>
        <p className={style.name}>{pesan.name}</p>
        <p>{pesan.text}</p>
      </div>
    </>
  );
};

export default Pesan;
