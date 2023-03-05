import React, { useState } from "react";
import { PrimaryNav, MenuLink, Menu } from "./Nav.style";
import { constants } from "../../routes/constants";
import chatIcon from "../../assets/imgs/chat-icon.png";
function Nav() {
  const [userPicture, setUserPicture] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );
  // const MenuLinkArr = [
  //   {
  //     jsx: (
  //       <div>
  //         <img src={chatIcon} alt="chat icon" />
  //       </div>
  //     ),
  //     toValue: constants.CHAT,
  //     propsName: "notification",
  //     propsValue: "true",
  //     classNameValue: null,
  //   },
  //   {
  //     jsx: (
  //       <p>
  //         ment<span>oo</span>
  //       </p>
  //     ),
  //     toValue: constants.HOME,
  //     propsName: null,
  //     propsValue: null,
  //     classNameValue: "logo",
  //   },
  //   {
  //     jsx: (
  //       <div>
  //         <span>
  //           <img src={userPicture} alt="Avatar" />
  //         </span>
  //       </div>
  //     ),
  //     toValue: constants.VOLUNTEERS,
  //     propsName: null,
  //     propsValue: null,
  //     classNameValue: null,
  //   },
  // ];

  return (
    <>
      <PrimaryNav>
        {/* change menulink pattern to arr of objects  */}

        <Menu>
          {/* {MenuLinkArr.map(
            ({ jsx, toValue, propsName, propsValue, classNameValue }) => {
              test[propsName] = propsValue;
              return (
                <MenuLink propsName={propsValue} to={toValue} className={classNameValue}>
                  {jsx}
                </MenuLink>
              );
            }
          )} */}
          <MenuLink notification="true" to={constants.CHAT}>
            <div>
              <img src={chatIcon} alt="chat icon" />
            </div>
          </MenuLink>
          <MenuLink to={constants.HOME} className="logo">
            <p>
              ment<span>oo</span>
            </p>

            <p className={"subtitle"}>BY APPLESEEDS</p>
          </MenuLink>

          <MenuLink to={constants.VOLUNTEERS}>
            <div>
              <span>
                <img src={userPicture} alt="Avatar" />
              </span>
            </div>
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
}

export default Nav;
