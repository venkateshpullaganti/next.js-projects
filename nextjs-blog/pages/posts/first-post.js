import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../../components/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <div>
        <h1>First Post</h1>
        <Link href="/">Got Back to Home</Link>
      </div>
    </Layout>
  );
}

export default FirstPost;
