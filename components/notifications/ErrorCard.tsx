import { MouseEventHandler } from "react";

type Props = {
  isVisible: boolean;
  onClose: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ErrorCard({ isVisible, onClose }: Props) {
  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } alert alert-error shadow-lg w-1/2 ml-16 absolute z-10 bottom-12`}
    >
      <div className="flex justify-between flex-1">
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-4">
            Error! Task failed successfully. Open your console for more
            information.
          </span>
        </div>
        <div className="flex-none">
          <button onClick={onClose} className="btn btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
