import React from 'react';
import { useSelector } from 'react-redux';

const MainBody = () => {
  const selectedItem = useSelector((state) => state.main.selectedItem);

  return (
    <main className="main-body">
      {selectedItem === 'home' && <div>Home Content</div>}
      {selectedItem === 'about' && <div>About Content</div>}
      {selectedItem === 'contact' && <div>Contact Content</div>}
    </main>
  );
};

export default MainBody;
