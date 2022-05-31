import type { NextPage } from "next";
import AddDescriptionSection from "../components/add/AddDescriptionSection";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";
import { useState } from "react";
import checkExtension from "../utils/checkExtension";
import AddCodeSection from "../components/add/AddCodeSection";
import SuccessModal from "../components/notifications/SuccessModal";
import ErrorCard from "../components/notifications/ErrorCard";

const Home: NextPage = () => {
  let defaultFileName = "Untitled";
  const [fileName, setFileName] = useState(defaultFileName);
  const [language, setLanguage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

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
    setIsUploading(true);
    setTimeout(() => {
      setIsSuccessVisible(true);
      setIsUploading(false);
    }, 2000);
    // setIsErrorVisible(true);
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
          <AddDescriptionSection
            isUploading={isUploading}
            onShareClick={isUploading ? undefined : onShare}
          />
          <AddCodeSection
            value=""
            readOnly={false}
            onChange={handleInput}
            onBlur={handleOnBlur}
            language={language}
            fileName={fileName}
          />
        </div>
        <ErrorCard
          isVisible={isErrorVisible}
          onClose={() => setIsErrorVisible(false)}
        />
        <SuccessModal
          isVisible={isSuccessVisible}
          url={"https://codefly.dev/j3hdwij"}
        />
      </main>
    </>
  );
};

export default Home;
