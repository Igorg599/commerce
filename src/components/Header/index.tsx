import { TextField } from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "../../reduxToolkit/store"
import { HeaderWrapped } from "./styled"

interface IHeader {
  searchAlbum: (value: number) => void
}

const Header = ({ searchAlbum }: IHeader) => {
  const items = useSelector(({ menu }: RootState) => menu.items)

  function onUpdateSearch(event: React.ChangeEvent<HTMLInputElement>) {
    searchAlbum(+event.currentTarget.value.replace(/[^0-9]/g, ""))
  }

  return (
    <HeaderWrapped>
      <h1>Some TITLE</h1>
      {items && (
        <>
          <p>Фильтрация по альбомам</p>
          <TextField
            id="outlined-basic"
            label="Введите номер альбома"
            variant="outlined"
            style={{ width: 220, margin: "-10px auto 20px auto" }}
            onChange={onUpdateSearch}
          />
        </>
      )}
    </HeaderWrapped>
  )
}

export default Header
