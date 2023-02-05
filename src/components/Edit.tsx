import axios from "axios"
import React from "react"
import { useQueryClient } from "react-query"
import { ActionFunctionArgs, Form, redirect } from "react-router-dom"
import { baseURL } from "../constants"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const newItem = Object.fromEntries(formData)
  await axios.post(baseURL, newItem)
  return redirect("/")
}

const Edit: React.FC = () => {
  const queryClient = useQueryClient()

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
          <span className="text-slate-800 text-sm">ID:</span>
          <input
            className="sh py-1 px-3 w-full"
            type="text"
            name="id"
            placeholder="jsdfhy237f878w"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-800 text-sm">Name:</span>
          <input
            className="sh py-1 px-3 w-full"
            type="text"
            name="name"
            placeholder="react-query-magazine"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-800 text-sm">Created at:</span>
          <input
            className="sh py-1 px-3 w-full"
            type="text"
            name="created_at"
            placeholder="2022-01-23"
          />
        </div>
        <button
          onClick={handleSubmitButton}
          className="sh px-4 py-1 rounded-md bg-blue-600 font-sm text-white mx-auto"
          type="submit"
        >
          Enviar
        </button>
      </Form>
    </div>
  )
}

export default Edit
