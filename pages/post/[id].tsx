import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const PostById = () => {

  const route = useRouter();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  console.log(route);

  useEffect(()=>{
      fetchPost()
  },[])

  const fetchPost = async () => {
      const postFetch = await fetch(`https://jsonplaceholder.typicode.com/users/${route.query.id}`);
      const postList = await postFetch.json()
      setPost({...postList})
      setLoading(false);
  }

  const displayPost = (post:any) => {
    return <div>
      <p>{post.name}</p>
      <p>{post.email}</p>
    </div>
  }

  if(loading) {
    return <div>Loading...</div>
  }


  return (
  <div>
      <Head>
            <title>Post By Id Page CSR</title>
            <meta name="description" content="This is Post by Id Page" />
      </Head>
      <h3>Post by id : CSR</h3>
      <div>
        <button onClick={()=>{route.back()}}>Back</button>
      </div>
      <div>
          {
              displayPost(post)
          }
      </div>
  </div>
)
}

export default PostById