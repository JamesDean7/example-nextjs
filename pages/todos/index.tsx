import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Layout from "../../layouts";
import Header from "../components/Header";
import { User } from "../post";

export async function getServerSideProps() {
  const todoFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  const todoList = await todoFetch.json();
  return {
    props: { todos: todoList }, // will be passed to the page component as props
  };
}

const Todos = (props: any) => {
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
  console.log(" ::: page - todos ::: ");
  return (
    <>
      <Head>
        <title>Todo Page SSR</title>
        <meta name="description" content="This is TODO Page" />
      </Head>
      <Header />
      <h3>Todo : SSR</h3>
      <h3>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</h3>
      <div>{displayData(props.todos)}</div>
    </>
  );
};

Todos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout variant="admin" requiredLevel="admin">
      {page}
    </Layout>
  );
};

export default Todos;
