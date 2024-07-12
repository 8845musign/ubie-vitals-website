import { Box, Pre, Stack, Text } from '@ubie/ubie-ui';
import { type FC } from 'react';

export const DefaultExample: FC = () => {
  const content = `    夏の夜、星が輝く空の下でキャンプファイヤーを囲んで友達と楽しんだ。                                                                                                          
    笑い声が木々に響き、心地よい風が吹き抜ける中、思い出話に花が咲く。

    その瞬間、何も考えずただ今を楽しむ幸せを感じた。
    
    夏の        思い出。`;

  return (
    <Stack spacing="xl" px="lg" pt="md">
      <Stack spacing="sm">
        <Text size="sm" bold>
          Default
        </Text>
        <div style={{ width: 500 }}>
          <Box backgroundColor="gray" p="lg" radius="md">
            <Pre>{content}</Pre>
          </Box>
        </div>
      </Stack>

      <Stack spacing="sm">
        <Text size="sm" bold>
          pre-line
        </Text>
        <div style={{ width: 500 }}>
          <Box backgroundColor="gray" p="lg" radius="md">
            <Pre whiteSpace="pre-line">{content}</Pre>
          </Box>
        </div>
      </Stack>

      <Stack spacing="sm">
        <Text size="sm" bold>
          pre-wrap
        </Text>
        <div style={{ width: 500 }}>
          <Box backgroundColor="gray" p="lg" radius="md">
            <Pre whiteSpace="pre-wrap">{content}</Pre>
          </Box>
        </div>
      </Stack>

      <Stack spacing="sm">
        <Text size="sm" bold>
          pre
        </Text>
        <div style={{ width: 500 }}>
          <Box backgroundColor="gray" p="lg" radius="md">
            <Pre whiteSpace="pre">{content}</Pre>
          </Box>
        </div>
      </Stack>

      <Stack spacing="sm">
        <Text size="sm" bold>
          break-spaces
        </Text>
        <div style={{ width: 500 }}>
          <Box backgroundColor="gray" p="lg" radius="md">
            <Pre whiteSpace="break-spaces">{content}</Pre>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};
