function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumbers.push(i);
  }

  function paginate(number) {
    setCurrentPage(number);
  }

  return (
    <ul className='pagination position-absolute bottom-0 mb-5'>
      {pageNumbers.map((number) => (
        <li key={number} className='page-item'>
          <a onClick={() => paginate(number)} href='#' className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
