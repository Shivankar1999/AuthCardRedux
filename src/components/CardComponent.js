import React from 'react';
// import './CardComponent.css';
import styles from '../styles/CardD.module.css';
import { FaRegCheckCircle, FaShareSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardComponent = ({ onAddToDeals, onCheckDetails }) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftsection}>
        <div className={styles.topsection}>
          <p>1 Feb 2023</p>
          <p>
            <strong>RFQID</strong> <span>01098098</span>
          </p>
          <button className={styles.verifiedbutton}>
            <FaRegCheckCircle /> Verified
          </button>
        </div>
        <div className={styles.bottomsection}>
          <div className={styles.dealinfo}>
            <p>
              <strong>Deal No:</strong> 1429
            </p>
            <Link to={'/share'}>
              <FaShareSquare /> &nbsp;Share
            </Link>
          </div>
          <div className={styles.dealstatus}>
            <h3 style={{ fontWeight: 'bolder' }}>Spare Parts</h3>
            &nbsp;
            <button className={styles.livebutton}>Live</button>
          </div>
          <p className={styles.fullwidthheading}>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ab, quam impedit nam amet, pariatur, illo perferendis
            iusto incidunt quos neque assumenda ut non accusamus facere dolorum.
            Corrupti, hic temporibus.{' '}
          </p>
          <div className={styles.productbuttons}>
            <button className={styles.productbutton}>Product</button>
            <button className={styles.productbutton}>Product</button>
            <button className={styles.productbutton}>Agriculture</button>
            <button className={styles.productbutton}>Product</button>
            <button className={styles.productbutton}>Product</button>
          </div>
        </div>
      </div>
      <div className={styles.rightsection}>
        <div className={styles.rsFirst}>
          <p>
            {' '}
            <strong>Closing Date </strong>
            <span>25 Feb 2023</span>
          </p>
        </div>
        <div className={styles.rightbottom}>
          <button className={styles.bluebutton} onClick={onAddToDeals}>
            Add to my deals
          </button>
          <Link to={'/details'}>
            <button className={styles.whitebutton} onClick={onCheckDetails}>
              Check Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
