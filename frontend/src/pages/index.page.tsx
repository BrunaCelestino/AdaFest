import { Stack } from "@chakra-ui/react";
import { NextPage } from "next"
import { Homepage } from "../components/Home";


const Home: NextPage = () => {
    return (
        <Stack w="100vw"  minH="calc(100vh - 204px)">
            <Homepage />
           
        </Stack>
    )
}

export default Home;
