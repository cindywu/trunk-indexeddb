import React from 'react'
import Reference from './reference'
import styles from '../styles/reference-list.module.css'


export default function ReferenceList(props:any) {
  return (
    <div className={styles.container}>
      reference list

      {props.references.map((reference:any) => {
        return <Reference key={reference.id} {...reference} />
      })}

    </div>
  )
}
