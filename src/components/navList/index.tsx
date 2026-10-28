import * as S from './styles';

interface ListNavProps {
  children: React.ReactNode
  href: string
  isActive?: boolean
  onClick?: () => void
}

export const ListNav = ({ children, href, isActive, onClick }: ListNavProps) => {
  return (
    <li>
      <S.navItem>
      <S.navLink href={href} isActive={isActive} onClick={onClick}>
        {children}
      </S.navLink>
    </S.navItem>
    </li>
  );
};
