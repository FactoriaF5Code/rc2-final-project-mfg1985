import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const HomePage = () => {
  return (
    <>
      <body>
        <Header />
        <Outlet />
      </body>
    </>
  );
};
