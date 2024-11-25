import React from "react";
import { useSelector } from "react-redux";

const SelectAuthor = () => {
  // const users = useSelector((state) => state.users.users);
  // console.log(users[0].user);
  // console.log(author);
  return (
    <select>
      {/* {users.map((user) => (
        <option key={user.id} value={user.user} onChange={author}>
          {user.user}
        </option>
      ))} */}
    </select>
  );
};

export default SelectAuthor;
