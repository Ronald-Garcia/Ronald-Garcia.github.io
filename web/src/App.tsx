import Header from "./components/layout/header"
import Title from "@/components/title"
import { ThemeProvider } from "./components/theme-provider"
import Footer from "@/components/layout/footer";
import Body from "./components/layout/body";
import { Separator } from "./components/ui/separator";

//import AboutMe from "./components/resume-possibly";
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="transition-opacity opacity-[30%] hover:opacity-100 duration-300 ease-in-out">
          <Title></Title>
          <Header></Header>
        </div>
        <Body></Body>
        <Separator></Separator>
        <div className="transition-opacity h-[10%] opacity-30 hover:opacity-100 duration-300">
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
