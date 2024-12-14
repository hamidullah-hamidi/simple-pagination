import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(function () {
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
        postPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
