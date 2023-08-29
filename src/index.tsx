import {render} from "react-dom";
import App from "app/App";
import {BrowserRouter} from "react-router-dom";
import 'app/styles/index.scss'
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
console.log('test')
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
