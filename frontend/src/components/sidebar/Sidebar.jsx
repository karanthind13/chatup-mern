import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-0 sm:w-16"
        } transition-all duration-300 border-r border-slate-500 text-white h-screen overflow-hidden`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Chat</h2>
          <button onClick={() => setIsOpen(false)} className="text-black-500">
            <FaTimes />
          </button>
        </div>

        {isOpen && (
          <>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
          </>
        )}
      </div>

      {/* Open Sidebar Button (only visible when collapsed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-blue-500 text-white rounded fixed left-2 top-2"
        >
          <FaBars />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
