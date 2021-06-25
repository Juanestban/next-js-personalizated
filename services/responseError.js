export const responseError = ({ res, response: { data, status } }) =>
  res.status(status).json({ ok: false, ...data })

export const resErrorConnection = ({ res }) =>
  res.status(500).json({ ok: false, mensaje: 'Error interno en el servidor' })
