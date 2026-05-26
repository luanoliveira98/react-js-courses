import { useEffect } from "react";
import useUser from "../hooks/use-user";

export default function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser();

  useEffect(() => {
    getUser("lua");
  }, [getUser]);

  if (userRequestStatus === "loading") {
    return <div>Loading user...</div>;
  }

  return (
    <ul>
      <li>Id: {user?.id}</li>
      <li>Name: {user?.name}</li>
    </ul>
  );
}
