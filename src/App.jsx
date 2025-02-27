import React, { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isVisible && <h1>Привет, мир!</h1>}
    </div>
  );
}

export default App;