import React from 'react';
import { RestauranFood } from '../../assets';
import { useNavigate } from "react-router-dom"
import "./sectionPreview.css";

const SectionPreview = () => {
    const navigate = useNavigate()

    return (
        <section
            className="section-preview"
        >
            <div className="container">
                <div className="preview-inner">
                    <div className="preview-desc">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                        <button onClick={() => navigate("/booking")}>
                            Reserve Table
                        </button>
                    </div>
                    <div className="preview-image">
                        <img src={RestauranFood} alt="Preview Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionPreview