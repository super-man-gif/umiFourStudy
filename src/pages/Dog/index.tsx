import React, { useEffect } from 'react'
import dog from '@/assets/yay.jpg'

const Home: React.FC = () => {
  const a =
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvehwfgewuifwfhewiufhewiufgewiufgewyfgewfugewyfgewfyg'
  let b = a
  console.log(b, 'hhhhhhh')

  let con = { content: 1, list: ['file', 'task'] }
  let treeList = [
    {
      title: 'task',
      key: 'tas',
      children: [],
    },
    {
      title: 'file',
      key: 'file',
      children: [
        {
          title: 'task',
          key: 'task',
          children: [
            {
              title: 'aaa',
              key: 'aaa',
            },
          ],
        },
      ],
    },
    {
      title: 'one',
      key: 'one',
      children: [],
    },
  ]

  const takeData = (a: any, b: any[]) => {
    console.log('data', a, b)
    b.forEach((item: any) => {
      if (item.children && item.children.length) {
        takeData(a, item.children)
      } else {
        if (item.title === 'task') {
          item.children.push(a)
        }
      }
    })
    console.log('b', b)
  }

  useEffect(() => {
    takeData(con, treeList)
  }, [])

  return <img src={dog} alt='....' />
}

export default Home
