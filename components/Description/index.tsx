import { ArrowRightIcon } from "@assets/icon/ArrowRightIcon";
import { SpinnerIcon } from "@assets/icon/SpinnerIcon";
import { WarningIcon } from "@assets/icon/WarningIcon";
import { ChangeEventHandler, MouseEventHandler } from "react";

type DisabledType = {
  disabled: true;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  value: string | number | readonly string[] | undefined;
  onShareClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  error?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
};

type EnabledType = {
  disabled: false;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  value: string | number | readonly string[] | undefined;
  onShareClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  error?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
};

const Description = ({
  onChange,
  value,
  onShareClick,
  disabled,
  error,
  errorMessage = "Something went wrong!",
  isLoading,
}: DisabledType | EnabledType) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">
        {disabled ? "Your code is flying!" : "Let your codes fly!"}
      </h3>
      <div className="flex flex-col text-gray-700 font-light text-sm">
        <label htmlFor="description">
          {disabled ? "Description:" : "Give your codes some description:"}
        </label>
        <textarea
          className="mt-1 p-2 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-gray-100"
          name="description"
          id="description"
          onChange={onChange}
          value={value}
          rows={disabled ? 4 : 10}
          maxLength={1024}
          placeholder={
            disabled && !value
              ? "No description provided"
              : "Description (max 1024)"
          }
          readOnly={disabled}
        ></textarea>
      </div>
      {!disabled && (
        <div className="w-full flex items-center justify-end">
          <button
            onClick={isLoading ? () => {} : onShareClick}
            className={`group py-2 px-4 text-xs text-white flex flex-row items-center justify-center ${
              isLoading
                ? "bg-gray-500 cursor-wait"
                : "bg-gray-900 hover:bg-slate-800"
            }`}
          >
            Get Shareable Link{" "}
            {isLoading ? (
              <SpinnerIcon className="ml-2 animate-spin" />
            ) : (
              <ArrowRightIcon className="ml-2 hidden group-hover:flex" />
            )}
          </button>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-200 px-4 py-3 flex flex-row items-center justify-start space-x-2">
          <WarningIcon className="text-red-500" />
          <p className="text-xs font-light text-red-700">
            Error: {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default Description;
