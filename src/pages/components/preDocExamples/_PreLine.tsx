import { Pre, Box } from '@ubie/ubie-ui';
import { text } from './_content.ts';

export const PreLineExample = () => {
  return (
    <div style={{ maxWidth: '400px', overflow: 'auto', marginTop: 'var(--size-spacing-md)' }}>
      <Box p="md" border="gray" radius="md">
        <Pre whiteSpace="pre-line">{text}</Pre>
      </Box>
    </div>
  );
};
