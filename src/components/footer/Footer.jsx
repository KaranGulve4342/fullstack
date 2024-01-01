import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>KaranDev</div>
      <div className={styles.text}>
        My Creative Thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer
