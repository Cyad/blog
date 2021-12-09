import Layout from '@components/layout'
import Head from 'next/head'

export default function Post() {
  return (
    <Layout active='/learn'>
      <Head>
        <title>learn</title>
      </Head>
      learn
    </Layout>
  )
}

Post.getInitialProps = async (res) => {
  console.log(res)
  return {}
}