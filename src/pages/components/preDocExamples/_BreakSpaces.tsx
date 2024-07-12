import { Pre, Box } from '@ubie/ubie-ui';
import { text } from './_content.ts';

export const BreakSpacesExample = () => {
  return (
    <div style={{ maxWidth: '400px', overflow: 'auto', marginTop: '1em' }}>
      <Box p="md" border="gray" radius="md">
        <Pre whiteSpace="break-spaces">{text}</Pre>
      </Box>
    </div>
  );
};
