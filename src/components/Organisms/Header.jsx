import React from 'react';

import Button from '../Atoms/Button';
import Search from '../Atoms/Search';

function Header() {
    return(
        <div className="header">
            <Button />
            <Search />
        </div>
    )
}

export default Header;