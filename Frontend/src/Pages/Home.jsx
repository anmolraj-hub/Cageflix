import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Row genre="Action" />
      <Row genre="Comedy" />
      <Row genre="Drama" />
      <Row genre="Crime" />
      <Row genre="Thriller" />
      <Row genre="Sci-Fi" />
      <Row genre="Adventure" />
    </div>
  );
}
