import type { NextPage } from "next";
import AddDescriptionSection from "../components/add/AddDescriptionSection";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";
import { useState } from "react";
import checkExtension from "../utils/checkExtension";
import AddCodeSection from "../components/add/AddCodeSection";

const Home: NextPage = () => {
    let defaultFileName = "Untitled";
    const [fileName, setFileName] = useState(defaultFileName);
    const [language, setLanguage] = useState("");

    function handleInput(event: any) {
        const input = event.target.value;
        const language = checkExtension(input.split(".").pop());

        setFileName(input);

        if (language == "" || language == undefined) {
            // Probably need checker for the whole filename as well
            if (fileName == "Dockerfile" || fileName == "Containerfile") {
                setLanguage(fileName);
                return;
            }

            setLanguage(language);
            return;
        }

        setLanguage(language);
    }

    function handleOnBlur() {
        if (fileName.replace(/\s/g, "") == "") {
            setFileName(defaultFileName);
        }
    }

    return (
        <>
            <Header title="CodeFly: share your codes easily" />
            <main className="font-mono">
                <NavBar />
                <div
                    className="grid grid-cols-2 px-16 pb-16 gap-x-8 mt-12"
                    // Monaco editor height setting is so confusing for me
                    style={{ height: "90vh" }}
                >
                    <AddDescriptionSection />
                    <AddCodeSection
                        value=""
                        readOnly={false}
                        onChange={handleInput}
                        onBlur={handleOnBlur}
                        language={language}
                        fileName={fileName}
                    />
                </div>
            </main>
        </>
    );
};

export default Home;
