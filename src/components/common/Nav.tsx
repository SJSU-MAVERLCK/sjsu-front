import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '../../icons/Logo';
import { Map } from '../../icons/Map';
import { Alarm } from '../../icons/Alarm';
import { Appointment } from '../../icons/Appointment';
import { Notification } from '../../icons/Notification';
import { Setting } from '../../icons/Setting';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: <Map />, label: 'Map', path: '/map' },
  { icon: <Alarm />, label: 'Alarm', path: '/alarm' },
  { icon: <Appointment />, label: 'Appointment', path: '/appointment' },
  { icon: <Notification />, label: 'Notification', path: '/notification' },
  { icon: <Setting />, label: 'Setting', path: '/setting' },
];

export default function Nav() {
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <Logo />
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
  height: 75px;
  background-color: var(--color-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 60px;

  @media (max-width: 1200px) {
    height: 60px;
    padding: 0 32px;
  }
  @media (max-width: 768px) {
    height: 48px;
    padding: 0 8px;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;

  @media (max-width: 1200px) {
    height: 60px;
  }
  @media (max-width: 768px) {
    height: 48px;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  height: 75px;

  @media (max-width: 1200px) {
    gap: 12px;
    height: 60px;
  }
  @media (max-width: 768px) {
    gap: 8px;
    height: 48px;
  }
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? 'var(--color-primary)' : 'var(--color-text)')};
  font-size: 1.125rem;
  font-family: 'HakgyoansimWoojuR', 'Pretendard', sans-serif;
  font-weight: 400;
  height: 75px;
  line-height: 1;

  @media (max-width: 1200px) {
    font-size: 1rem;
    height: 60px;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    height: 48px;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  height: 75px;

  @media (max-width: 1200px) {
    gap: 8px;
    height: 60px;
  }
  @media (max-width: 768px) {
    gap: 6px;
    height: 48px;
  }

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
    width: 24px;
    height: 24px;
    @media (max-width: 1200px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
