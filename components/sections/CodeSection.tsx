import Editor from "@monaco-editor/react";
import { ChangeEventHandler, FocusEventHandler } from "react";

type Props = {
  readOnly: boolean;
  onFileNameChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onEditorChange: any,
  fileName: string | number | readonly string[] | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  language: string | undefined;
  editorValue: string | undefined;
};

export default function CodeSection({
  readOnly,
  onFileNameChange,
  onEditorChange,
  fileName,
  onBlur,
  language,
  editorValue,
}: Props) {
  return (
    <div className="h-full">
      <div
        className={`flex w-min ${readOnly ? "" : "tooltip"}`}
        data-tip="Add file extension to get proper syntax highlighting"
      >
        <input
          className={`pl-4 pr-12 py-3 bg-base-200 text-sm outline-none tooltip text-left ${
            readOnly ? "cursor-default" : "cursor-text"
          }`}
          onChange={onFileNameChange}
          value={fileName}
          onBlur={onBlur}
          readOnly={readOnly}
        />
      </div>
      <Editor
        height={"90%"}
        theme="vs-dark"
        options={{
          fontSize: 14,
          readOnly: readOnly,
        }}
        language={language}
        value={editorValue}
        onChange={onEditorChange}
      />
    </div>
  );
}
