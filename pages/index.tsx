import Code from "@components/Code";
import Description from "@components/Description";
import NavBar from "@components/NavBar";
import { Monaco } from "@monaco-editor/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { checkExtension } from "@utils/extension";
import { toast, ToastContainer } from "react-toastify";

const Home: NextPage = () => {
  const [code, setCode] = useState("");
  const [fileName, setFileName] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    console.log("editor", editor, monaco);
    editorRef.current = editor;
  };

  const handleFileNameInput = (input: string) => {
    setFileName(input);
    // Get the file extension
    // See: https://stackoverflow.com/a/4695156/13540349
    const language = checkExtension(input.split(".").pop() as string);

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
  };

  const notifyEmptyCode = () =>
    toast.warn("Code cannot be empty!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

  return (
    <div>
      <Head>
        <title>CodeFly - Share your codes easily!</title>
      </Head>
      <main>
        <ToastContainer />
        <NavBar />
        <div className="max-w-7xl mx-8 xl:mx-auto md:space-x-6 grid grid-cols-2 mt-8 h-fit">
          <Description
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            onShareClick={() => {
              console.log({ description, fileName, language, code });
            }}
          />
          <Code
            fileName={fileName}
            onFileNameChange={(e) => handleFileNameInput(e.target.value)}
            onEditorMount={handleEditorDidMount}
            editorLanguage={language}
            onEditorChange={(e: any) => {
              if (code.replace(/ /g, "").length !== 0) {
              }
              setCode(e);
            }}
            editorValue={code}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
