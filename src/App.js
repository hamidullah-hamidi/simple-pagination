import { useEffect } from 'react';
import { useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const lastIndex = postsPerPage * currentPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=100');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className='container mt-4'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
      />
    </div>
  );
}

export default App;
