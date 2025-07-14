/**
    - Movies page component that displays multiple Rows for different genres.
 */

import React from 'react';
import Row from '../components/Row';

export default function Movies() {
  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Nicolas Cage Movies</h1>
      <Row title="Comedy" genre="Comedy" type="movies" />
<Row title="Crime" genre="Crime" type="movies" />
<Row title="Drama" genre="Drama" type="movies" />
<Row title="Action" genre="Action" type="movies" />
<Row title="Adventure" genre="Adventure" type="movies" />
<Row title="Mystery" genre="Mystery" type="movies" />
<Row title="Fantasy" genre="Fantasy" type="movies" />

    </div>
  );
}
