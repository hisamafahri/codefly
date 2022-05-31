import { MouseEventHandler, useState } from "react";

type Props = {
    isVisible: boolean;
    onClose: MouseEventHandler<HTMLButtonElement> | undefined;
    url?: string;
};

export default function SuccessModal({ isVisible, onClose, url }: Props) {
    let urlType = new URL(url as string);
    let path = urlType.pathname;
    const [isCopyInProgress, SetIsCopyInProgress] = useState(false);
    function copyUrl() {
        SetIsCopyInProgress(true);
        navigator.clipboard.writeText(url as string);
        setTimeout(() => {
            SetIsCopyInProgress(false);
        }, 250);
    }
    return (
        <>
            <input
                type="checkbox"
                id="success-modal"
                className="modal-toggle"
                checked={isVisible}
                readOnly
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Your codes are flying 💫
                    </h3>
                    <p className="py-4">
                        Now, you can share your codes with the link below:
                    </p>
                    <div className="form-control w-full">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Link..."
                                className="input input-bordered flex-1"
                                value={url as string}
                                disabled
                            />
                            <label
                                onClick={copyUrl}
                                className="swap swap-rotate items-center btn btn-square"
                            >
                                <input
                                    type="checkbox"
                                    checked={isCopyInProgress}
                                    readOnly
                                />

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 swap-off"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 swap-on"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </label>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button onClick={onClose} className="btn btn-ghost">
                            Close
                        </button>
                        <a
                            href={path}
                            target="_blank"
                            rel="norefferer"
                            className="btn btn-primary"
                        >
                            Open&nbsp;{" "}
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
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
