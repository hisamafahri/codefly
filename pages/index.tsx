import type { NextPage } from "next";
import AddDescriptionSection from "../components/add/AddDescriptionSection";
import NavBar from "../components/navigations/NavBar";
import Header from "../components/utils/Header";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import checkExtension from "../utils/checkExtension";

const Home: NextPage = () => {
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
          <AddCodeSection />
        </div>
      </main>
    </>
  );
};

export default Home;

function AddCodeSection() {
  const [fileName, setFileName] = useState("Untitled");
  const [language, setLanguage] = useState("");
  function handleInput(event: any) {
    const input = event.target.value;
    setFileName(input);
    const language = checkExtension(input.split(".").pop());
    if (language == "" || language == undefined) {
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
      setFileName("Untitled");
    }
  }
  return (
    <div>
      <div
        className="flex w-min tooltip"
        data-tip="Add file extension to get proper syntax highlighting"
      >
        <input
          className="pl-4 pr-12 py-3 bg-base-200 text-sm outline-none tooltip text-left"
          onChange={handleInput}
          value={fileName}
          onBlur={handleOnBlur}
        />
      </div>
      <Editor
        height={"90%"}
        theme="vs-dark"
        options={{
          fontSize: 14,
        }}
        language={language}
        defaultValue=""
        value=""
        // onChange={onEditorChange}
      />
    </div>
  );
}
