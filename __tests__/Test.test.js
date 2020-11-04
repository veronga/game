import 'react-native';
import React from 'react';
import {render} from 'react-native-testing-library';
import Button from 'src/components/Button';


test('render Button Component', () => {
    const { debug } = render(<Button />);

    debug('optional message');
});
