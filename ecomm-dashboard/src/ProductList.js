import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header"

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result)
  }

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE"
    });
    result = await result.json()
    console.log(result)
    fetchData();
  }

  return (
    <>
      <Header />
      <div>
        <h1>ProductList Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Operation</th>
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
                  <td>
                    <span onClick={() => deleteOperation(itema.id)} className="delete">Delete</span>
                    <Link to={"/update/" + itema.id}>
                      <span className="update">Update</span>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div >
    </>
  )
}

export default ProductList