import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// component
import Nav from "../../Nav/Nav";
import Header from "../../Common/Header/Header";
import Property from "../../Property/Property";

// scss
import "./CollectionsPage.scss";

const CollectionsPage = props => {
    const [searchResult, setSearchResult] = useState(Array.from(new Array(20)));

    useEffect(() => {
        console.log(process.env.MIX_REACT_APP_MAPBOX_TOKEN);
    }, []);

    //
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longtitude: -75.6903,
        scrollZoom: true,
        zoom: 9,
        width: "100%",
        height: "100%"
    });

    return (
        <div className="collections page">
            <Header />
            <Nav />
            <div className="collections__content">
                {/* map */}
                <div className="collections__content-map">
                    <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken={
                            process.env.MIX_REACT_APP_MAPBOX_TOKEN
                        }
                        onViewportChange={viewport =>
                            setViewport(() => viewport)
                        }
                    ></ReactMapGL>
                </div>

                {/* search result */}
                <div className="collections__content-result">
                    <div className="search-result p-3">
                        <h3 className="search-result__title">
                            TPHCM - District 2 Listing
                        </h3>

                        <div className="d-flex justify-content-between">
                            <p>1,557 result</p>
                            <div className="search-result__sort">
                                <span className="h3 font-weight-bold">
                                    Sort By:{" "}
                                </span>
                                <div className="search-result__select border px-2 d-inline-block">
                                    <span>Newest</span>
                                    <i className="ml-2 fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>

                        {/* properties */}
                        <div className="d-flex justify-content-between mt-3 flex-wrap">
                            {searchResult.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="search-result__item my-2"
                                    >
                                        <Property />
                                    </div>
                                );
                            })}
                        </div>
                        {/* end properties */}
                    </div>
                </div>
            </div>
        </div>
    );
};

CollectionsPage.propTypes = {};

export default CollectionsPage;
