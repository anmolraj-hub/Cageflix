import React from 'react';
import Row from '../components/Row';

export default function Shows() {
  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Nicolas Cage Shows</h1>
      <Row title="Comedy Shows" genre="Comedy" />
      <Row title="Crime Shows" genre="Crime" />
      <Row title="Drama Shows" genre="Drama" />
      <Row title="Action Shows" genre="Action" />
      <Row title="Adventure Shows" genre="Adventure" />
      <Row title="Fantasy Shows" genre="Fantasy" />
      <Row title="Mystery Shows" genre="Mystery" />
    </div>
  );
}
