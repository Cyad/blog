import React, {useEffect, useState} from 'react'
import Layout from '@components/layout'
import HeaderPage from '@components/HeaderPage';
import List from '@components/List'
import Button from '@components/Button'
import Spin from '@components/Spin';

const list = [
  {
      id: 0,
      img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-ym62z7.jpg',
      title: 'test1',
      type: 'history',
      descript: '这是一段描述',
  },
  {
      id: 1,
      img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-g83jz3.jpg',
      title: 'test2',
      type: 'history',
      descript: '这是一段描述',
  },
  {
      id: 2,
      img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-g83jz3.jpg',
      title: 'test3',
      type: 'fe',
      descript: '这是一段描述',
  },
  {
      id: 3,
      img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-ym62z7.jpg',
      title: 'test1',
      type: 'fe',
      descript: '这是一段描述',
  },
  {
      id: 4,
      img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-g83jz3.jpg',
      title: 'test2',
      type: 'fe',
      descript: '这是一段描述',
  },
]

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    setData(list)
  }, [])
  return (
    <div>
      <HeaderPage />
      <Layout title={`ChuYi's Blog`} active='/'>
        <Spin visible={visible}>
          <List data={data}/>
          <Button onClick={()=>{
            setVisible(true)
            setTimeout(() => {
              setData([...data,...list])
              setVisible(false)
            }, 1000);
          }}>加载更多</Button>
        </Spin>
      </Layout>
    </div>
  )
}
