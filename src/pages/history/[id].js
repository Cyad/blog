import Layout from '@components/layout'
import Head from 'next/head'

export default function Post({href}) {
  return (
    <Layout active='/history' href={href}>
      <Head>
        <title>history</title>
      </Head>
      history
    </Layout>
  )
}

Post.getInitialProps = async (res) => {
  return {href: res.asPath}
}