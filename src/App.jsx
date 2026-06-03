import { useRef, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new ResizeObserver(() => {
      setHeaderHeight(headerRef.current.offsetHeight);
    });

    observer.observe(headerRef.current);

    setHeaderHeight(headerRef.current.offsetHeight);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header headerRef={headerRef}/>
      <Main headerHeight={headerHeight}/>
    </>
  )
}

export default App
