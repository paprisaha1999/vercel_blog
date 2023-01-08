import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";

const Blog = ({ blog }) => {
  // getting the props
  // const router = useRouter(); // for dynamic routing
  //   console.log(router); // // returns us a object with query: id: 2

  // const { id } = router.query;

  const [data, setData] = useState(blog);
  const updateDiscription = async () => {
    console.log("current dat", data);
    let r = await axios.patch(`http://localhost:8080/blogs/${data.id}`, {
      description: "Hello",
    });
    let d = await r.data;
    console.log("backend update", d);

    setData(d);
  };

  return (
    <div style={{ display: "flex" }}>
      <h2>{blog.title} - </h2>
      <h2 style={{ fontWeight: "normal" }}> {blog.description}</h2>
      <button onClick={updateDiscription}>Update Discription</button>
    </div>
  );
};

export async function getStaticPaths() {
  // used along getStaticProps, when we want to generate multiple html pages for dynamic routing
  let r = await fetch(`http://localhost:8080/blogs`);
  let blogs = await r.json();
  return {
    paths: blogs.map((blog) => ({ params: { id: String(blog.id) } })), // for each parameters it will create a new html page
    fallback: false,
  };
}

// export async function getServerSideProps(context) { // this function will execute on server not on clint // context is used to share id from line 9 // context variable provides us the current info of url
//   let id = context.params.id; //this is from backend
//   //   console.log(id);  // even it shows the answer in vs code console, not in browser console // with this backend can read the url

//   let r = await fetch(`http://localhost:8080/blogs/${id}`);
//   let d = await r.json();
//   return {
//     props: {
//       blog: d, // passing as an props
//     },
//   };
// }

export async function getStaticProps(context) {
  // this function will execute on server not on clint // context is used to share id from line 9 // context variable provides us the current info of url
  let id = context.params.id; //this is from backend
  //   console.log(id);  // even it shows the answer in vs code console, not in browser console // with this backend can read the url

  let r = await fetch(`http://localhost:8080/blogs/${id}`);
  let d = await r.json();
  return {
    props: {
      blog: d, // passing as an props
    },
  };
}

export default Blog;
