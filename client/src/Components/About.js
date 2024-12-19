import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  return (
    <div>
      <div className="container mt-5">
        
        {/* About Us Heading with fade-in animation */}
        <motion.h1
          className="display-4 text-center text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
          {/* Who We Are Section */}
          <div className="row mt-4">
          <div className="col-lg-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="h4 text-center text-primary">Who We Are</h3>
              <p>
              We are a team of software engineering students from the University of Technology and Applied Sciences - Nizwa (UTAS-Nizwa).
              Our goal is to provide a safe space for people of all ages to learn about the dangers of drug abuse and access support for prevention and recovery.
              We believe in the power of education, empathy, and compassion in creating a drug-free future.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row">
          <div className="col-lg-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="h4 text-center text-primary">Our Mission</h3>
              <p>
                At <strong>Voice of Awareness</strong>, our mission is to educate, inform, and inspire individuals of all ages about the dangers of drug abuse. We aim to break the cycle of addiction through awareness, offering vital information and resources that empower individuals, families, and communities to make informed decisions. Our platform strives to:
              </p>
              <ul>
                <li>Raise awareness about the harmful effects of drugs on health and society</li>
                <li>Provide age-appropriate resources for prevention and recovery</li>
                <li>Offer expert advice and guidance to help individuals and their loved ones navigate the journey to recovery</li>
                <li>Create a supportive environment where users can find the help they need at any stage of their journey</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="row mt-4">
          <div className="col-lg-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="h4 text-center text-primary">Our Vision</h3>
              <p>
                Our vision is to create a world where every individual, regardless of age, has the knowledge, support, and opportunity to live free from the dangers of drug abuse. Through education and advocacy, we envision a future where people of all ages are empowered to make healthy, informed choices that lead to fulfilling, drug-free lives. We strive to be a trusted resource in the fight against addiction, fostering hope and recovery for individuals, families, and communities worldwide.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-5 mb-5">
          <h2 className="text-center text-primary">Our Team</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card shadow-sm hover-shadow-lg border-0 bg-info">
                <div className="card-body text-center">
                  <h5 className="card-title">Tiba Mohammed AL-Shaibani</h5>
                  <p className="card-text">26S2036@utas.edu.om</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm hover-shadow-lg border-0 bg-info">
                <div className="card-body text-center">
                  <h5 className="card-title">Wafa Mohammed AL-Azri</h5>
                  <p className="card-text">26s2030@utas.edu.om</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm hover-shadow-lg border-0 bg-info">
                <div className="card-body text-center">
                  <h5 className="card-title">Maram Abdullah AL-Suleimani</h5>
                  <p className="card-text">26s2058@utas.edu.om</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
