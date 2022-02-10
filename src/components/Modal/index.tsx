import { IMenuItem } from "../../types"

interface IModal {
  item: IMenuItem
  active: boolean
  setActive: any
}

const Modal = ({ item, active, setActive }: IModal) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false)
        document.body.style.overflow = "visible"
      }}
    >
      <div
        className="cl-btn-4"
        onClick={() => {
          setActive(false)
          document.body.style.overflow = "visible"
        }}
      ></div>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <img alt="item" src={item.url} style={{ width: 500 }} />
      </div>
    </div>
  )
}

export default Modal
