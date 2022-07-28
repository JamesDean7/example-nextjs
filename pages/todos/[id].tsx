import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export const getServerSideProps: GetServerSideProps = async ({params}) => {

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


const TodoById = (props:any) => {

  const route = useRouter();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
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
            <title>Todo By Id Page CSR</title>
            <meta name="description" content="This is Post by Id Page" />
      </Head>
      <h3>Todo by id</h3>
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