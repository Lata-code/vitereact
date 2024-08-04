import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { RoutStack } from "../navigator/RoutStack"
import { Home } from "./Home"

export const MainScreen = () => {
    return (
        <div>
            <Navbar />
            <RoutStack />
            <Footer />
       </div>
    )
}