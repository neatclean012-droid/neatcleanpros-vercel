import Head from "next/head";
import NeatCleanProsLanding from "@/components/NeatCleanProsLanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>NeatClean Pros LLC — Premium Cleaning in GA</title>
        <meta name="description" content="NeatClean Pros — Limpieza premium en Jesup, Waycross, Brunswick, Hinesville y alrededores. Reserva por WhatsApp o llamada." />
      </Head>
      <NeatCleanProsLanding />
    </>
  );
}
