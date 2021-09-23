import React from 'react'
import Reference from './reference'
import styles from '../styles/reference-list.module.css'


export default function ReferenceList() {
  return (
    <div className={styles.container}>
      reference list
      <Reference />
      <Reference />
    </div>
  )
}
