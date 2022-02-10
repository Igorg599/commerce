import { Button } from "@material-ui/core"
import { useState } from "react"
import { IMenuItem } from "../../types"
import Modal from "../Modal"
import { MenuItemWrapped } from "./styled"

interface IItem {
  item: IMenuItem
  onRemove: (id: number) => void
}

const MenuItem = ({ item, onRemove }: IItem) => {
  const [modalActive, setmodalActive] = useState<boolean>(false)

  const onDeleteUser = () => {
    onRemove(item.id)
  }

  return (
    <MenuItemWrapped>
      <p>{item.title}</p>
      <img
        alt="item"
        src={item.thumbnailUrl}
        onClick={() => {
          setmodalActive(true)
          document.body.style.overflow = "hidden"
        }}
      />
      <Button variant="contained" onClick={onDeleteUser}>
        Удалить
      </Button>
      <Modal active={modalActive} setActive={setmodalActive} item={item} />
    </MenuItemWrapped>
  )
}

export default MenuItem
