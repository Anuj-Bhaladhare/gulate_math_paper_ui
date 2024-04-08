import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
    </div>
  );
};

// Inline styles (you can use external CSS or CSS-in-JS libraries instead)
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '36px',
    color: 'red',
  },
  text: {
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
  },
};

export default NotFound;
