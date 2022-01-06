import Layout from '@components/layout'
import HeaderPage from '@components/HeaderPage';
import List from '@components/List'


export default function Home() {
  const list = []
  for (let i = 0 ; i < 100; i++) {
    list[i] = {
      id: i,
      type : i % 3 === 0 ? 'history' : 'learn'
    }
  }
  return (
    <div>
      <HeaderPage />
      <Layout title={`ChuYi's Blog`} active='/'>
          <List data={[]}/>
      </Layout>
    </div>
  )
}
