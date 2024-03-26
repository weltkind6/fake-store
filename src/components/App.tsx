import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './App.module.scss'
import { getAllGoods } from '@/api/api'
import { GoodsProps } from '@/types/goods'

export const App = () => {
  const [goods, setGoods] = useState<GoodsProps[]>([])
  useEffect(() => {
    getGoods()
  }, [])

  const getGoods = async () => {
    try {
      const response = await axios.get<GoodsProps[]>(getAllGoods)
      setGoods(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.App}>
      <h1>Fake store</h1>
      {goods.map(({ id, price }) => <div key={id}>{id} - {price}</div>)}
    </div>
  )
}