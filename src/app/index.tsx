import { MainPage } from 'pages/main'

import { Header } from 'widgets/header'

import './style.scss'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <MainPage />
      </div>
    </div>
  )
}

export default App
