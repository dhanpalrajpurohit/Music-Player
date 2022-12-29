import React from 'react'
import './index.css'
import Card from './Card';

function index(props) {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="cards-wrapper">
                            <Card />
                        </div>
                    </div>
                    {
                        props.musicList.map((ele, index)=>{
                            return (
                                <div class="carousel-item">
                                    <div class="cards-wrapper">
                                        <Card songdetail={ele}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default index
