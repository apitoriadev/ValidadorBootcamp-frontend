import { Button, Input } from "@/components/ui"
import { ChangeEvent, FC } from "react"

interface Props {
  handleCreateProgram: () => void
  onUpdateForm: (changes: object) => void
  form: any
}

const CreateProgramView: FC<Props> = ({
  handleCreateProgram,
  onUpdateForm,
  form,
}) => {
  return (
    <>
      <section>
        <div className="container ">
          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Nombre
            </label>
            <Input
              type="text"
              placeholder="Nombre del programa"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onUpdateForm({ name: e.target.value })
              }}
              value={form.name}
              required
            />
          </div>

          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Duración (meses)
            </label>
            <Input
              type="number"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onUpdateForm({ duration: e.target.value })
              }}
              value={form.duration}
              required
            />
          </div>

          <div className="md:my-5 my-3">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Modalidad
            </label>
            <select
              className="w-full"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                onUpdateForm({ mode: e.target.value })
              }}
              value={form.mode}
            >
              <option value="presencial">Presencial</option>
              <option value="virtual">Virtual</option>
              <option value="hibrida">Híbrida</option>
            </select>
          </div>

          <div className="my-5">
            <Button
              type="button"
              className="w-full"
              disabled={!form.name || !form.duration || !form.mode}
              onClick={handleCreateProgram}
            >
              Crear
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateProgramView
