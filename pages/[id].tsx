import { NextPage } from "next";
import AddCodeSection from "../components/add/AddCodeSection";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";

const Read: NextPage = () => {
    return (
        <>
            <Header title="CodeFly: share your codes easily" />
            <main className="font-mono">
                <NavBar isShareButtonVisible={true} />
                <ReadSection />
            </main>
        </>
    );
};

export default Read;

function ReadSection() {
    const language = "javascript";
    const fileName = "index.js";
    return (
        <div className="px-16 mt-12 h-screen">
            <h1 className="text-3xl font-bold mb-4">Here's the Code ⭐️</h1>

            <p className="mb-2 text-base">Description:</p>
            <p className="mb-12 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>

            <AddCodeSection
                readOnly={true}
                onChange={() => {}}
                onBlur={() => {}}
                language={language}
                fileName={fileName}
                value="// Hello"
            />
        </div>
    );
}
