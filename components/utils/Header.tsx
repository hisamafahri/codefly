import Head from "next/head";

type Props = {
  title: String;
};

export default function Header({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="CodeFly help you share your codes easily"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
