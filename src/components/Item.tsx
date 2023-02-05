import axios from "axios"
import { baseURL } from "../constants"
import { queryClient } from "../services/queryClient"
import { ItemProps } from "./Items"

const Item: React.FC<ItemProps> = ({ created_at, id, name }) => {
  const previousItems = queryClient.getQueryData<ItemProps[]>("items")

  async function handleDeleteClick() {
    if (previousItems) {
      const itemsWithoutExludedOne = previousItems.filter(
        item => item.id !== id
      )
      queryClient.setQueryData("items", itemsWithoutExludedOne)
    }
    await axios.delete(`${baseURL}/${id}`)
  }

  return (
    <li className="flex items-center justify-between">
      <p>{name}</p>
      <button
        onClick={handleDeleteClick}
        className="rounded-md bg-red-600 w-4 h-4"
      />
    </li>
  )
}

export default Item
