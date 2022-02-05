import styles from './index.module.css'

export interface HeaderPageProps {
    height?: string;
    img?: string;
}

const HeaderPage = (props: HeaderPageProps) => {
    const { 
        height, 
        img = 'https://cdn.jsdelivr.net/gh/xiabor/img/Tibet/among-trees-f3-3840x2160.jpg'
     } = props
    const typing = `welcome to ChuYi's blog`
    return (
        <div 
            className={styles.headerPage} 
            style={{ 
                height: height || '100vh',
                backgroundImage: `url(${img})`
            }}>
            <h1 className={styles.headerLogo}>ChuYi's Blog</h1>
            <p className={styles.typing}>{typing}</p>
        </div>
    )
}

export default HeaderPage