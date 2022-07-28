import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header';
import { User } from '../post';


export async function getServerSideProps() {

    const todoFetch = await fetch('https://jsonplaceholder.typicode.com/users');
    const todoList = await todoFetch.json()
    return {
      props: {todos:todoList}, // will be passed to the page component as props
    }
  }


const Todos = (props:any) => {

    console.log(' ::: Todos ::: ')
    console.log(props);

  const route = useRouter();

  const displayPost = (todoList:User[]) => {
        return todoList.map((todo, index)=>{
            return <div key={index}><Link href={`${route.pathname}/${todo.id}`}><a>{todo.name}</a></Link></div>
        })
  }

  return (
    <>
        <Head>
            <title>Todo Page SSR</title>
            <meta name="description" content="This is TODO Page" />
        </Head>
        <Header />
        <h3>Todo</h3>
        <div>
            {
                displayPost(props.todos)
            }
        </div>
    </>
  )
}

export default Todos