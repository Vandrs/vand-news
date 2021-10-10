import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "gray.100" 
            }
        }
    }
})

export { customTheme }