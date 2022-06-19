import React from 'react'
import styles from"./Search.module.scss"

const index = () => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="24" 
        viewBox="0 0 24 24" 
        width="24"
       >
        <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
      </svg>
        <input className={styles.input}  placeholder='Поиск пиццы'/>
    </div>
  )
}

export default index