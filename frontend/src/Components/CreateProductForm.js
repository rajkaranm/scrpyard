import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CreateProductForm() {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");

    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("http://localhost:5000/product/get/63368fc215109e4842819487");

            setData(req.data);
        }
        fetchData();
    }, [])


    const submitProductData = (e) => {
        e.preventDefault()

        const fd = new FormData();
        fd.append("file", image);
        fd.append("upload_preset", "scrpyard")

        axios.post("https://api.cloudinary.com/v1_1/dp4rxqw03/image/upload", fd).then((res) => {
            data.sellingNormalProduct.push({
                productName: productName,
                productType: type,
                imgUrl: res.data.secure_url,
                description: description,
                price: price,
            })
            setData(data);
            console.log(data);
            axios.post("http://localhost:5000/product/update/63368fc215109e4842819487", data)
            .then((res) => {
                alert("Product Added");
            })
        })
        // window.location.reload(false);
    }



    return (
        <div className='container'>
            <h1 className='mb-5' >Sell Product</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Product Name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Image</label>
                    <input type="file" class="form-control-file" onChange={(e) => setImage(e.target.files[0])} id="exampleFormControlFile1" />
                </div>
                <div className='form-group'>
                    <label for="exampleFormControlFile1">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} class="form-control">
                        <option>__select__</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="baby">Baby</option>
                        <option value="accerssories">Accerssories</option>
                        <option value="shoes">Shoes</option>
                        <option value="electronic">Electronic</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label for="exampleFormControlFile1">Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} class="form-control">
                        <option>__select__</option>
                        <option>Regular Product</option>
                        <option>Creative Product</option>
                    </select>
                </div>

                <button type="submit" onClick={(e) => submitProductData(e)} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
