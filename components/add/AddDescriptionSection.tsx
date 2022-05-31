import { MouseEventHandler } from "react";

type Props = {
    onShareClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function AddDescriptionSection({ onShareClick }: Props) {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Let your codes fly 🚀</h1>
            <p className="mb-2 text-base">
                Give your codes some description (max. 1024)
            </p>
            <textarea
                className="textarea textarea-bordered w-full h-36 mb-6"
                maxLength={1024}
                placeholder="Add your code description..."
            />
            <div className="items-center justify-end flex">
                <button
                    onClick={onShareClick}
                    className="btn gap-2 btn-primary"
                >
                    Get Shareable Link
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
