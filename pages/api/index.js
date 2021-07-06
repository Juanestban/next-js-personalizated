export default function MyApi(_, res) {
  return res.status(200).json({ mensaje: 'hello world' })
}
