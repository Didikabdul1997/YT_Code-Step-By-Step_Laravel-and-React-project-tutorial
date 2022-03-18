import { useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header"

function SearchProduct() {
  const [data, setData] = useState([])
  async function search(key) {
    console.log(key)
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json()
    setData(result)
    console.log(result)
  }
  return (
    <>
      <Header />
      <div className="col-md-6 offset-3">
        <h1>SearchProduct Page</h1>
        <input type="text" onChange={(e) => search(e.target.value)} className="form-control mb-3" placeholder="Search Product" />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((itema) =>
              <tr>
                <td>{itema.id}</td>
                <td>{itema.name}</td>
                <td>{itema.price}</td>
                <td>{itema.description}</td>
                <td><img alt="/favicon.ico" style={{ "width": 100 }} src={"http://localhost:8000/storage/" + itema.file_path} /></td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default SearchProduct