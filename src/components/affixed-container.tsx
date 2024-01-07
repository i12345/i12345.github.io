"use client"

import { Box } from "@chakra-ui/react";
import { CSSProperties, PropsWithChildren, ReactNode, createContext, forwardRef, useContext, useLayoutEffect, useRef, useState } from "react";

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

    if (side === AffixedSide.start || side === AffixedSide.end)
        throw new Error()

    const affixPositionCSS: Record<AffixedSide, CSSProperties> = {
        [AffixedSide.top]: { top: 0, width: '100%' },
        [AffixedSide.bottom]: { bottom: 0, width: '100%' },
        [AffixedSide.left]: { left: 0, height: '100%' },
        [AffixedSide.right]: { right: 0, height: '100%' },
        [AffixedSide.start]: { left: 0, height: '100%' },
        [AffixedSide.end]: { right: 0, height: '100%' }
    }

    const affixCSS: CSSProperties = {
        ...affixPositionCSS[side],
        position: "fixed",
        zIndex: 10,
    }

    return (
        <AffixedInfoContext.Provider value={{ side, length }}>
            <>
                <Box children={affixed} ref={affixRef} style={affixCSS} />
                {children}
            </>
        </AffixedInfoContext.Provider>
    )
}