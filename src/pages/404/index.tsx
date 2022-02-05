import styles from './index.module.css'
import Link from 'next/link'

export default function NoMatch() {
  return (
    <div className={styles.noMatch}> 
      <p className={styles.noMatch_title}>
        很抱歉！您的页面走丢了......
      </p>
      <div className={styles.noMatch_box}>
          {/* <div className={styles.noMatch_button}>返回</div> */}
          <div className={styles.noMatch_button}>
            <Link href='/'>
              <a style={{color: '#fff'}}>返回首页</a>
            </Link>
          </div>
      </div>
    </div>
  )
}
