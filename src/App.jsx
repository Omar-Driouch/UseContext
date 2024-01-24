import { useState } from 'react'
import Blog from './Blog';
import { ThemeContext, ThemeContextProvider } from './hooks/useTheme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <input type='text'/>
      <ThemeContextProvider >
        <div className="container">
          <Blog />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App
