import React, { useState } from "react";
import PropTypes from "prop-types";

// scss
import "./DetailPage.scss";

// components
import Header from "../../Common/Header/Header";

const DetailPage = props => {
    const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7]);
    console.log(images);
    return (
        <div className="detail page">
            <Header />

            <div className="container-fluid">
                <main className="detail__content">
                    <div className="detail__content--img">
                        {images.map((image, index) => {
                            return (
                                <div
                                    className={`detail__images-wrapper ${
                                        index === 0 ? "main" : ""
                                    }`}
                                    key={index}
                                >
                                    <img
                                        src="https://photos.zillowstatic.com/p_e/IS76c3x3zt75q30000000000.jpg"
                                        alt="property images"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="detail__content--detail container-fluid">
                        <div className="detail__detail--header d-flex justify-content-between align-items-center py-3">
                            <div className="logo">
                                <h2>Logo</h2>
                            </div>

                            <ul className="socials d-flex">
                                <li className="socials__item mr-3">
                                    <i className="far fa-heart mr-2"></i>
                                    Save
                                </li>

                                <li className="socials__item mr-3">
                                    <i className="fas fa-share mr-2"></i>
                                    Share
                                </li>
                                <li className="socials__item">
                                    <i className="fas fa-ellipsis-h mr-2"></i>{" "}
                                    More
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

DetailPage.propTypes = {};

export default DetailPage;
