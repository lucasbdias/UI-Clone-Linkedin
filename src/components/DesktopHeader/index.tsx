import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <button className="active">
            <HomeIcon />
            <span>Inicio</span>
          </button>
          <button>
            <NotificationsIcon />
            <span>Notificações</span>
          </button>
          <button>
            <ProfileCircle src="https://avatars3.githubusercontent.com/u/49083499?v=4" />
            <span>
              Eu 
              <CaretDownIcon />
            </span>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;