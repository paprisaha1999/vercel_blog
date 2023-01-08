import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const onClickBlogs = () => {
    router.push("/blogs");
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        backgroundColor: "lightcyan",
        boxShadow: "10px 5px 5px gray",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <button onClick={goBack}>Go Back</button>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h3>
        <Link href="/counter">Counter</Link>
      </h3>
      <button onClick={onClickBlogs}>Blogs</button>
    </div>
  );
};

export default Navbar;
