import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import Pesan from './Pesan';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendPesan from './SendPesan';

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [pesan, setPesan] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'pesan'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let pesan = [];
      querySnapshot.forEach((doc) => {
        pesan.push({ ...doc.data(), id: doc.id });
      });
      setPesan(pesan);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>{pesan && pesan.map((pesan) => <Pesan key={pesan.id} pesan={pesan} />)}</main>
      {/* Send Component */}
      <SendPesan scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
