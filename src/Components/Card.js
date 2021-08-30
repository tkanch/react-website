import React from 'react'

const Card = ({index,data}) => {
    const imgSrc=`images/${data.img}.jpg`;
   
    return (
        <article className="card" key={index}>
            <img src={imgSrc} alt={data.img} />
            <div className="desc">
                <h3>{data.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta.</p>
                <button>Learn More</button>
            </div>
        </article>
    )
}

export default Card
