import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const style = {
  form: `h-14 w-full max-w-[728px] flex text-l absolute bottom-0`,
  input: `w-full text-l p-3 bg-gray-900 text-white outline-none border-none rounded-bl-md`,
  button: `w-[20%] bg-green-900 rounded-br-md text-white font-semibold`,
};

const SendPesan = ({scroll}) => {
  const [input, setInput] = useState('');

  const SendPesan = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Pesan kamu belum di tulis tuuu');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'pesan'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <form onSubmit={SendPesan} className={style.form}>
      <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Pesan" />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendPesan;
