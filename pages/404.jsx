import Link from "next/link";

import { Layout } from "../components";

export default function Custom404() {
  return (
    <Layout title="Pagina no encontrada">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "10vw" }}>Pagina no encontrada</h1>
        <p>
          <Link href="/">
            <a
              style={{ fontSize: "5vw", color: "#88F", textDecoration: "none" }}
            >
              Regresar al inicio
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
