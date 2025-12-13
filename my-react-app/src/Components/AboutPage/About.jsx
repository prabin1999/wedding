import React from 'react'
import decore from "../../assets/Images/decor.jpg"
import "../../assets/Style/Aboutbanner.css"
const About = () => {
    return (
        <div className="container abouts-section">

            <div className="row">
                <div className="col-12">
                    <div className="img-container">
                        <img src={decore} alt="decor" className="decore-img" />
                        <h2 className="overlay-text text-white">About</h2>
                    </div>
                </div>
            </div>

            <div className="row mt-5 justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">
                    <p className="abouts-text text-center">
                        We offer a unique opportunity for travelers from around the world to join real Indian weddings and cultural events. From colorful Haldi ceremonies to musical Sangeet nights, from royal bridal costumes to delicious traditional feasts — we make you a member of the family, not just a visitor.

                        Dress up in authentic Indian outfits, enjoy live performances, learn rituals, dance with the Baraat, and capture unforgettable memories. Every experience is fully guided and customized for comfort, safety, and joy.

                        Whether you love culture, festivals, food, or photography, our programs give you the chance to discover India’s beautiful traditions in the most exciting way — through love, celebration, and togetherness
                    </p>
                </div>
            </div>

        </div>



    )
}

export default About
