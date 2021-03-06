import { Box, Flex, Text, Wrap } from "@chakra-ui/react"
import ToolCategory from './toolCategory'
import { readRemoteFile } from 'react-papaparse'
import { Fragment } from "react";
import Image from 'next/image'

export default function ToolBox({ traceData }) {
  
  return (
    <Box p="2">
      <Flex>
        { traceData.length > 0 ? (
          <Fragment>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >CMYK</Text>
              <Wrap>
              { traceData.map(trace => (
                trace.toolDataOrigin === 'cmyk' ? (
                  <ToolCategory trace={trace} />
                ): null
              ))}
              </Wrap>
            </Box>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >LCM</Text>
              <Wrap  key={2}>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'lcm' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >EDGECOAT</Text>
              <Wrap>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'edgecoat' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
          </Fragment>
          ):null
        }
      </Flex>
      <Flex>
        { traceData.length > 0 ? (
          <Fragment>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >NOXE/TOXE</Text>
              <Wrap>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'noxetoxe' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >ETCHBACK</Text>
              <Wrap>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'etchback' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >OLT</Text>
              <Wrap>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'olt' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
          </Fragment>
        ):null
        }
      </Flex>
      <Flex>
        { traceData.length > 0 ? (
          <Fragment>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >TRACE OLT</Text>
              <Wrap>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'trace_olt' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
            <Box width="auto" height="auto" bg="#eee" m="10px" p="4" borderRadius="14px">
              <Text fontSize="xl" fontWeight="700" mb="2" color="gray" >TRACE OST</Text>
              <Wrap>
                { traceData.map(trace => (
                  trace.toolDataOrigin === 'trace_ost' ? (
                    <ToolCategory trace={trace} />
                  ): null
                ))}
              </Wrap>
            </Box>
            <Box p="4">
              <Image src='/hbimg.png' width={240} height={120} />
            </Box>
          </Fragment>
        ):null
        }
      </Flex>
    </Box>
  )
}