import { Box, Flex, FlexProps, useColorMode } from '@chakra-ui/react';
import { useEffect, ReactNode } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

import { Navbar } from './Navbar';
import { borderVal, mainContentAreaHeight, useReportStore } from '../../utils';
import { ReportContextBar } from '../Reports';

interface Props extends FlexProps {
  children: ReactNode;
  isSingleReport: boolean;
}

export function Main({ children, isSingleReport, ...props }: Props) {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  useEffect(() => {
    const API_KEY = window.PIPERIDER_METADATA.amplitude_api_key;
    const USER_ID = window.PIPERIDER_METADATA.amplitude_user_id;

    if (API_KEY) {
      amplitude.init(API_KEY, USER_ID);
    }
  }, []);

  const { rawData } = useReportStore.getState();
  const fallback = rawData.input ?? rawData.base;

  return (
    <Flex
      direction="column"
      h={'100vh'}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Navbar isSingleReport={isSingleReport} />
      <ReportContextBar
        datasource={fallback?.datasource.name}
        version={fallback?.version}
        px={3}
        borderBottom={borderVal}
        showProjectInfo
      ></ReportContextBar>
      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          minHeight={mainContentAreaHeight}
          height={'100%'}
          mx="80px"
          {...props}
        >
          {children}
        </Flex>
      </Box>
    </Flex>
  );
}
