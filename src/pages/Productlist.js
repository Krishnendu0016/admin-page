import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi"; 
import { AiFillDelete } from "react-icons/ai";
const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Product",
        dataIndex: "product",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Date",
        dataIndex: "date",
    },

    {
        title: "Action",
        dataIndex: "action",
    },
];
const data1 = [];
for(let i=0;i<46;i++){
    data1.push({
        key: i,
        name:`Edward King ${i}`,
        product: 32,
      });
}
const Productlist = () => {
    return (
        <div>
            <h3 className="mb-4 title">Products</h3>
            <div>{<Table columns={columns} dataSource={data1} />}</div>
        </div>
    );
};

export default Productlist;
