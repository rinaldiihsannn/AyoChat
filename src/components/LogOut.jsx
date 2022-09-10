import React from 'react';
import { auth } from '../firebase';

const style = {
  button: `bg-red-600 text-white rounded-md px-4 py-2 hover:bg-gray-100 font-semibold`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      LogOut
    </button>
  );
};

export default LogOut;
