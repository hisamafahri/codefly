import type { NextPage } from "next";
import AddDescriptionSection from "../components/add/AddDescriptionSection";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header title="CodeFly: share your codes easily" />
      <main className="font-mono">
        <NavBar />
        <div className="px-16 py-8">
          <h1 className="text-3xl font-bold">Let your codes fly 🚀</h1>
        </div>
        <div className="grid grid-cols-2 px-16">
          <AddDescriptionSection />
          <div>
            <p>Code Section</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
