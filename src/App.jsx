import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}