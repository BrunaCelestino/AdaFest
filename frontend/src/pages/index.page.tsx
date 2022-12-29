import { Stack } from "@chakra-ui/react";
import { NextPage } from "next"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Homepage } from "../components/Home";


const Home: NextPage = () => {
    return (
        <Stack w="100vw">
            <Header />
            <Homepage />
            <Footer />
        </Stack>
    )
}

export default Home;
