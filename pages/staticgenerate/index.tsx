import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";

export async function getStaticProps() {
  const userFetch = await fetch("http://localhost:4000/todos");
  const userList = await userFetch.json();
  return {
    props: { todos: userList }, // will be passed to the page component as props
  };
}

const ISR = ({ todos }: any) => {
  const route = useRouter();

  const displayPost = (todoList: any) => {
    return todoList.map((todo: any, index: number) => {
      return (
        <p key={index}>
          <Link href={`${route.pathname}/${todo.id}`}>
            <a>{todo.title}</a>
          </Link>
        </p>
      );
    });
  };

  return (
    <div>
      <Header />
      <h3>Static Genetation</h3>
      <div>{displayPost(todos)}</div>
    </div>
  );
};

export default ISR;
