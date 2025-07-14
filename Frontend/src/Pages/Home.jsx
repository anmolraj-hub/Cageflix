/**
 * Home page component that displays a Banner and multiple Rows for different genres.
 */

import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Row genre="Action" type="home" />
<Row genre="Comedy" type="home" />
<Row genre="Drama" type="home" />
<Row genre="Crime" type="home" />
<Row genre="Thriller" type="home" />
<Row genre="Sci-Fi" type="home" />
<Row genre="Adventure" type="home" />

    </div>
  );
}
