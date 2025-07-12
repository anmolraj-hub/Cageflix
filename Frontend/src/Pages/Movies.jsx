import React from 'react';
import Row from '../components/Row';

export default function Movies() {
  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Nicolas Cage Movies</h1>
      <Row title="Comedy" genre="Comedy" />
      <Row title="Crime" genre="Crime" />
      <Row title="Drama" genre="Drama" />
      <Row title="Action" genre="Action" />
      <Row title="Adventure" genre="Adventure" />
      <Row title="Mystery" genre="Mystery" />
      <Row title="Fantasy" genre="Fantasy" />
    </div>
  );
}
