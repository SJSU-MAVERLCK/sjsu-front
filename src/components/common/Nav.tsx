import styled from 'styled-components';
import { Logo } from '../../icons/Logo';
import { Map } from '../../icons/Map';
import { Alarm } from '../../icons/Alarm';
import { Appointment } from '../../icons/Appointment';
import { Notification } from '../../icons/Notification';
import { Setting } from '../../icons/Setting';

export default function Nav() {
    return (
        <NavContainer>
            <NavLeft>
                <Logo />
                <NavLeftUl>
                    <li>
                        <Map />
                        <p>Map</p>
                    </li>
                    <li>
                        <Alarm />
                        <p>Alarm</p>
                    </li>
                    <li>
                        <Appointment />
                        <p>Appointment</p>
                    </li>
                    <li>
                        <Notification />
                        <p>Notification</p>
                    </li>
                    <li>
                        <Setting />
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