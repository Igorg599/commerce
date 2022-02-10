import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MenuItem, Pagination } from "../../components"
import {
  fetchDataMenu,
  loadMenu,
  removeItem,
} from "../../reduxToolkit/slices/menu"
import { RootState } from "../../reduxToolkit/store"
import { MenuWrapped } from "./styled"

interface IMenu {
  filterAlbum: null | number
}

const Menu = ({ filterAlbum }: IMenu) => {
  const dispatch = useDispatch()
  const items = useSelector(({ menu }: RootState) => menu.items)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(100)

  useEffect(() => {
    setCurrentPage(1)
  }, [filterAlbum])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstitem = indexOfLastItem - itemsPerPage
  const currentPizzas = items
    ? filterAlbum
      ? items
          .filter((item) => item.albumId === filterAlbum)
          .slice(indexOfFirstitem, indexOfLastItem)
      : items.slice(indexOfFirstitem, indexOfLastItem)
    : null

  const paginate = useCallback(
    (pageNumber: number) => setCurrentPage(pageNumber),
    []
  )

  const menu = localStorage.getItem("menu")

  useEffect(() => {
    if (menu) {
      dispatch(loadMenu(JSON.parse(menu)))
      return
    }
    const fetchLoad = () => {
      Promise.resolve(dispatch(fetchDataMenu()))
        .then((data) => dispatch(loadMenu(data)))
        .catch((err) => console.log(err))
    }

    fetchLoad()
  }, [menu, dispatch])

  const onRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  return (
    <>
      <MenuWrapped>
        {currentPizzas &&
          currentPizzas.map((item) => (
            <MenuItem key={item.id} item={item} onRemove={onRemoveItem} />
          ))}
      </MenuWrapped>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={
          items &&
          items.filter((item) =>
            filterAlbum ? item.albumId === filterAlbum : item
          ).length
        }
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  )
}

export default Menu
