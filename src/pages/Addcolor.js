import { React, useEffect } from "react";
import CustomInput from "../com/CustomInput";
const Addcolor = () => {
    return (
        <div>
            <h3 className="mb-4 title">
                Add Color
            </h3>
            <div>
                <form action="" >
                    <CustomInput
                        type="color"
                        label="Enter Product Color"
                    />
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Color
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addcolor;
