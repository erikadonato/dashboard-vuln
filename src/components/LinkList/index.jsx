import { Link } from 'react-router-dom'
import { Container } from './styles';
import { Tooltip } from '@mui/material';
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { BiTargetLock } from 'react-icons/bi'
import { GoDashboard } from 'react-icons/go'
import { CgDetailsMore } from 'react-icons/cg'

const LinkList = ({setToogle, toogle}) => {
    return (
        <Container>
            <Link to="/dashboard">
                <Tooltip title="Dashboard">
                    <li onClick={() => setToogle(!toogle)}> 
                        <GoDashboard className='fas' />
                        {/* <i class="fas fa-store"/>  */}
                        <span>Dashboard</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/host-table">
                <Tooltip title="Tabela de Hosts">
                    <li onClick={() => setToogle(!toogle)}>
                        <HiOutlineDesktopComputer className='fas' />
                        <span>Hosts</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/vulnerability-table">
                <Tooltip title="Tabela de Vulnerabilidades">
                    <li onClick={() => setToogle(!toogle)}>
                        <BiTargetLock className='fas' />
                        <span>Vulnerabilidades</span>
                    </li>
                </Tooltip>
            </Link>
            <Link to="/host-details">
                <Tooltip title="Detalhamento de Hosts">
                    <li onClick={() => setToogle(!toogle)}>
                        <CgDetailsMore className='fas' />
                        <span>Detalhamento de Hosts</span>
                    </li>
                </Tooltip>
            </Link>
        </Container>
    )
}

export default LinkList;
