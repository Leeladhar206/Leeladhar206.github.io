import React from 'react';
import { Box, Text, Link} from '@chakra-ui/react';

export const Contact = () => {
  return (

      <Box textAlign="center" mt={10} id="contact">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Contact Information
        </Text>

        <Box>

          <Text>
            GitHub profile link:{' '}
            <Link href="https://github.com/Leeladhar206" id="contact-github">
              github.com/Leeladhar206
            </Link>
          </Text>

          <Text>
            LinkedIn profile link:{' '}
            <Link href="https://www.linkedin.com/in/leeladharjagarapu/" id="contact-linkedin">
              linkedin.com/in/leeladharjagarapu
            </Link>
          </Text>

          <Text id="contact-phone">Phone number: +91 7997884227</Text>

          <Text id="contact-email">
            Email address:{''}
            <Link href="leeladharjagarapu@gmail.com">leeladharjagarapu@gmail.com</Link>
          </Text>
        </Box>
      </Box>
  );
};


