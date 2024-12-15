import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastIndex = currentPage * postsPerPage;
  const fistIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(fistIndex, lastIndex);

  

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=100'
      );
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
