import { Divider, Stack, Text } from '@ubie/ubie-ui';
import { type FC } from 'react';

export const VariantsExample: FC = () => {
  return (
    <Stack spacing="lg" px="lg" py="md">
      <Stack spacing="sm">
        <Text size="sm" bold>
          Default
        </Text>
        <Divider />
      </Stack>

      <Stack spacing="sm">
        <Text size="sm" bold>
          Gray
        </Text>
        <Divider border="gray" />
      </Stack>

      <Stack spacing="sm">
        <Text size="sm" bold>
          Primary
        </Text>
        <Divider border="primary" />
      </Stack>
    </Stack>
  );
};
