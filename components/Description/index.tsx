import { ArrowRightIcon } from "@assets/icon/ArrowRightIcon";
import { ChangeEventHandler, MouseEventHandler } from "react";

const Description = ({
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

export default Description;
