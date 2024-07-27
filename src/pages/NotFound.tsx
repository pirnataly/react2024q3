import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default function NotFound() {
  return (
    <div>
      <h1 className="results-heading">Not Found</h1>
      <Link to="/" className="link results-heading">
        Go Home
      </Link>
    </div>
  );
}
