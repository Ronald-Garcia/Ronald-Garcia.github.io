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
      <div className="flex flex-col h-screen">
        <Title></Title>
        <Header></Header>
        <Body></Body>
        <Separator></Separator>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  )
}

export default App
