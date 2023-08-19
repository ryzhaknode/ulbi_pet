import React from 'react';
import {Link,} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/providers/router";


const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;
