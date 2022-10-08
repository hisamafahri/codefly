import { ArrowRightIcon } from "@assets/icon/ArrowRightIcon";
import { GithubIcon } from "@assets/icon/GithubIcon";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <div>
      <Head>
        <title>CodeFly - Share your codes easily!</title>
      </Head>
      <main>
        <NavBar />
        <div className="max-w-7xl mx-auto space-x-6 grid grid-cols-2 mt-8">
          <DescriptionSection />
          <div>
            <p>Code editor</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

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

const DescriptionSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">Let your codes fly!</h3>
      <div className="flex flex-col text-gray-700 font-light text-sm">
        <label htmlFor="description">Give your codes some description:</label>
        <textarea
          className="mt-1 p-2 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-gray-100"
          name="description"
          id="description"
          rows={10}
          maxLength={1024}
          placeholder="Description"
        ></textarea>
      </div>
      <div className="w-full flex items-center justify-end">
        <button className="group py-2 px-4 text-xs bg-gray-900 hover:bg-slate-800 text-white flex flex-row items-center justify-center">
          Get Shareable Link{" "}
          <ArrowRightIcon className="ml-2 hidden group-hover:flex" />
        </button>
      </div>
    </div>
  );
};
