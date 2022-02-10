import { styled } from "@material-ui/core"

export const MenuItemWrapped = styled("div")({
  minWidth: 300,
  maxWidth: 300,
  height: 300,
  margin: "10px 20px",
  border: "1px solid brown",
  padding: 10,
  borderRadius: 10,
  textAlign: "center",
  position: "relative",
  "&> img": {
    position: "absolute",
    display: "block",
    bottom: 30,
    transform: "translateX(50%)",
    cursor: "pointer",
  },
  boxShadow: "0px 4px 9px rgb(255 116 0 / 29%)",
  "&:hover": {
    backgroundColor: "#F0FFFF",
    boxShadow: "9px 12px 20px 0px rgba(34, 60, 80, 0.42)",
  },
})
