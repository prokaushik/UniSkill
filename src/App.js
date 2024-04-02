import "./App.css"
import Pages from "./components/pages/Pages"
import { Button } from "react-bootstrap"

function App() {
  return (
    <>
  <Button className="btn btn-primary logout-btn" >Logout</Button>
  <Pages />
    </>
  )
}

export default App
