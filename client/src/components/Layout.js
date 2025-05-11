import { MyAppNav } from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <header>
        <MyAppNav />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
