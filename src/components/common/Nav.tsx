// FIXME: 네비게이션 바가 75%가 돼야 함. 반응형이 안 돼잇어서 일단 임시로 크롬 75%를 기준으로 개발
// ㅈㅅ

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '../../icons/Logo';
import { Map } from '../../icons/Map';
import { Alarm } from '../../icons/Alarm';
import { Appointment } from '../../icons/Appointment';
import { Notification } from '../../icons/Notification';
import { Setting } from '../../icons/Setting';
import { LeftArrow } from '../../icons/LeftArrow';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface NavProps {
  Left?: 'logo' | 'arrow';
}

const navItems: NavItem[] = [
  { icon: <Map />, label: 'Map', path: '/map' },
  { icon: <Alarm />, label: 'Alarm', path: '/alarm' },
  { icon: <Appointment />, label: 'Appointment', path: '/appointment' },
  { icon: <Notification />, label: 'Notification', path: '/notification' },
  { icon: <Setting />, label: 'Setting', path: '/setting' },
];

export default function Nav({ Left = 'logo' }: NavProps) {
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <LeftBox>
          {Left === 'logo' && <Logo />}
          {Left === 'arrow' && <LeftArrow />}
        </LeftBox>
        <NavList>
          {navItems.map(({ icon, label, path }) => (
            <NavItem key={path} $isActive={location.pathname === path}>
              <NavLink to={path}>
                {icon}
                <span>{label}</span>
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  background-color: var(--color-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 80px;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  height: 100px;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? 'var(--color-primary)' : 'var(--color-text)')};
  font-size: 1.5rem;
  font-family: 'HakgyoansimWoojuR', 'Pretendard', sans-serif;
  font-weight: 400;
  height: 100px;
  line-height: 1;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  height: 100px;

  span {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: inherit;
    line-height: 1;
    font-family: 'HakgyoansimWoojuR', 'Pretendard', sans-serif;
    font-weight: 400;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
