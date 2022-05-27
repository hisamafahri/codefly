export default function AddDescriptionSection() {
  return (
    <div>
      <p className="mb-2">Give your codes some description</p>
      <textarea
        className="textarea textarea-bordered w-full h-36 mb-6"
        maxLength={1024}
        placeholder="Add your code description..."
      />
      <div className="items-center justify-end flex">
        <button className="btn gap-2 btn-primary">
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
