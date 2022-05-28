import Editor from "@monaco-editor/react";
import { ChangeEventHandler, FocusEventHandler } from "react";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  fileName: string | number | readonly string[] | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  language: string | undefined;
};

export default function AddCodeSection({
  onChange,
  fileName,
  onBlur,
  language,
}: Props) {
  return (
    <div>
      <div
        className="flex w-min tooltip"
        data-tip="Add file extension to get proper syntax highlighting"
      >
        <input
          className="pl-4 pr-12 py-3 bg-base-200 text-sm outline-none tooltip text-left"
          onChange={onChange}
          value={fileName}
          onBlur={onBlur}
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
      />
    </div>
  );
}
