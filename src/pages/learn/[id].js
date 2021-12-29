import Layout from '@components/layout'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Post({href}) {
  return (
    <Layout active='/learn' href={href}>
      <Head>
        <title>learn</title>
      </Head>
      learn
    </Layout>
  )
}

Post.getInitialProps = async (res) => {
  return {href: res.asPath}
}