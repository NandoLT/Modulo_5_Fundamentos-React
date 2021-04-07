import React from 'react';
import classNames from 'classnames';
import Button from '../commons/Button';

import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';

const Header = ({ className, isLogged, ...props }) => {
    return (
        <header className={classNames('header', className)} {...props}>
        {/* <Link to="/"> */}
            <div className="header-logo">
                <Icon width="32" header="32" />
            </div>
        {/* </Link> */}
            <nav className="header-nav">
            <Button
                // as={Link}
                to="/tweet"
                variant="primary"
                className="header-button"
            >
                Tweet
            </Button>
            { isLogged ? (
                <Button 
                    className="header-button"
                    // onClick={() => logout().then(onLogout)}
                >
                    Log out
                </Button>
            ) : (
            <Button 
                // as={Link} 
                to="/login"  
                className="header-button"
            >
                Log in
            </Button>
            )

            }
            </nav>
        </header>
    );
};

export default Header;
