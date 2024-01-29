import React from "react";
import "../Styling/styles.css";
import lady from "../assets/lady.jpg";
import lady2 from "../assets/lady2.jpg";
import guy from "../assets/guy.jpg";
import guy2 from "../assets/guy2.jpg";

const Home = () => {
  return (
    <>
      <section className="hero--wrapper">
        <h1 className="hero--large-text">Point Break Legal</h1>
        <div className="hero-small-text">
          <p className="p">
            Whether you're drafting a will, facing a personal injury claim, or
          </p>
          <p className="p">
            navigating corporate governance, we are your first step towards
            resolution.
          </p>
          <p>
            We pride ourselves on a track record of success and a reputation for
            excellence.
          </p>
          <p>
            Discover unwavering expertise and client-focused legal services at
            your fingertips.
          </p>
        </div>
        <button className="book--btn">Book Now</button>
      </section>
      <section className="services--wrapper">
        <div className="services--content">
          <h1>Services</h1>
          <br />
          <div className="services--card">
            <div className="card">
              <h1>Will</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                a! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, vitae.
              </p>
            </div>
            <div className="card">
              <h1>Estate</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                a! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, vitae.
              </p>
            </div>
            <div className="card">
              <h1>Trade Mark</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                a! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, vitae.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team--wrapper">
        <div className="team--content">
          <h1>Meet The Team</h1>
          <div className="staffs">
            <div className="staff--content">
              <div className="staff--left">
                <img src={lady} alt="director's picture" />
              </div>
              <div className="staff--right">
                <h2>Hailey Bailey</h2>
                <h3>Principal Lawyer</h3>
                <p>
                  Hello and welcome! I'm Hailey and I am the Director and
                  Co-Founder of Point Break Legal.
                </p>
                <p>
                  My goal is for kindness to be considered a strength and not a
                  weakness in the practice of law.
                </p>
              </div>
            </div>
            <div className="staff--content">
              <div className="staff--left">
                <img src={guy} alt="senior lawyer's picture" />
              </div>
              <div className="staff--right">
                <h2>Kevin Parker</h2>
                <h3>Chief Lawyer</h3>
                <p>
                  Hi I'm Kevin, and I am the chief lawyer and Co-Founder of
                  Point Break Legal.
                </p>
                <p>
                  My goal is for kindness to be considered a strength and not a
                  weakness in the practice of law.
                </p>
              </div>
            </div>
            <div className="staff--content">
              <div className="staff--left">
                <img src={lady2} alt="director's picture" />
              </div>
              <div className="staff--right">
                <h2>Ella Brooke</h2>
                <h3>Senior Lawyer</h3>
                <p>
                  Hello and welcome! I'm Ella and I am a senior lawyer at Point
                  Break Legal.
                </p>
                <p>
                  My goal is for kindness to be considered a strength and not a
                  weakness in the practice of law.
                </p>
              </div>
            </div>
            <div className="staff--content">
              <div className="staff--left">
                <img src={guy2} alt="senior lawyer's picture" />
              </div>
              <div className="staff--right">
                <h2>Fred Turner</h2>
                <h3>Senior Lawyer</h3>
                <p>Hi I'm Fred, and I am a lawyer at Point Break Legal.</p>
                <p>
                  My goal is for kindness to be considered a strength and not a
                  weakness in the practice of law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
