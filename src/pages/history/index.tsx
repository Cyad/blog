import Layout from '@components/layout'
import Link from 'next/link'

export default function Home() {
  const list = []
  for (let i = 0 ; i < 100; i++) {
    list.push(i)
  }
  return (
    <Layout title={'首页'} active='/history'>
      <div> 
      {
        list.map(item => {
          return (
            <h2 style={{height: 100}} key={item}>
              <Link href={`history/${item}`}> 
                <a>history-{item}</a>
              </Link>
            </h2>
          )
        })
      }
      </div>
    </Layout>
  )
}
