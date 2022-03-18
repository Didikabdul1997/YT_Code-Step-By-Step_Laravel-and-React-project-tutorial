import { useState } from "react";
import Header from "./Header"

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct() {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);

    let item = { name }
    let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
      method: 'POST',
      body: formData,
    });
    result = await result.json()
    if (result.id) {
      alert("data has been saved")
    } else {
      alert("save data failed")
    }
  }

  return (
    <>
      <Header />
      <div>
        <h1>AddProduct Page</h1>
        <div className="col-sm-6 offset-sm-3">
          <input value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
          <input type="file" placeholder="File" onChange={(e) => setFile(e.target.files[0])} className="form-control mb-3" />
          <input value={price} type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} className="form-control mb-3" />
          <input value={description} type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="form-control mb-3" />
          <button onClick={addProduct} className="btn btn-primary">Save</button>
        </div>
      </div>
    </>
  )
}

export default AddProduct