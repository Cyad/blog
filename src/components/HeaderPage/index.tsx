import styles from './index.module.css'

const HeaderPage = () => {
    const typing = `welcome to ChuYi's blog`
    return (
        <div className={styles.headerPage}>
            <h1 className={styles.headerLogo}>ChuYi's Blog</h1>
            <p className={styles.typing}>{typing}</p>
        </div>
    )
}

export default HeaderPage