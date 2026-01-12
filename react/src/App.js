import logo from './logo.svg';
import './App.css';
import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters';
import { Header } from './components/header/header.component';
function App() {
  console.log('r', getRandomPalette())
  console.log(getPalette('#1a5e63'))
  return (
    <div className="App">
      {/* <header>
        <div>colors</div>
        <div>
          <div>tools</div>
          <div>go pro</div>
        </div>
      </header> */}
      <Header />
      <HoverColorLetters
        text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
        defaultColor="black"
        colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
      />
      <Header />
      <HoverColorLetters
        text="Dolor pariatur mollit aute commodo occaecat magna est sint sint."
        defaultColor="green"
        colors={['#2660a4', '#edf7f6', '#f19953', '#c47335', '#56351e']}
      />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <HoverColorLetters
        text="Pariatur culpa ipsum consectetur pariatur amet reprehenderit."
        defaultColor="red"
        colors={['#001514', '#fbfffe', '#6b0504', '#a3320b', '#e6af2e']}
      />
    </div>
  );
}

export default App;
