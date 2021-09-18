import React, { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <Link href='/news/Halo%20Apakabar'>
          <li>Next JS is great framework</li>
        </Link>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
