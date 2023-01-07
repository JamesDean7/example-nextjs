import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import { User } from "../post";

export async function getStaticProps() {
  const userFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = await userFetch.json();
  return {
    props: { user: userList }, // will be passed to the page component as props
  };
}

const User = (props: any) => {
  const route = useRouter();

  const displayData = (todoList: User[]) => {
    return todoList.map((todo, index) => {
      return (
        <div key={index} className="test_data">
          <Link href={`${route.pathname}/${todo.id}`}>
            <a>{todo.name}</a>
          </Link>
        </div>
      );
    });
  };

  console.log(" ::: page - user ::: ");
  console.log(props);

  return (
    <>
      <Head>
        <title>Users Page Static Generation</title>
        <meta name="description" content="This is User Page" />
      </Head>
      <Header />
      <h3>User : Static Generation</h3>
      <div>{displayData(props.user)}</div>
    </>
  );
};

export default User;
