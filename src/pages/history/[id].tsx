import HeaderPage from '@components/HeaderPage'
import Layout from '@components/layout'
import Head from 'next/head'
import React from 'react'

export default function Post({href}) {
  return (
    <>
      <Head>
        <title>history</title>
      </Head>
      <HeaderPage height={'20vh'}/>
      <Layout active='/history' href={href}>
        <div style={{height: 3000}}/>
        history
      </Layout>
    </>
  )
}

Post.getInitialProps = async (res) => {
  return {href: res.asPath}
}