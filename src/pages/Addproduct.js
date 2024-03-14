import { React, useEffect, useState } from "react";
import CustomInput from "../com/CustomInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
const Addproduct = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
    }
    return (
        <div>
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form className="d-flex gap-3 flex-column" >
                    <CustomInput
                        type="text"
                        label="Enter Product Title"
                        name="title"
                    />
                    <div className="">
                        <ReactQuill
                            theme="snow"
                            name="description"
                        />
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Product Price"
                        name="price"
                    />
                    <select
                        name="brand"
                        className="form-control py-3 mb-3"
                        id=""
                    >
                    </select>
                    <select
                        name="category"
                        className="form-control py-3 mb-3"
                        id=""
                    >
                        
                    </select>
                    <select
                        name="tags"
                        className="form-control py-3 mb-3"
                        id=""
                    >
                    </select>
                    
                    <CustomInput type="number" label="Enter Product Quantity" name="quantity" />
                    <Dropzone
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>
                                        Drag 'n' drop some files here, or click to select files
                                    </p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5" type="submit">Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;
