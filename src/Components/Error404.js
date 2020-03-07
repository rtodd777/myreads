import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div className="bigText">Error 404: Page Not Found</div>
    <div className="home">
      <Link to="/">Return home and try again</Link>
    </div>
  </div>
);

export default NotFound;