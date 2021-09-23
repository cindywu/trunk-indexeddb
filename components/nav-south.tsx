import React from 'react'
import styles from '../styles/nav-south.module.css'
import ReferenceList from './reference-list'

export default function NavSouth() {
  return (
    <div className={styles.container}>
      south
      <ReferenceList />
    </div>
  )
}
