import styled from 'styled-components';
import { Logo } from '../../icons/Logo';

export default function Nav() {
    return (
        <NavContainer>
            <NavLeft>
                <Logo />
                <NavLeftUl>
                    <li>
                        <p>Map</p>
                    </li>
                    <li>
                        <p>Alarm</p>
                    </li>
                    <li>
                        <p>Appointment</p>
                    </li>
                    <li>
                        <p>Notification</p>
                    </li>
                    <li>
                        <p>Setting</p>
                    </li>
                </NavLeftUl>
            </NavLeft>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 80px;
    width: 100%;
    height: 100px;
`

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    height: 100%;
`

const NavLeftUl = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    height: 100%;
`