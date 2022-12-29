
import { Box, Stack } from "@chakra-ui/react";
import { BannerSwiper } from "../BannerSwiper";
import { CompanyCards } from "../CompanyCards";
import { EventCards } from "../EventCards";
import Header from "../Header";

export const Homepage = () => {
    return (
        <Stack  >
        <BannerSwiper/>
        <CompanyCards/>
        <EventCards/>
        </Stack>
        
    )
}