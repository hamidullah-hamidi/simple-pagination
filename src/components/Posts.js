import { useState } from 'react';

function Posts({ posts, loading }) {
  const [active, setActive] = useState(null);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  function handleClick(id) {
    setActive((preId) => (preId === id ? null : id));
  }

  return (
    <ul className='list-group'>
      {posts.map((post) => (
        <li
          className={`list-group-item ${
            active === post.id ? 'bg-light' : ''
          } cursor-pointer`}
          key={post.id}
          onClick={() => handleClick(post.id)}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
