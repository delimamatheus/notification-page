import { ReactNode } from "react";

export interface NotificationBoxProps{
    image: string,
    name: string,
    message: string,
    action: string,
    time: string,
    children?: ReactNode | ReactNode[] | string,
}