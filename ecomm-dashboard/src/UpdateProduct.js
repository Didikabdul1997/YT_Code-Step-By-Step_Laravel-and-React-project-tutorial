import Header from "./Header"
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from "react"

function UpdateProduct(props) {
  let id = props.match.params.id;
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/getProduct/" + id)
    result = await result.json()
    setData(result)
  }
  return (
    <>
      <Header />
      <div>
        <h1 className="mb-3">UpdateProduct Page</h1>
        <div className="col-md-6 offset-3">
          <input type="text" defaultValue={data.name} className="form-control mb-3" />
          <input type="text" defaultValue={data.price} className="form-control mb-3" />
          <input type="text" defaultValue={data.description} className="form-control mb-3" />
          <input type="file" defaultValue={data.file_path} className="form-control mb-3" />
          <img className="mb-3" style={{ width: 100 }} src={"http://localhost:8000/storage/" + data.file_path} /><br />
          <button className="btn btn-primary">Update product</button>
        </div>
      </div>
    </>
  )
}

export default withRouter(UpdateProduct) 