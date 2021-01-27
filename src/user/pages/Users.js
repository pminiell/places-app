import { React } from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Joe Dirt",
      image:
        "https://images.pexels.com/photos/5695555/pexels-photo-5695555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      places: 3,
    },
  ];

  return <UsersList items={USERS}/>;
};

export default Users;
