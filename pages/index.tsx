import type { NextPage } from "next";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";
import { useState } from "react";
import checkExtension from "../utils/checkExtension";
import SuccessModal from "../components/notifications/SuccessModal";
import ErrorCard from "../components/notifications/ErrorCard";
import DescriptionSection from "../components/sections/DescriptionSection";
import CodeSection from "../components/sections/CodeSection";
import { createEntry } from "../utils/createEntry";

const Home: NextPage = () => {
    let defaultFileName = "Untitled";
    const [fileName, setFileName] = useState(defaultFileName);
    const [language, setLanguage] = useState("");
    const [description, setDescription] = useState("");
    const [editorValue, setEditorValue] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);
    const [entryUrl, setEntryUrl] = useState("https://codefly.dev");

    function handleFileNameInput(event: any) {
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

    function handleDescription(event: any) {
        const input = event.target.value;
        setDescription(input);
    }

    function handleEditor(value: any) {
        setEditorValue(value);
    }

    function handleOnFileNameBlur() {
        // Remove all whitespaces
        if (fileName.replace(/\s/g, "") == "") {
            setFileName(defaultFileName);
        }
    }

    async function onShare() {
        setIsUploading(true);
        await createEntry({
            payload: JSON.stringify({
                language: language,
                fileName: fileName,
                value: editorValue,
                description: description,
            }),
        })
            .then((res: any) => {
                setIsUploading(false);
                if (res.status == "OK") {
                    setEntryUrl(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/${res.data._id}`
                    );
                    setIsErrorVisible(false);
                    setIsSuccessVisible(true);
                } else {
                    console.error(res);
                    setIsErrorVisible(true);
                    setIsSuccessVisible(false);
                }
            })
            .catch((error) => {
                console.error(error);
                setIsUploading(false);
                setIsErrorVisible(true);
                setIsSuccessVisible(false);
            });
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
                    <DescriptionSection
                        isUploading={isUploading}
                        onShareClick={isUploading ? undefined : onShare}
                        descriptionValue={description}
                        onChangeDescription={handleDescription}
                    />
                    <CodeSection
                        editorValue={editorValue}
                        onEditorChange={handleEditor}
                        readOnly={false}
                        onFileNameChange={handleFileNameInput}
                        onBlur={handleOnFileNameBlur}
                        language={language}
                        fileName={fileName}
                    />
                </div>
                <ErrorCard
                    isVisible={isErrorVisible}
                    onClose={() => setIsErrorVisible(false)}
                />
                <SuccessModal isVisible={isSuccessVisible} url={entryUrl} />
            </main>
        </>
    );
};

export default Home;
