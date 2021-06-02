export default function Index() {
  return (
    <>
      <h1>hello world</h1>
      <h3>env produccion: {process.env.production}</h3>
      <h3>environment: {process.env.NODE_ENV}</h3>
      <h3>env local: {process.env.local}</h3>
      <p>testing pre-commit</p>
    </>
  )
}
