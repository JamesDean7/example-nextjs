import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }


export const getStaticProps: GetStaticProps = async ({params}) => {

    let todo;
    if(params && params.id) {
        const todoFetch = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        todo = await todoFetch.json()
    }else {
        todo = null;
    }
  
    return {
        props: {todo}, // will be passed to the page component as props
    }
}


const TodoById = (props:any) => {

  const route = useRouter();
  console.log(route);

  const displayPost = (todo:any) => {
    return <div>
      <p>{todo.name}</p>
      <p>{todo.email}</p>
    </div>
  }

  if(!props.todo) {
    return <div>Data Not found</div>
  }


  return (
  <div>
      <Head>
            <title>User By Id Page CSR</title>
            <meta name="description" content="This is Post by Id Page" />
      </Head>
      <h3>User by id</h3>
      <div>
        <button onClick={()=>{route.back()}}>Back</button>
      </div>
      <div>
          {
              displayPost(props.todo)
          }
      </div>
  </div>
)
}

export default TodoById