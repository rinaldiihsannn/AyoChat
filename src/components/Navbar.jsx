import React from 'react';
import SignIn from './SignIn';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LogOut from './LogOut';

const style = {
  nav: `bg-green-900 h-18 flex justify-between items p-4 rounded-t-md`,
  heading: `text-white text-3xl font-semibold`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Ayo Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
