import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Error1 from "@/components/error/Error1";

const ErrorDark = () => {
  return (
    <>
      <Head>
        <title>Error Dark</title>
        <meta name="description" content="Error Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="none" defaultMode="dark">
          <Error1 />
        </RootLayout>
      </main>
    </>
  );
};

export default ErrorDark;
