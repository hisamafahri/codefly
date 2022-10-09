import Code from "@components/Code";
import Description from "@components/Description";
import NavBar from "@components/NavBar";
import { Monaco } from "@monaco-editor/react";
import { PrismaClient, record } from "@prisma/client";
import type { GetStaticPaths } from "next";
import Head from "next/head";
import { useRef } from "react";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const prisma = new PrismaClient();
  try {
    const record = await prisma.record.findUniqueOrThrow({
      where: {
        id: params.id,
      },
    });

    return {
      props: {
        record: { ...record, createdAt: record?.createdAt.toISOString() },
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const Record = ({ record }: { record: record }) => {
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    console.log("editor", editor, monaco);
    editorRef.current = editor;
  };
  return (
    <div>
      <Head>
        <title>CodeFly - Share your codes easily!</title>
      </Head>
      <main>
        <NavBar />
        <div className="max-w-7xl mx-8 xl:mx-auto md:space-y-6 flex flex-col mt-8">
          <Description disabled={true} value={record.description || ""} />
          <Code
            disabled
            fileName={record.file_name}
            onEditorMount={handleEditorDidMount}
            editorLanguage={record.language}
            editorValue={record.code}
          />
        </div>
      </main>
    </div>
  );
};

export default Record;
