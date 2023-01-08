import Head from "next/head";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head>
        <title>Counter App</title>
      </Head>
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount(count - 1)}>DEC</button>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </div>
  );
};

export default Counter;