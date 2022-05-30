import { NextPage } from "next";
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
    return (
        <div>
            <p>Hello, world</p>
        </div>
    );
}
