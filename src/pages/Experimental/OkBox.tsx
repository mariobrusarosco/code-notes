
export const Display = () : any  => {
  const input = document.querySelector('.ok-box') as HTMLInputElement
  input.autofocus = true

  return <p>Check here if you're ok <input type="checkbox" className="ok-box" value="OK"/></p>
}

export default Display
