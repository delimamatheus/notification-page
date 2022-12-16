import { ReactNode } from "react";

export interface NotificationBoxProps{
    image: string,
    name: string,
    message: string,
    action: string,
    time: string,
    icon: boolean,
    setIcon: () => void,
    children?: ReactNode | ReactNode[] | string,
}