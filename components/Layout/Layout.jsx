import Head from "next/head";

import { Navbar, Wrapper } from "../../components";

import { GlobalStyles } from "../../styles/Global.styles";

import { variables } from "../../config";

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <GlobalStyles />
      {/* SEO */}
      <Head>
        <title>{title ? `${title} - ` : ""}Agenda</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <header>
        <Navbar />
      </header>

      <main
        style={{
          padding: "0 1rem",
          overflowX: "hidden",
          overflowY: "auto",
          height: `calc(100vh - ${variables.navbar.height})`,
        }}
      >
        <Wrapper style={{ padding: "1rem 0" }}>{children}</Wrapper>
      </main>

      {/* Footer */}
      <footer></footer>
    </>
  );
};
