import axios from 'axios'
import { configAutorizacion } from './configAxios'

export default function axiosMetodosMiddleware() {
  const obtener = ({ url, auth }) => axios.get(url, configAutorizacion(auth))

  const crear = ({ url, data, auth }) =>
    axios.post(url, data, configAutorizacion(auth))

  const actualizar = ({ url, data, auth }) =>
    axios.put(url, data, configAutorizacion(auth))

  const eliminar = ({ url, auth }) =>
    axios.delete(url, configAutorizacion(auth))

  return { obtener, crear, actualizar, eliminar }
}
