import React from 'react'
import christian from "../../assets/Images/christian.jpg"
import rokha from "../../assets/Images/rokha.jpg"
import sikh from "../../assets/Images/sikh.jpg"
import south from "../../assets/Images/southind.jpg"
import royal from "../../assets/Images/royalrajasthani.jpg"
import assam from "../../assets/Images/assamese.jpg"

import '../../assets/Style/Recently.css'




const cardData = [
    { id: 1, title: "Christian Wedding", text: "Mumbai", img: christian },
    { id: 2, title: "Muslim Wedding", text: "Maharashtra", img: rokha },
    { id: 3, title: "Punjabi Wedding", text: "Punjab", img: sikh },
    { id: 4, title: "Southindian Wedding", text: "South Indian", img: south },
    { id: 5, title: "Rajasthani Wedding", text: "Rajasthan", img: royal },
    { id: 6, title: "Assamese Wedding", text: "Assam", img: assam },
];

const Recently = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='text-center recent'>Choose a celebration ,Live the culture</h2>
                <p className='text-center mb-5 recent-para'>
                    We don’t just plan events, we create experiences that live forever.<br />
                    Your wedding or celebration is a chapter in your love story, and we ensure every detail reflects you.</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
                    {cardData.map((card) => (
                        <div className="col d-flex justify-content-center" key={card.id}>
                            <div className="card card-overlay text-center border-0 card-service">
                                <img src={card.img} alt={card.title} className="card-img" />
                                <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white">
                                    <h5 className="card-title text-center">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recently
