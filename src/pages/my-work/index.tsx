import * as React from 'react';
import { DefaultLayout } from '@layouts/default';

const MyWork: React.FC<{}> = (props) => {
    const imgSrc = require('../../assets/images/eee-logo.png');
    return (
        <DefaultLayout pageName="my-work">
        </DefaultLayout>
    );
}

export default MyWork;