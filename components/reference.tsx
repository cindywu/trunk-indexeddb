import React from 'react'
import styles from '../styles/reference.module.css'

export default function Reference(props:any) {
  return (
    <div className={styles.container}>
      <div> id/{props.id.slice(-4)}</div>
      <div> parent/{props.parent.slice(-4)}</div>
      <div> title/{props.title}</div>
      <div> tags/{props.tags}</div>
      <div> date/{props.date}</div>
      <div> user/{props.user} </div>
    </div>
  )
}
