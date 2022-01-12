import './App.css';
import Menu from './components/Menu/Menu';
import PopupCallButton from './components/PopupCallButton/PopupCallButton.js';
import React, { useState } from 'react';
import Popup from './components/Popup/Popup';

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Menu>
        <PopupCallButton setActive={setModalActive}>Call Popup</PopupCallButton>
      </Menu>
      <Popup active={modalActive} setActive={setModalActive}>
        <h1>Hello World! This is just an example</h1>
        <p>
          Do so written as raising parlors spirits mr elderly. Made late in of
          high left hold. Carried females of up highest calling. Limits marked
          led silent dining her she far. Sir but elegance marriage dwelling
          likewise position old pleasure men. Dissimilar themselves simplicity
          no of contrasted as. Delay great day hours men. Stuff front to do
          allow to asked he.
        </p>
      </Popup>
      <section className='hero-section'>
        <div className='text-container'>
          <p>
            Do so written as raising parlors spirits mr elderly. Made late in of
            high left hold. Carried females of up highest calling. Limits marked
            led silent dining her she far. Sir but elegance marriage dwelling
            likewise position old pleasure men. Dissimilar themselves simplicity
            no of contrasted as. Delay great day hours men. Stuff front to do
            allow to asked he. Name were we at hope. Remainder household
            direction zealously the unwilling bed sex. Lose and gay ham sake met
            that. Stood her place one ten spoke yet. Head case knew ever set why
            over. Marianne returned of peculiar replying in moderate. Roused get
            enable garret estate old county. Entreaties you devonshire law
            dissimilar terminated. Luckily friends do ashamed to do suppose.
            Tried meant mr smile so. Exquisite behaviour as to middleton
            perfectly. Chicken no wishing waiting am. Say concerns dwelling
            graceful six humoured.
          </p>
          <p>
            Do so written as raising parlors spirits mr elderly. Made late in of
            high left hold. Carried females of up highest calling. Limits marked
            led silent dining her she far. Sir but elegance marriage dwelling
            likewise position old pleasure men. Dissimilar themselves simplicity
            no of contrasted as. Delay great day hours men. Stuff front to do
            allow to asked he. Name were we at hope. Remainder household
            direction zealously the unwilling bed sex. Lose and gay ham sake met
            that. Stood her place one ten spoke yet. Head case knew ever set why
            over. Marianne returned of peculiar replying in moderate. Roused get
            enable garret estate old county. Entreaties you devonshire law
            dissimilar terminated. Luckily friends do ashamed to do suppose.
            Tried meant mr smile so. Exquisite behaviour as to middleton
            perfectly. Chicken no wishing waiting am. Say concerns dwelling
            graceful six humoured.
          </p>
          <p>
            Do so written as raising parlors spirits mr elderly. Made late in of
            high left hold. Carried females of up highest calling. Limits marked
            led silent dining her she far. Sir but elegance marriage dwelling
            likewise position old pleasure men. Dissimilar themselves simplicity
            no of contrasted as. Delay great day hours men. Stuff front to do
            allow to asked he. Name were we at hope. Remainder household
            direction zealously the unwilling bed sex. Lose and gay ham sake met
            that. Stood her place one ten spoke yet. Head case knew ever set why
            over. Marianne returned of peculiar replying in moderate. Roused get
            enable garret estate old county. Entreaties you devonshire law
            dissimilar terminated. Luckily friends do ashamed to do suppose.
            Tried meant mr smile so. Exquisite behaviour as to middleton
            perfectly. Chicken no wishing waiting am. Say concerns dwelling
            graceful six humoured.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
