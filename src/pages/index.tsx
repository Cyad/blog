import Layout from '@components/layout'
import Link from 'next/link'


export default function Home() {
  const list = []
  for (let i = 0 ; i < 100; i++) {
    list[i] = {
      id: i,
      type : i % 3 === 0 ? 'history' : 'learn'
    }
  }
  return (
    <Layout title={'首页'} active='/'>
      <div> 
      {
        list.map(item => {
          return (
            <h2 style={{height: 100}} key={item.id}>
              <Link href={`/${item.type}/${item.id}`}> 
                <a>{item.type}-{item.id}</a>
              </Link>
            </h2>
          )
        })
      }
      </div>
    </Layout>
  )
}
