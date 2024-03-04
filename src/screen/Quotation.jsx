import { useEffect, useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import React from 'react';
const data = [

    {
        name: "Airtel",
        product: "sim",
        city: " banglore",
        contact: "9867453243"
    },
    {
        name: "Bike",
        product: "chains",
        city: " chennai",
        contact: "8945324378"

    },
    {
        name: "Nissan",
        product: "chase",
        city: "trichy",
        contact: "8965473254"

    },
    {
        name: "Toyato",
        product: "engine",
        city: "chennai",
        contact: "8970123579"


    },
    // {
    //     _id: "65e46f08c635158508084a85",
    //     name: "shoukath",
    //     product: "mobile",
    //     city: "vpm",
    //     contact: "9677705312",
    //     __v: 0
    // }

]

const Quotation = () => {
    const [vendorList, setVedorList] = useState()
    console.log(vendorList)
    // get vendor fetch api call

    useEffect(() => {
        fetch('http://localhost:4000/getvendor', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
            .then((data) => setVedorList(data)).catch((error) => console.log(error))
    }, [])

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'product', //access nested data with dot notation
                header: 'product',
                size: 150,
            },
            {
                accessorKey: 'city', //access nested data with dot notation
                header: 'city',
                size: 150,
            },
            {
                accessorKey: 'contact', //access nested data with dot notation
                header: 'contact',
                size: 150,
            },



        ]
    )
    const test = vendorList ? vendorList : data
    // const table = useMaterialReactTable({vendorList, columns })
    return (
        <div>

            {vendorList ? <MaterialReactTable data={vendorList} columns={columns} enableEditing={true}
                 ColumnActionsIndex ={ -1} /> : <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}

        </div>
    )
}

export default Quotation