function posts({ loading, posts }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group'>
      {posts.map((post) => (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default posts;
