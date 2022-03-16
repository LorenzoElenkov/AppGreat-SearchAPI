import React from 'react';
import styles from './ImgCard.module.css';

const ImgCard = (props) => {
  return (
    <div className={styles.imgCard} key={props.id}>
        <img className={styles.image} src={props.link} alt={props.description}/>
        <p className={styles.description}>{props.description}</p>
        <a className={styles.authorLink} href={props.authorlink} target='_blank'>{props.author}</a>
    </div>
  )
}

export default ImgCard;