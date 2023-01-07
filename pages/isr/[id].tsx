import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export async function getStaticPaths() {

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, 
  }
  
}

export const getStaticProps: GetServerSideProps = async ({params}) => {

    let todo;
    if(params && params.id) {
        const todoFetch = await fetch(`http://localhost:4000/todos/${params.id}`);
        todo = await todoFetch.json()
    }else {
        todo = null;
    }
  
    return {
        props: {todo}, // will be passed to the page component as props
    }
}


const ISRById = (props:any) => {

  const route = useRouter();
  console.log(route);

  const displayPost = (todo:any) => {
    return <div>
      <p>{todo.title}</p>
      <p>{todo.completed}</p>
    </div>
  }

  if(!props.todo) {
    return <div>Data Not found</div>
  }


  return (
  <div>
      <Head>
            <title>ISRById</title>
            <meta name="description" content="ISRById" />
      </Head>
      <h3>ISR By Id</h3>
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

export default ISRById