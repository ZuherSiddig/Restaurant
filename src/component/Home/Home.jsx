import { Fragment } from "react";
import Header from "./Header/Header";
import './Home.css'
import Data from "../../Data";
import Carousel from 'react-bootstrap/Carousel';
import man from "./../../melAssets/femal.jpg"
import man1 from "./../../melAssets/male.jpg"
import women from "./../../melAssets/male1.jpg"

export default function Home() {

    const Meal = Data.map((item) => {
        return (
            <div className="col-md-6">
                <div className="box">
                    <img src={item.img} alt="" />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>

                <button a href="#">Order Me</button>
            </div>
        )
    });

    return (
        <Fragment>
            <Header />

            <section className="numbers">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-3">
                            <h2>2345+</h2>
                            <h6>SAVING</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>2345+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>2345+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>2345+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./assets/food1.jpg" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h2>Pride is important</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui hic nam</p>
                            <button href="#">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* MULTIMEALS SECTION */}
            <section className="mulitmeals">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <h2>It's Not over Until I win</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                            </ul>
                            <button href="#">Learn more</button>
                        </div>

                        <div className="col-md-6">
                            <img src="./assets/multimeals.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="stomach">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 , col-md-6">

                            <h2>When a man's stomach is full it makes no <br /> <span>difference whether he is rich or poor</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span> Minus, enim quaerat?<br />  Perspiciatis accusamus, atque iste culpa delectus.</span></p>
                            <a href="#">Watch Our Work</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Meals">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Explore Our Food</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nemo debitis.</p>
                        </div>
                    </div>

                    <div className="row">
                        {Meal}
                    </div>
                </div>
            </section>

            <section className="tasty">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Discover Our Greate And Tasty Food</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">

                        </div>
                    </div>
                </div>
            </section>

            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testminal</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={man} alt="" />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={man1} alt="" />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={women} alt="" />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>

            </section>

            <section className="souce">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Always Stay Tone</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    );
}
