interface IPagination {
  itemsPerPage: number
  totalItems: number | null | undefined
  paginate: (pageNumber: number) => void
  currentPage: number
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers = []

  if (typeof totalItems === "number") {
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i)
    }
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              type="button"
              onClick={() => paginate(number)}
              className="page-link"
              style={{
                backgroundColor: currentPage === number ? "bisque" : "",
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination
