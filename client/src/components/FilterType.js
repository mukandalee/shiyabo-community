import React, { Fragment, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

function FilterType({ filterParam, setFilterParam }) {
    // categories usestate
    const [categories, setCategories] = useState([])

    // getting categories from server
    useEffect(() => {
        fetch("/categories")
        .then((r)=>r.json())
        .then((data) => setCategories(data))
    },[]);
    
    return (
        <Fragment>   
       
            <Form.Select 
                style={{width: "30%"}}
                
                aria-label="Default select example"
                // new value of selection becomes the filterParam
                onChange={(e) => {
                    setFilterParam(e.target.value);
                    console.log(e.target.value);
                }}
            >
                <option value="All">Filter by Event Category</option>
                {categories.map((item) => (
                        <option value={item["name"]}>{item["name"]}</option>
                ))}

                
            </Form.Select>
        </Fragment>
    )

}

export default FilterType;