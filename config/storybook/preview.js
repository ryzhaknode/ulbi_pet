import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../../../Desktop/ulbi-reactfrontend/code/29 Модальное окно. Portal/29/production-project-275ffcccdf0d6e889dc640425bb37336eb8dca5f/src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../../../Desktop/ulbi-reactfrontend/code/29 Модальное окно. Portal/29/production-project-275ffcccdf0d6e889dc640425bb37336eb8dca5f/src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../Desktop/ulbi-reactfrontend/code/29 Модальное окно. Portal/29/production-project-275ffcccdf0d6e889dc640425bb37336eb8dca5f/src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../../../Desktop/ulbi-reactfrontend/code/29 Модальное окно. Portal/29/production-project-275ffcccdf0d6e889dc640425bb37336eb8dca5f/src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
