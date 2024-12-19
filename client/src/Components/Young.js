import React from 'react';
import s from "../Assets/s.jpg";
import d from "../Assets/d.jpg";
import o from "../Assets/o.png";
import c from "../Assets/c.jpg";

 

export default function TeenAwareness() {

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Read & Learn</h1>
      <p style={styles.introText}>
        It’s important to understand how drugs can affect your body and mind.
        Educating yourself is the first step toward making safe, informed choices.
      </p>


      <h2 style={styles.sectionTitle}>What are Drugs?</h2>
      <p style={styles.text}>
        Drugs are substances that change how your body and mind work. While some have medical uses,
        others can be dangerous, especially when misused.
      </p>


      <h2 style={styles.sectionTitle}>Types of Drugs</h2>

 

      {/* Stimulants Card */}

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src={s} style={styles.cardImage} alt="Stimulants" />
          <div style={styles.cardBody}>
            <h5 style={styles.cardTitle}>Stimulants</h5>
            <p style={styles.cardText}>
              Increase energy and alertness, but can be addictive.
              <br />Examples: Cocaine, Methamphetamine, Ecstasy.
            </p>
          </div>
        </div>
      </div>

 

      {/* Depressants Card */}

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src={d} style={styles.cardImage} alt="Depressants" />
          <div style={styles.cardBody}>
            <h5 style={styles.cardTitle}>Depressants</h5>
            <p style={styles.cardText}>
              Slow down brain function and cause drowsiness.
              <br />Examples: Alcohol, Xanax, Valium.
            </p>
          </div>
        </div>
      </div>

 

      {/* Opioids Card */}

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src={o} style={styles.cardImage} alt="Opioids" />
          <div style={styles.cardBody}>
            <h5 style={styles.cardTitle}>Opioids</h5>
            <p style={styles.cardText}>
              Often used for pain relief but highly addictive.
              <br />Examples: Heroin, Morphine, Codeine.
            </p>
          </div>
        </div>
      </div>

 

      {/* Cannabinoids Card */}

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src={c} style={styles.cardImage} alt="Cannabinoids" />
          <div style={styles.cardBody}>
            <h5 style={styles.cardTitle}>Cannabinoids</h5>
            <p style={styles.cardText}>
              Derived from cannabis; can alter mood and perception.
              <br />Examples: Marijuana, Hashish.
            </p>
          </div>
        </div>
      </div>

 

      <footer style={styles.footer}>
        Knowledge is power. Being informed about these substances helps you make safer choices.
      </footer>
    </div>

  );

}

 

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
 },

  title: {
    textAlign: 'center',
    fontSize: '2em',
    color: '#2c3e50',
    marginBottom: '20px',
  },

  introText: {
    fontSize: '1.2em',
    textAlign: 'center',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '30px',
  },

  sectionTitle: {
    fontSize: '1.5em',
    color: '#34495e',
    marginTop: '30px',
  },

  text: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px',
  },

  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px auto',
    overflow: 'hidden',
    maxWidth: '540px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'row',
  },

  cardImage: {
    width: '180px',
    height: '100%',
    objectFit: 'cover',
  },

  cardBody: {
    padding: '15px',
  },

  cardTitle: {
    fontSize: '1.3em',
    color: '#2980b9',
    marginBottom: '10px',
  },

  cardText: {
    fontSize: '1em',
    color: '#666',
  },

  footer: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '0.9em',
    color: '#777',
    marginTop: '30px',
    borderTop: '1px solid #ddd',
  },

};