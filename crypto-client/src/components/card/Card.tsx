import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

type Card =
  | {
      name: string
      description: string
      children?: ReactNode
      withLink?: false
      linkHref?: string
      linkName?: string
    }
  | {
      name: string
      description: string
      children?: ReactNode
      withLink?: true
      linkHref: string
      linkName: string
    }

const Card = ({ children, ...rest }: Card) => {
  return (
    <section className={`${styles.card} shadow shadow-background-tertiary`}>
      <h2 className={styles.cardTitle}>{rest.name}</h2>
      <p className={styles.cardDescription}>{rest.description}</p>
      {rest?.linkHref !== undefined && (
        <Link
          className={styles.cardDocumentation}
          href={rest.linkHref}
          target="_blank"
          rel="noreferrer">
          {rest.linkName}
        </Link>
      )}
      {children}
    </section>
  )
}

export default Card
