import { FC } from 'react'
import DividerProps from 'types/components/Divider'
import styles from './divider.module.scss'

const Divider: FC<DividerProps> = ({width}) => {
  return (
    <div style={{width: `${width}%`}} className={styles.divider}  />
  )
}

export default Divider