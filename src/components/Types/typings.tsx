export default {}
import React, { ReactElement } from "react"




// Nav

export interface NavListProps {
    href: string
    paragraph?: string
    icon?: ReactElement
}


export interface NavRightBarProps {
    handleModal: () => void;
    isModalOpen: boolean;
    rightBarAnimate: boolean
  }

  export interface NavRightListProps {
    paragraph: string
}