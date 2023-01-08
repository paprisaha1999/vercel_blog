import Head from "next/head";
import Image from "next/image";

const Blogs = ({ blogs }) => {
  // this props will pass here only, comming from backend directly
  return (
    <div>
      <Image src="./next.svg" alt="xyz" width={100} height={100} />
      <br />
      <Image
        src="https://avatars.githubusercontent.com/u/106386112?s=400&u=009cf6575c822741a1d2a90957d7a8bf38c8750a&v=4"
        alt="xyz"
        width={200}
        height={200}
      />
      <Head>
        <title>Blogs</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>Blogs</h2>
        {blogs.map((blog) => (
          <h3 key={blog.id}>{blog.title} </h3>
        ))}
      </div>
    </div>
  );
};

// SSR
// export async function getServerSideProps() {
//   let r = await fetch("http://localhost:8080/blogs");
//   let d = await r.json();
//   return {
//     props: {
//       blogs: d, // we return blogs a as props
//     },
//   };
// }

// SSG
// when we sure, that our data will never going to change , for that we use getStaticProps, instead of getServerSideProps
export async function getStaticProps() {
  let r = await fetch("http://localhost:8080/blogs");
  let d = await r.json();
  return {
    props: {
      blogs: d, // we return blogs a as props
    },
  };
}

export default Blogs;
