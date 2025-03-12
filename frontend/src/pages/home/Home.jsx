import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  // State for sidebar visibility
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MessageContainer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Home;
