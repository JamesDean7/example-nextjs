import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';


export type User = {
    id:number,
    name:string,
    email:string
}

const Post = () => {

    const route = useRouter();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<any>([]);

    useEffect(()=>{
        fetchPost()
    },[])
    console.log(route);

    const fetchPost = async () => {
        const postFetch = await fetch('https://jsonplaceholder.typicode.com/users');
        const postList = await postFetch.json()
        setPost([...postList])
        setLoading(false);
    }

    const displayPost = (postList:User[]) => {
        return postList.map((post, index)=>{
            return <div key={index}><Link href={`${route.pathname}/${post.id}`}><a>{post.name}</a></Link></div>
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
        <Header />
        <h3>Post</h3>
        <div>
            {
                displayPost(post)
            }
        </div>
    </div>
  )
}

export default Post