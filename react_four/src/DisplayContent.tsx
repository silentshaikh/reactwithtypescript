interface DispType{
    funcDisp: string,
}
function DisplayContent({funcDisp}:DispType) {
  return (
    <>
    <h1>Input Value</h1>
      <p>{funcDisp}</p>
    </>
  )
}
export default DisplayContent
