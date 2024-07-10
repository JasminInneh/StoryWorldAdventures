import React from "react";
import styles from "../../styles/aboutUs.module.css";
import founderImage from "../../img/founder-image.jpg";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className={styles.aboutUs} id="about">
        <div className="container">
          <div className={styles.header}>
            <h1>About Us</h1>
          </div>

          {/* Mission Section */}
          <div className={`${styles.section} ${styles.missionSection}`}>
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2>Our Mission</h2>
                <p>
                  At Story World Adventures, our mission is to provide parents
                  with a resource that cultivates a love for learning in their
                  children. We aim to bridge literacy gaps through engaging and
                  interactive stories that make learning fun and effective.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
                  alt="Mission"
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className={`${styles.section} ${styles.visionSection}`}>
            <div className="row">
              <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center">
                <h2>Our Vision</h2>
                <p>
                  We envision a world where every child has access to engaging
                  and educational content that fosters their curiosity and love
                  for reading. By leveraging technology, we aim to create an
                  immersive learning experience that captivates young minds.
                </p>
              </div>
              <div className="col-md-6 order-md-1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiR2KiJN30IM_n_Q-cEZiDP43ZhETk8RKxSw&s"
                  alt="Vision"
                  className={`${styles.image} ${styles.customWidth}`}
                />
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className={`${styles.section} ${styles.storySection}`}>
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2>Our Story</h2>
                <p>
                  Story World Adventures was founded with a passion for
                  education and technology. Understanding that children are
                  naturally drawn to digital devices, we sought to create an
                  application that turns screen time into productive learning
                  moments. Our stories are designed to be interactive, helping
                  children develop their reading skills while embarking on
                  exciting adventures.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://cdn.myportfolio.com/86e8a0fb-1a10-4498-a5f4-c4ebe6aece02/3ba28909-b0bf-4720-8fd1-0d9ee42f5332_rw_600.gif?h=9a6e14cf79b98ba643b43bacff7de62b"
                  alt="Our Story"
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          {/* Meet the Founder Section */}
          <div className={`${styles.section} ${styles.founderSection}`}>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={founderImage}
                  alt="Founder Jasmin Inneh"
              className={`${styles.image} ${styles.founderCustomImage}`}
                />
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2>Meet the Founder</h2>
                <p>
                  Jasmin Inneh created Story World Adventures with a simple
                  goal: to provide a fun and educational tool that supports
                  children’s literacy development. With a background in
                  education and a deep understanding of the challenges parents
                  face, Jasmin is dedicated to making learning accessible and
                  enjoyable for all children.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className={`${styles.section} ${styles.approachSection}`}>
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2>Our Approach</h2>
                <p>
                  We combine captivating stories with interactive elements to
                  create an immersive reading experience. Our app is designed to
                  adapt to each child's learning pace, ensuring that they remain
                  engaged and motivated to learn. We believe that by integrating
                  technology with education, we can create a brighter future for
                  our children.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className={styles.iconBlock}>
                  <img src="https://media2.giphy.com/media/mAZf4H4Pi0wwlj3ZAw/giphy.gif?cid=6c09b952jwvviocdz47bz1z55mabi4qxtug5sadyo26v5uu0&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
