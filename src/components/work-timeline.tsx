import { Box, Flex, Stack } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Timeline } from "rsuite"

export interface WorkTimelineItemIndex<T = any> {
    name: keyof T
    subtitle: keyof T
    subtitleFade: keyof T
    secondSubtitle: keyof T
    details?: keyof T
}

export interface WorkTimelineProps<T, Index extends WorkTimelineItemIndex<T> = WorkTimelineItemIndex<T>> {
    index: Index
    items: T[]
}

export function WorkTimeline<T, Index extends WorkTimelineItemIndex<T> = WorkTimelineItemIndex<T>>({ index, items }: WorkTimelineProps<T, Index>) {
    return (
        <Timeline align='left' isItemActive={() => false}>
          {items.map(item => (
            <Timeline.Item key={Object(item).toString()}>
              <Box>
                <Box fontWeight="700">{(item as any)[index.name]}</Box>
                <Flex flexDirection="row">
                  <Box me="1em">{(item as any)[index.subtitle]}</Box>
                  <Box opacity="50%">{(item as any)[index.subtitleFade]}</Box>
                </Flex>
                <Box>{(item as any)[index.secondSubtitle]}</Box>
                <Stack spacing={0}>
                  {((item as any)[index.details] ?? []).map((description: ReactNode) => (
                    <Box>{description}</Box>
                  ))}
                </Stack>
              </Box>
            </Timeline.Item>
          ))}
        </Timeline>
    )
}