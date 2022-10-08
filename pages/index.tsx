import { ArrowRightIcon } from "@assets/icon/ArrowRightIcon";
import { GithubIcon } from "@assets/icon/GithubIcon";
import { HelpIcon } from "@assets/icon/HelpIcon";
import Editor, { Monaco, OnChange, OnMount } from "@monaco-editor/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react";
import { checkExtension } from "utils/extension";

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

  return (
    <div>
      <Head>
        <title>CodeFly - Share your codes easily!</title>
      </Head>
      <main>
        <NavBar />
        <div className="max-w-7xl mx-8 xl:mx-auto md:space-x-6 grid grid-cols-2 mt-8 h-fit">
          <DescriptionSection
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            onShareClick={() => {
              console.log({ description, fileName, language, code });
            }}
          />
          <CodeSection
            fileName={fileName}
            onFileNameChange={(e) => handleFileNameInput(e.target.value)}
            onEditorMount={handleEditorDidMount}
            editorLanguage={language}
            onEditorChange={(e: any) => {
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

const NavBar = () => {
  return (
    <div className="flex items-center justify-between border-b px-8">
      <Link href="/">
        <h1 className="cursor-pointer font-light">CodeFly</h1>
      </Link>
      <a
        href="https://github.com/hisamafahri/codefly"
        target="_blank"
        rel="noreferrer"
        className="p-4 hover:bg-slate-100"
      >
        <GithubIcon />
      </a>
    </div>
  );
};

const DescriptionSection = ({
  onChange,
  value,
  onShareClick,
}: {
  onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  value: string | number | readonly string[] | undefined;
  onShareClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">Let your codes fly!</h3>
      <div className="flex flex-col text-gray-700 font-light text-sm">
        <label htmlFor="description">Give your codes some description:</label>
        <textarea
          className="mt-1 p-2 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-gray-100"
          name="description"
          id="description"
          onChange={onChange}
          value={value}
          rows={10}
          maxLength={1024}
          placeholder="Description (max 1024)"
        ></textarea>
      </div>
      <div className="w-full flex items-center justify-end">
        <button
          onClick={onShareClick}
          className="group py-2 px-4 text-xs bg-gray-900 hover:bg-slate-800 text-white flex flex-row items-center justify-center"
        >
          Get Shareable Link{" "}
          <ArrowRightIcon className="ml-2 hidden group-hover:flex" />
        </button>
      </div>
    </div>
  );
};

const CodeSection = ({
  fileName,
  onFileNameChange,
  onEditorMount,
  editorLanguage,
  editorValue,
  onEditorChange,
}: {
  fileName: string | number | readonly string[] | undefined;
  onFileNameChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onEditorMount: OnMount | undefined;
  editorLanguage: string | undefined;
  editorValue: string | undefined;
  onEditorChange: OnChange | undefined;
}) => {
  return (
    <div className="h-[75vh]">
      <div className="my-2 flex flex-row items-center justify-start">
        <input
          type="text"
          placeholder="file.txt"
          value={fileName}
          onChange={onFileNameChange}
          className="px-2 py-2 w-1/2 text-xs border border-gray-200 rounded focus:outline-none focus:ring focus:ring-gray-100"
        />
        <div className="flex flex-row group">
          <HelpIcon className="ml-2 cursor-help text-gray-600" />
          <p className="hidden group-hover:flex text-xs z-10 absolute ml-8 w-48 bg-gray-200 text-black rounded-sm opacity-50 px-3 py-2">
            The syntax highlighting will follow the filename extension
          </p>
        </div>
      </div>
      <Editor
        className="border"
        height="100%"
        value={editorValue}
        onChange={onEditorChange}
        language={editorLanguage}
        onMount={onEditorMount}
      />
    </div>
  );
};
