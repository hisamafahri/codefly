import type { NextPage } from "next";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header title="CodeFLy: share your codes easily" />
      <main>
        <NavBar />
      </main>
    </>
  );
};

export default Home;
