import axios from "axios"
import React from "react"
import { useQueryClient } from "react-query"
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom"
import { baseURL } from "../constants"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const randomID = Math.random().toString(36).substring(2, 9)
  const newDate = new Date()
  const newItem = {
    ...Object.fromEntries(formData),
    id: randomID,
    created_at: newDate,
  }
  await axios.post(baseURL, newItem)
  return redirect("/")
}

const Edit: React.FC = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  async function handleSubmitButton() {
    await queryClient.invalidateQueries()
  }

  return (
    <div>
      <Form
        method="post"
        className="[&_span]:w-[110px] text-sm flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-800 text-sm">Name:</span>
          <input
            className="sh p-3 w-full"
            type="text"
            name="name"
            placeholder="react-query-magazine"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="sh px-4 py-1 rounded-md bg-white font-sm text-zinc-900"
            type="button"
          >
            Voltar
          </button>
          <button
            onClick={handleSubmitButton}
            className="sh px-4 py-1 rounded-md bg-blue-600 font-sm text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </Form>
    </div>
  )
}

export default Edit
