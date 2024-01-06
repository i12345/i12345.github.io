"use client"

import { Box } from "@chakra-ui/react";
import { PropsWithChildren, ReactNode, createContext, forwardRef, useContext, useLayoutEffect, useRef, useState } from "react";
import { Affix, AffixProps } from "rsuite";

export enum AffixedSide {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right",
    start = "start",
    end = "end",
}

interface AffixedInfo {
    side: AffixedSide
    length: number
}

const AffixedInfoContext = createContext<AffixedInfo>(undefined!)

export const AffixedCompensated = forwardRef(({ children }: PropsWithChildren, ref) => {
    const affixedInfo = useContext(AffixedInfoContext)
    const length = `${affixedInfo?.length ?? 0}px`
    const length_inverse = `-${length}`

    switch (affixedInfo?.side) {
        case AffixedSide.top:
            return <Box children={children} pt={length} mt={length_inverse} />
        case AffixedSide.bottom:
            return <Box children={children} pb={length} mb={length_inverse} />
        case AffixedSide.left:
            return <Box children={children} pl={length} ml={length_inverse} />
        case AffixedSide.right:
            return <Box children={children} pr={length} mr={length_inverse} />
        case AffixedSide.start:
            return <Box children={children} ps={length} ms={length_inverse} />
        case AffixedSide.end:
            return <Box children={children} pe={length} me={length_inverse} />
        default:
            return <Box children={children} />
    }
})

export interface AffixedContainerProps extends PropsWithChildren {
    affixed: ReactNode
    side: AffixedSide
}

export function AffixedContainer({ affixed, side, children }: AffixedContainerProps) {
    const affixRef = useRef<HTMLDivElement>(null)
    let [length, setLength] = useState(-1)

    useLayoutEffect(() => {
        if (affixRef.current) {
            const layout = affixRef.current.getBoundingClientRect()
            let current_length = length

            switch (side) {
                case AffixedSide.top:
                case AffixedSide.bottom:
                    current_length = layout.height
                    break
                
                case AffixedSide.left:
                case AffixedSide.right:
                case AffixedSide.start:
                case AffixedSide.end:
                    current_length = layout.width
                    break
                
                default:
                    current_length = 0
                    break
            }

            if (length !== current_length)
                setLength(length = current_length)
        }
    }, [affixRef.current, setLength])

    if (side !== AffixedSide.top)
        throw new Error()

    const affixProps: Record<AffixedSide, AffixProps> = {
        [AffixedSide.top]: { top: 0 },
        [AffixedSide.bottom]: { },
        [AffixedSide.left]: { },
        [AffixedSide.right]: { },
        [AffixedSide.start]: { },
        [AffixedSide.end]: { }
    }

    return (
        <AffixedInfoContext.Provider value={{ side, length }}>
            <>
                <Affix children={affixed} ref={affixRef} {...affixProps[side]} />
                {children}
            </>
        </AffixedInfoContext.Provider>
    )
}