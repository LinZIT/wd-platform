import { Box, Typography } from "@mui/material"
import { useEffect } from "react"
import useEcho from "../../../hooks/echo";

export const ITPage = () => {
  const echo = useEcho();

  useEffect(() => {
    if (echo) {
      echo.private(`chat.${user?.id}`)
        .listen('MessageSent', (event: any) => {
          console.log('Real-time event received:', event);
        })
    }
  }, [])
  return (
    <Box>
      <Typography>Pagina de IT</Typography>
    </Box>
  )
}
