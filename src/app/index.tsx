import { Provider } from 'react-redux'

import { store } from 'store'

import { MainPage } from 'pages/main'

import { Header } from 'widgets/header'

import './style.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__content">
          <MainPage />
        </div>
      </div>
    </Provider>
  )
}

export default App
