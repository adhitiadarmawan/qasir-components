import React from 'react';
import { storiesOf } from '@storybook/react';

const elementsTables = 'Elements/Tables';
const stories = storiesOf(elementsTables, module);

stories
    .add(
        'Striped', () => {
            return (
                <p>hello</p>
            );
        }
    );
    