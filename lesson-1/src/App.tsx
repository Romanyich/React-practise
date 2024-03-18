import './App.css'
import BurgerMenu from './burger.tsx';

function App(props: { title: string }) {
  const { title } = props
  return (
    <>
      <h1>{title}</h1>
      <BurgerMenu />
    </>
  )
}

export default App
