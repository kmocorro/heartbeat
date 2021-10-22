import React from 'react'
import {
  Square,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Tag, Text
} from "@chakra-ui/react"

export default function ToolInfo({ toolName, toolShortName, status, bg, lastActiveTime }) {
  const initialFocusRef = React.useRef()
  
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
      trigger="hover"
      colorScheme="messenger"
    >
      <PopoverTrigger>
        <Square size="68px" bg={bg} color="white" cursor="pointer" borderRadius="10px">
          <Text fontSize="lg">{toolShortName}</Text>
        </Square>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          {toolName}
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          Status <Tag colorScheme="blackAlpha">{status}</Tag> last {lastActiveTime}.
        </PopoverBody>
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}