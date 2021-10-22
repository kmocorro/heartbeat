import { Box, Wrap, Text, WrapItem } from "@chakra-ui/react"
import ToolInfo from './toolInfo'

export default function ToolCategory({ trace }) {
  return (
    <WrapItem key={trace.toolName + trace.toolDataOrigin}>
      <ToolInfo
        toolCategory={trace.toolCategory}
        toolName={trace.toolName}
        toolShortName={trace.toolShortName}
        status={trace.status}
        bg={trace.bg}
        lastActiveTime={trace.lastActiveTime}
      />
    </WrapItem>
  )
}