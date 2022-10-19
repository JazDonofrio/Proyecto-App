import Send from "@mui/icons-material/Send"
import Button, { ButtonProps } from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { ReactElement } from "react"

type LoadingButtonProps = {
    loading: boolean
    loadingPosition: "start" | "end"
    icon: ReactElement<any, any>
} & ButtonProps


export default function LoadingButton({
    size,
    onClick: handleClick,
    loading,
    variant,
    disabled,
    children,
    loadingPosition,
    icon: Icon
}: LoadingButtonProps) {
    return (
        <Button
            size={size}
            onClick={handleClick}
            variant={variant}
            disabled={disabled}
            {...{[loadingPosition+"Icon"]:loading ? <CircularProgress size={24} /> : Icon}}
        >{children}</Button>
    )
}



