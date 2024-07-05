import Header from "./components/header"
import Title from "@/components/title"
import { ThemeProvider } from "./components/theme-provider"
import Footer from "@/components/footer";
//import AboutMe from "./components/resume-possibly";
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Title></Title>
      <Header></Header>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default App
