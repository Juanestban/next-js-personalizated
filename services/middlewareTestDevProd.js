import middlewareAxios from './middlewareAxios'
import { NodeEnvState } from '@config/nodeEnv'

export default async function middlewareTestDevProd({
  url,
  metodo,
  modelo,
  data,
  auth,
}) {
  const { actualizar, crear, eliminar, obtener } = middlewareAxios()
  const switcherMetodosAxios = {
    GET: obtener,
    POST: crear,
    PUT: actualizar,
    DELETE: eliminar,
  }

  if (!switcherMetodosAxios[metodo]) {
    const msgError = 'no existe el metodo que deseas usar'
    console.error('[-]', msgError)
    return { status: 400, data: { mensaje: msgError } }
  }

  if (NodeEnvState !== 'test')
    return await switcherMetodosAxios[metodo]({ url, data, auth })

  return { data: modelo, status: 200 }
}
