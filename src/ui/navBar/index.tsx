import { useState } from 'react';
import { ListNav } from '../../components/navList';
import { Nome } from '../../components/nomeUser';
import * as S from './styles';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('#home');

  const links = [
    { label: 'Início',    href: '#home' },
    { label: 'Projetos',  href: '#projetos' },
    { label: 'Sobre mim', href: '#sobre-mim' },
    { label: 'Contato',   href: '#contato' },
  ];

  return (
    <S.navDiv>
      <Nome nome="Ivaneudo" sobrenome="C. Rocha"/>

      <S.navList>
        {links.map((link) => (
          <ListNav
            key={link.href} 
            href={link.href} 
            isActive={activeLink === link.href} 
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
          </ListNav>
        ))}
      </S.navList>
    </S.navDiv>
  )
}
