import React from 'react';
import PopUpThread from './PopUpThread';
import ThreadInput from './ThreadInput';

const PopUp= () => {
    return (
        <div className="container">
            <PopUpThread />
            <ThreadInput />
        </div>
    );
};

export default PopUp;