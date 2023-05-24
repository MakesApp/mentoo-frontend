import React, { useState } from 'react';
import './Nav.css'; // Replace with the actual file path to your Nav CSS file
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";
import chatIcon from 'assets/images/chat-icon.svg';
import { HOME_PAGE, VOLUNTEER_PAGE } from '../../routes/routePath';

const Nav=()=> {
  const [userPicture, setUserPicture] = useState(
    'https://www.w3schools.com/howto/img_avatar.png'
  );
  console.log('ss');

  return (
    <>
      <nav className="primary-nav">
        <div className="menu">
          {/* <a
            className="menu-link"
            to={.CHAT}
            data-notification="true"
          >
            <div>
              <img src={''} alt="chat icon" />
            </div>
          </a> */}
          <Link className="menu-link logo" to={HOME_PAGE}>
            <p>
              ment<span>oo</span>
            </p>
            <p className="subtitle">BY APPLESEEDS</p>
          </Link>
          <Link className="menu-link" to={VOLUNTEER_PAGE}>
            <div>
              <span>
                <img src={userPicture} alt="Avatar" />
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
