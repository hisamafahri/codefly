import { HelpIcon } from "@assets/icon/HelpIcon";
import Editor, { OnChange, OnMount } from "@monaco-editor/react";
import { ChangeEventHandler } from "react";

type EnabledType = {
  disabled: false;
  fileName: string | number | readonly string[] | undefined;
  onFileNameChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onEditorMount: OnMount | undefined;
  editorLanguage: string | undefined;
  editorValue: string | undefined;
  onEditorChange: OnChange | undefined;
};

type DisabledType = {
  disabled: true;
  fileName: string | number | readonly string[] | undefined;
  onFileNameChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onEditorMount: OnMount | undefined;
  editorLanguage: string | undefined;
  editorValue: string | undefined;
  onEditorChange?: OnChange | undefined;
};

const Code = ({
  disabled,
  fileName,
  onFileNameChange,
  onEditorMount,
  editorLanguage,
  editorValue,
  onEditorChange,
}: EnabledType | DisabledType) => {
  return (
    <div className="h-[75vh]">
      <div className="my-2 flex flex-row items-center justify-start">
        <input
          readOnly={disabled}
          type="text"
          placeholder="file.txt"
          value={fileName}
          onChange={onFileNameChange}
          className="px-2 py-2 w-1/2 text-xs border border-gray-200 rounded focus:outline-none focus:ring focus:ring-gray-100"
        />
        <div className="ml-2 flex flex-row group">
          <HelpIcon className="cursor-help text-gray-600" />
          <p className="hidden group-hover:flex text-xs z-10 absolute ml-8 w-48 bg-gray-200 text-black rounded-sm opacity-50 px-3 py-2">
            Syntax highlighting will follow the filename extension
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
        options={{
          readOnly: disabled,
        }}
      />
    </div>
  );
};

export default Code;
