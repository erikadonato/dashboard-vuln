import React, {useState, useCallback} from "react";
import { Container } from './styles'
import { Typography  } from "../LoginForm/styles";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import LinkList from "../LinkList";

const SideBar = () => {

    const [toogle, setToogle] = useState(false);
       
    const handleClick = useCallback(() => {
        setToogle(!toogle)
    }, [toogle]);
    
    return (
        <Container {...(toogle
            ? { className: 'sidebar active' }
            : { className: 'sidebar' })}
        >
            <div className="logo_content">
                <div className="logo">
                    <Typography variant="h5">Painel de vulnerabilidades</Typography>
                </div>
                {toogle? 
                    <AiOutlineClose
                        className="bx bx-menu"
                        id="btn"
                        style={{color: '#fff', fontSize: '1.8rem'}}
                        onClick={() => {
                            handleClick();
                        }}
                    />
                :
                    <AiOutlineMenu
                        className="active-btn"
                        // id="btn"
                        style={{color: '#fff', fontSize: '1.8rem'}}
                        onClick={() => {
                        handleClick();
                    }}
                />}
            </div>
            {toogle? <LinkList setToogle={setToogle} toogle={toogle} /> : null}
        </Container>
    )}

export default SideBar;
