import { GithubIcon } from "@assets/icon/GithubIcon";
import Link from "next/link";

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
export default NavBar;
