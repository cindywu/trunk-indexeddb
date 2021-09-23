import React from 'react'
import styles from '../styles/nav-south.module.css'
import ReferenceList from './reference-list'

export default function NavSouth(props:any) {
  return (
    <div className={styles.container}>
      south
      <ReferenceList references={props.references}/>
    </div>
  )
}
