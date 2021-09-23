import React from 'react'
import styles from '../../styles/workspace.module.css'
import NavNorth from '../../components/nav-north'
import NavEast from '../../components/nav-east'
import NavSouth from '../../components/nav-south'
import NavWest from '../../components/nav-west'

import { v4 as uuidv4 } from 'uuid'

export default function Workspace() {
  return (
    <div className={styles.container}>
      <NavEast/>
      <div className={styles.center}>
        <NavNorth/>
        <NavSouth references= {sampleReferences}/>
      </div>
      <NavWest/>
    </div>
  )
}

const sampleReferences = [
  {
    id: uuidv4(),
    parent: uuidv4(),
    title: 'title 1',
    tags: 'none',
    date: Date.now(),
    user: 'anon',
  },
  {
    id: uuidv4(),
    parent: uuidv4(),
    title: 'title 2',
    tags: 'none 2',
    date: Date.now(),
    user: 'anon 2',
  },

]
