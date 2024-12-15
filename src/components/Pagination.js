function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
  const pageNumber = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumber.push(i);
  }

  function paginate(number) {
    setCurrentPage(number);
  }

  return (
    <ul className='pagination mt-3'>
      {pageNumber.map((number) => (
        <li className='page-item'>
          <a onClick={() => paginate(number)} className='page-link' href='#'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Pagination;
