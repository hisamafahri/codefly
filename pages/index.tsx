import Code from "@components/Code";
import Description from "@components/Description";
import NavBar from "@components/NavBar";
import { Monaco } from "@monaco-editor/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { checkExtension } from "@utils/extension";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const defaultErrorMessage: string = "Something went wrong!";
  const [code, setCode] = useState("");
  const [fileName, setFileName] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef(null);

  type RecordBody = {
    description: string;
    file_name: string;
    language: string;
    code: string;
  };

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

  const saveRecord = async (payload: RecordBody) => {
    const response = await fetch("/api/record", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return response.json();
    }
    return await response.json();
  };

  return (
    <div>
      <Head>
        <title>CodeFly - Share your codes easily!</title>
      </Head>
      <main>
        <NavBar />
        <div className="max-w-7xl mx-8 xl:mx-auto md:space-x-6 grid grid-cols-2 mt-8 h-fit">
          <Description
            disabled={false}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            onShareClick={() => {
              if (code.replace(/\s/g, "") == "") {
                setIsError(true);
                setErrorMessage("Code can't be empty!");
                return;
              }
              setIsLoading(true);
              saveRecord({
                description,
                file_name: !fileName ? "file.txt" : fileName,
                language: !language ? "txt" : language,
                code,
              })
                .then((data) => router.push("/r/" + data.data.id))
                .catch((err) => {
                  setIsError(true);
                  setErrorMessage(err.statusText);
                  setIsLoading(false);
                });
            }}
            isLoading={isLoading}
            error={isError}
            errorMessage={errorMessage}
          />
          <Code
            disabled={false}
            fileName={fileName}
            onFileNameChange={(e) => handleFileNameInput(e.target.value)}
            onEditorMount={handleEditorDidMount}
            editorLanguage={language}
            onEditorChange={(e: any) => {
              setIsError(false);
              setErrorMessage(defaultErrorMessage);
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
