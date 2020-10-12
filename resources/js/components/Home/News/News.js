import React from "react";
import Property from "../Property/Property";

// css
import "./News.scss";

const News = props => {
    return (
        <section className="section news">
            <div className="container">
                <h2 className="section__title">Recent News</h2>

                <div className="d-flex mt-3 news__items">
                    <Property />
                </div>
            </div>
        </section>
    );
};

News.propTypes = {};

export default News;
