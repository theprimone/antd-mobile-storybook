import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { createForm } from 'rc-form';
import { List } from 'antd-mobile';
import { createFormItems, FormProvider } from '../src/antd-mobile-form-mate';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

class ItemsDemo extends React.Component {
  render() {
    const { form } = this.props;
    console.log(form);
    return (
      <Fragment>
        <p>hello</p>
        <List>
          <FormProvider value={form}>
            {createFormItems([{
              type: 'string',
              field: 'string'
            }])}
          </FormProvider>
        </List>
      </Fragment>
    )
  }
}

const FormItemsDemo = createForm()(ItemsDemo);

storiesOf('Form', module)
  .add('with basic', () => <FormItemsDemo />);