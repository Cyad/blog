import Layout from '@components/layout'
import Link from 'next/link'
import { Sandpack } from "@codesandbox/sandpack-react";
import HeaderPage from '@components/HeaderPage';


export default function Home() {
  const list = []
  for (let i = 0 ; i < 100; i++) {
    list[i] = {
      id: i,
      type : i % 3 === 0 ? 'history' : 'learn'
    }
  }
  return (
    <>
      <HeaderPage />
      <Layout title={`ChuYi's Blog`} active='/'>
      </Layout>
    </>
  )
}
