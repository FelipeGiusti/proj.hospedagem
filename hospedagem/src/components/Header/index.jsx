import { Container, Logo, TopHeader, Profile } from "./style";
import { CgProfile } from "react-icons/cg";
import { PiList } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <Logo>
        <img src="./../../../public/airbnb.svg" alt="Logo" href="localhost:3001/" />
      </Logo>

      <TopHeader>
        <span>Acomodações</span>
        <span>Experiências</span>
      </TopHeader>

      <Profile>
        <span>Anuncie o seu espaço</span>

        <button>
          <PiList size={30} color="gray" />
          <CgProfile size={30} color="gray" />
        </button>
      </Profile>

    </Container>
  )
}