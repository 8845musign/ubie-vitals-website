import { Pre, Box } from '@ubie/ubie-ui';
import { text } from './_content.ts';

export const PreExample = () => {
  return (
    <div style={{ maxWidth: '400px', overflow: 'auto', marginTop: '1em' }}>
      <Box p="md" border="gray" radius="md">
        <Pre whiteSpace="pre">{text}</Pre>
      </Box>
    </div>
  );
};
