import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CreateProductForm({user}) {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");

    const [data, setData] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`http://localhost:5000/product/get/${user._id}`);

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
            axios.post(`http://localhost:5000/product/update/${user._id}`, data)
            .then((res) => {
                alert("Product Added");
                navigate("/");
            })
        })
        // window.location.reload(false);
    }



    return (
        <div className='container'>
            <h1 className='mb-5' >Sell Product</h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Product Name" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Image</label>
                    <input type="file" className="form-control-file" onChange={(e) => setImage(e.target.files[0])} id="exampleFormControlFile1" />
                </div>
                <div classNameName='form-group'>
                    <label for="exampleFormControlFile1">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control">
                        <option>__select__</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="baby">Baby</option>
                        <option value="accerssories">Accerssories</option>
                        <option value="shoes">Shoes</option>
                        <option value="electronic">Electronic</option>
                    </select>
                </div>
                <div classNameName='form-group'>
                    <label for="exampleFormControlFile1">Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} className="form-control">
                        <option>__select__</option>
                        <option>Regular Product</option>
                        <option>Creative Product</option>
                    </select>
                </div>

                <button type="submit" onClick={(e) => submitProductData(e)} className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}
