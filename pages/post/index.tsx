import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


type Post = {
    id:number,
    title:string,
    content:string
}

const index = () => {

    const route = useRouter();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<any>([]);

    useEffect(()=>{
        fetchPost()
    },[])
    console.log(route);

    const fetchPost = async () => {
        const postFetch = await fetch('http://localhost:4000/post');
        const postList = await postFetch.json()
        setPost([...postList])
        setLoading(false);
    }

    const displayPost = (postList:Post[]) => {
        return postList.map((post)=>{
            return <div><Link href={`${route.pathname}/${post.id}`}><a>{post.title}</a></Link></div>
        })
    }

    if(loading) {
        return <div>Loading...</div>
    }


  return (
    <div>
        <Head>
            <title>Post Page CSR</title>
            <meta name="description" content="This is Post Page" />
        </Head>
        <h3>Post</h3>
        <div>
            {
                displayPost(post)
            }
        </div>
    </div>
  )
}

export default index