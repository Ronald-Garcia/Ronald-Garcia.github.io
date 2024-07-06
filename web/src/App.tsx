import Header from "./components/header"
import Title from "@/components/title"
import { ThemeProvider } from "./components/theme-provider"
import Footer from "@/components/footer";
import Body from "./components/body";

//import AboutMe from "./components/resume-possibly";
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen">
        <Title></Title>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  )
}

export default App
