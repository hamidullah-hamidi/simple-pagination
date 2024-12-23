import { useEffect } from 'react';
import { useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';

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
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=100');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className='container mt-5 d-flex flex-column align-items-center '>
      <h1 className='text-primary mb-4'>My Blog</h1>
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
