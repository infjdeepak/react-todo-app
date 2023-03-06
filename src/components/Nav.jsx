import styled from "styled-components";

function Nav() {
  return (
    <>
      <NavStyle>
        <h1>DoTodo</h1>
      </NavStyle>
    </>
  );
}

const NavStyle = styled.nav`
  border-radius: 1.5rem;
  min-height: 10vh;
  padding: 1rem 5%;
  display: flex;
  align-items: center;
`;
export default Nav;
