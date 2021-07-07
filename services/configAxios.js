export const configAutorizacion = (Authorization) => ({
  headers: { Authorization },
})

export const configAxiosX_Autorizacion = (Authorization) => ({
  headers: { 'X-Authorization': Authorization },
})
