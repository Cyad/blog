import Layout from '@components/layout'
import Head from 'next/head'

export default function Post() {
  return (
    <Layout active='/history'>
      <Head>
        <title>history</title>
      </Head>
      history
    </Layout>
  )
}

Post.getInitialProps = async (res) => {
  console.log(res)
  return {}
}