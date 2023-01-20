import React from 'react';
import './index.css';

function Card(props) {
    console.log(props.title)

    return (
        < div class="carousel-item" >
            <div class="cards-wrapper">
                <div class="card">
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card
