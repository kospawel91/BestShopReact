import React from 'react';

const HeaderLogo = ({name}) => {
    return (
        <>
            <div className="nav--logo">
                <a href="/">{name}</a>
            </div> 
        </>
    );
};

export default HeaderLogo;