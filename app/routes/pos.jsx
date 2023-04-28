import { Outlet, useMatches } from "@remix-run/react";
import Navbar from "../components/Navbar";

export default function Pos() {
  const matchdData = useMatches();
  const user = matchdData[0].data.user;
  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
}
