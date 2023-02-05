import axios from "axios"
import React from "react"
import { useQuery } from "react-query"
import { baseURL } from "../constants"

interface ItemProps {
  id: string
  name: string
  created_at: string
}

const Items: React.FC = () => {
  const { data: items, isFetching } = useQuery<ItemProps[]>(
    "items",
    async () => {
      const response = await axios.get(baseURL)
      return response.data
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  )

  if (isFetching) return <h1>Carregando...</h1>

  return (
    <>
      {items?.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  )
}

export default Items
