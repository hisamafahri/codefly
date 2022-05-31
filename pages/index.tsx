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
        // Get the file extension
        // See: https://stackoverflow.com/a/4695156/13540349
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
        // Remove all whitespaces
        if (fileName.replace(/\s/g, "") == "") {
            setFileName(defaultFileName);
        }
    }

    function onShare() {
        console.log("Uploaded");
    }

    return (
        <>
            <Header title="CodeFly: share your codes easily" />
            <main className="font-mono">
                <NavBar />
                <div
                    className="grid grid-cols-2 px-16 gap-x-8 mt-12"
                    // Monaco editor height setting is so confusing for me
                    style={{ height: "85vh" }}
                >
                    <AddDescriptionSection onShareClick={onShare} />
                    <AddCodeSection
                        value=""
                        readOnly={false}
                        onChange={handleInput}
                        onBlur={handleOnBlur}
                        language={language}
                        fileName={fileName}
                    />
                </div>
                {
                    // Error
                }
                <div className="hidden alert alert-error shadow-lg w-1/2 ml-16 absolute z-10 bottom-12">
                    <div className="flex justify-between flex-1">
                        <div className="flex flex-row items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="ml-4">
                                Error! Task failed successfully. Open your
                                console for more information.
                            </span>
                        </div>
                        <div className="flex-none">
                            <button className="btn btn-sm">Close</button>
                        </div>
                    </div>
                </div>
                {
                    // Success Modal
                }
                <input
                    type="checkbox"
                    id="success-modal"
                    className="modal-toggle"
                    checked={false}
                />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Your codes are flying 💫
                        </h3>
                        <p className="py-4">
                            Now, you can share your codes with the link below:
                        </p>
                        <div className="form-control w-full">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Link..."
                                    className="input input-bordered flex-1"
                                    value={"https://codefly.dev/f14n2hjj"}
                                    disabled
                                />
                                <button className="btn btn-square">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button className="btn btn-ghost">Close</button>
                            <a
                                href="/1"
                                target={"_blank"}
                                rel="norefferer"
                                className="btn btn-primary"
                            >
                                Open&nbsp;{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
