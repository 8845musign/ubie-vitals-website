import { MessageModal, Heading, Text, Center } from '@ubie/ubie-ui';
import { useCallback, useState } from 'react';
import type { FC } from 'react';

export const CustomHeaderExample: FC = () => {
  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const headerId = 'headerId';

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <MessageModal open={open} onClose={onClose}>
        <Center textCenter>
          <Heading id={headerId} color="primary" size="lg">
            Custom Header
          </Heading>
        </Center>

        <Text>Body</Text>
      </MessageModal>
    </>
  );
};
