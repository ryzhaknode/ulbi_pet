import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/providers/router";
import {Navbar} from "widgets/Navbar";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";


const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
