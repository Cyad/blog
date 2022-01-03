import Icon from '@components/Icon';
import styles from './index.module.css'

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

const Theme = () => {
    return (
        <>
            <span className={`${styles.theme} block`} 
                onClick={()=>{ 
                    window.__setPreferredTheme('dark');
                }}>
                <Icon type='Moon' width={24} height={24} />
            </span>
            <span className={`${styles.theme} hidden`} 
                onClick={()=>{
                    window.__setPreferredTheme('light');
                }}>
                <Icon type='Sun' width={24} height={24} />
            </span>
        </>
    )
}

export default Theme