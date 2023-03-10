import react, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import { SocketContext } from "./components/contexts/Main";

function MyApp() {
  const [socket] = useContext(SocketContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message: string, variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    if (socket) {
      socket.on("SnackAlert", (data: any) => {
        console.log(data.variant);
        enqueueSnackbar(data.message, { variant: data.variant });
      });
    }
  }, [socket]);
  return <></>;
}

export default function SnackAlert() {
  return (
    <SnackbarProvider maxSnack={7}>
      <MyApp />
    </SnackbarProvider>
  );
}
