import React from 'react';
import Row from '../components/Row';

export default function Shows() {
  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Nicolas Cage Shows</h1>
      <Row title="Comedy Shows" genre="Comedy" type="shows" />
<Row title="Crime Shows" genre="Crime" type="shows" />
<Row title="Drama Shows" genre="Drama" type="shows" />
<Row title="Action Shows" genre="Action" type="shows" />
<Row title="Adventure Shows" genre="Adventure" type="shows" />
<Row title="Fantasy Shows" genre="Fantasy" type="shows" />
<Row title="Mystery Shows" genre="Mystery" type="shows" />

    </div>
  );
}
