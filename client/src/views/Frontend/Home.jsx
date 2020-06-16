import React from "react";

import Slider from "../../components/Sliders/Slider";
import slideImages from "../../utils/slideImages";
import CardItem from "../../components/HolverableCardMenu/CardItem";

import imgCard1 from "../../assets/img/card/blog_1.jpg";
import imgCard2 from "../../assets/img/card/blog_2.jpg";
import imgCard3 from "../../assets/img/card/blog_3.jpg";

const HomePage = () => {

    return(
        <>
            <Slider slides={ slideImages } />
            <div className="card-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h4>Exchange Rate</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h4>Latest News</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h4>Banking List</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row card-menu">
                        <div className="col-lg-4 blog_item_col">
                            <CardItem img={ imgCard1 }/>
                        </div>
                        <div className="col-lg-4 blog_item_col">
                            <CardItem img={ imgCard2 }/>
                        </div>
                        <div className="col-lg-4 blog_item_col">
                            <CardItem img={ imgCard3 }/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;