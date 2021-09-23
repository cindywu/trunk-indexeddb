import React from 'react'
import Link from 'next/link'
import styles from '../../styles/workspace.module.css'
import NavNorth from '../../components/nav-north'
import NavEast from '../../components/nav-east'
import NavSouth from '../../components/nav-south'
import NavWest from '../../components/nav-west'

export default function Workspace() {
  return (
    <div className={styles.container}>
      <NavEast/>
      <div className={styles.center}>
        <NavNorth/>
        <NavSouth/>
      </div>
      <NavWest/>
    </div>
  )
}
