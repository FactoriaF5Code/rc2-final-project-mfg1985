import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { AddButton } from "../components/AddButton/AddButton";
import "./Layout.css";

export const Layout = () => {

  return (
    <>
      <AddButton />
      <main className="container">
        <Header />
        <Outlet />
      </main>
    </>
  );
};
