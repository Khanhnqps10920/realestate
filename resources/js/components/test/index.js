import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const index = props => {
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/api/posts");
            console.log(res);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>test</h1>
            <h3>test</h3>
            <p>tesssss</p>
            <h4>test</h4>
            <h5>login brand test</h5>
        </div>
    );
};

index.propTypes = {};

export default index;
