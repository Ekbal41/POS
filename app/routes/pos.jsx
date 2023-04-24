import { Outlet } from "@remix-run/react";
import Navbar from "../components/Navbar";

export default function Pos() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
