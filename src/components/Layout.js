import React from 'react';

import { Box, Grid } from 'grommet';
import { Apps } from 'grommet-icons';
import RoutedButton from './RoutedButton'

const Layout = props => (
    <Grid>
        <Box {...props} />
    </Grid>
);

Layout.defaultProps = {
    align: 'center',
    pad: 'large',
};

export default Layout;