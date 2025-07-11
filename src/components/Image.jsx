import React from "react";

export const Image = ({ title, smallImage, onClick }) => {
    return (
        <div className="portfolio-item" onClick={onClick} style={{ userSelect: "none" }}>
            <div className="hover-bg position-relative">
                <div className="hover-text position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-2 rounded">
                    <h5>{title}</h5>
                </div>
                <img
                    src={smallImage}
                    className="img-fluid"
                    alt={title}
                    style={{ width: "100%", display: "block", borderRadius: "6px" }}
                    draggable={false}
                />
            </div>
        </div>
    );
};
