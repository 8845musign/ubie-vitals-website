import { Button, Stack, Flex } from '@ubie/ubie-ui';
import { useState, useMemo } from 'react';
import ExampleViewer from './ExampleViewer';
import type { Example as ExampleType } from '@utils/server';
import type { FC } from 'react';

interface Props {
  examples: ExampleType[];
}

const ExampleSwitcher: FC<Props> = ({ examples }) => {
  const defaultExampleUrl = useMemo(() => {
    return examples[0].url || '';
  }, [examples]);

  const [current, setCurrent] = useState<string>(defaultExampleUrl);

  const currentExample: ExampleType | null = useMemo(() => {
    return examples.find(({ url }) => url === current) ?? null;
  }, [current]);

  return (
    <>
      <Stack spacing="md">
        <Flex spacing="xs">
          {examples.map(({ name, url }) => (
            <Button
              size="small"
              variant={current === url ? 'primary' : 'secondary'}
              key={url}
              onClick={() => {
                setCurrent(url);
              }}
            >
              {name}
            </Button>
          ))}
        </Flex>

        {currentExample && <ExampleViewer example={currentExample} />}
      </Stack>
    </>
  );
};

export default ExampleSwitcher;
