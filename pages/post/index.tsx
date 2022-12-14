import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../../layouts";
import Header from "../components/Header";

export type User = {
  id: number;
  name: string;
  email: string;
};

const Post = () => {
  const route = useRouter();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<any>([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const postFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const postList = await postFetch.json();
    setPost([...postList]);
    setLoading(false);
  };

  const displayData = (postList: User[]) => {
    return postList.map((post, index) => {
      return (
        <div key={index} className="test_data">
          <Link href={`${route.pathname}/${post.id}`}>
            <a>{post.name}</a>
          </Link>
        </div>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(" ::: page - post ::: ");

  return (
    <>
      <Head>
        <title>Post Page CSR</title>
        <meta name="description" content="This is Post Page" />
      </Head>
      <Header />
      <h3>Post : CSR</h3>
      <div>{displayData(post)}</div>
    </>
  );
};

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout variant="user" requiredLevel="user">
      {page}
    </Layout>
  );
};

export default Post;
