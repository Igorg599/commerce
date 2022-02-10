import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { storeToolkit } from "./reduxToolkit/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeToolkit}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
