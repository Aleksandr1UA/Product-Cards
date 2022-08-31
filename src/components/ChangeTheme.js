import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext";

function ChangeTheme() {
    const {theme, setTheme} = useContext(ThemeContext);

    return <>   
        {
            theme === 'bg-light' ? <Button variant={'dark'} onClick={() => setTheme('bg-dark')}>Dark</Button> :
                <Button variant={'light'} onClick={() => setTheme('bg-light')}>Light</Button>
        }
    </>
}

export default ChangeTheme;