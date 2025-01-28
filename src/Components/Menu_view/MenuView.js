import React from "react";

import MenuItem from "./menuItem";

const MenuView = ({ menus }) => {
  console.log("menus: ", menus);

  return (
    <div>
      {menus && menus.length > 0 ? (
        menus?.map((menu, index) => {
          return <MenuItem key={index} item={menu} />;
        })
      ) : (
        <div>No Item Present</div>
      )}
    </div>
  );
};

export default MenuView;
