import * as React from 'react'
import {Avatar, Stack, Typography} from '@mui/material'
import '../css/pages_css/Profile.css'

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}



  function User() {
    return(
      <><Stack direction="row">
        <Avatar className='Avatar_profile' {...stringAvatar('Victor Coutiño')} />
      </Stack><Typography variant="h6" align="center" gutterBottom>
          Victor Coutiño
        </Typography><Typography
          className='Typo_normal'
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          203454@ids.upchiapas.edu.mx
        </Typography></>
    )
  }

export default User;