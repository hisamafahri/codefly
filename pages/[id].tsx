import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import NavBar from "../components/navigations/NavBar";
import CodeSection from "../components/sections/CodeSection";
import Header from "../components/utils/Header";

const Read = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    if (data.status == "FAILED") {
        return (
            <>
                <Header title="CodeFly: share your codes easily" />
                <main className="font-mono">
                    <NavBar isShareButtonVisible={true} />
                    <div className="mt-24 justify-center flex w-full">
                        <Image src="/404.jpeg" width={"750px"} height={"600px"} />
                    </div>
                </main>
            </>
        );
    } else {
        const values = data.data.data[0];
        return (
            <>
                <Header title="CodeFly: share your codes easily" />
                <main className="font-mono">
                    <NavBar isShareButtonVisible={true} />
                    <ReadSection
                        description={
                            data.data.description == ""
                                ? "None"
                                : data.data.description
                        }
                        language={values.language}
                        fileName={values.fileName}
                        codeValue={values.value}
                    />
                </main>
            </>
        );
    }
};

export default Read;

type Props = {
    description: string;
    language: string;
    fileName: string;
    codeValue: string;
};

function ReadSection({ description, language, fileName, codeValue }: Props) {
    return (
        <div className="px-16 mt-12 h-screen">
            <h1 className="text-3xl font-bold mb-4">
                Here&apos;s the Code ⭐️
            </h1>

            <p className="mb-2 text-base">Description:</p>
            <p className="mb-12 text-base">{description}</p>

            <CodeSection
                readOnly={true}
                onChange={() => {}}
                onBlur={() => {}}
                language={language}
                fileName={fileName}
                value={codeValue}
            />
        </div>
    );
}

export const getServerSideProps = async (context: any) => {
    const { id } = context.query;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get/${id}`
    );
    const data: any = await res.json();

    return {
        props: {
            data,
        },
    };
};
