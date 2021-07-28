import styled from "styled-components";

const Container = styled.label`
    display: inline-flex;
    cursor: pointer;
    position: relative;
`
const Input = ({ id, done, handleDone }) => {
    return ( 
        <Container htmlFor="checkbox">
            <input 
                type="checkbox" 
                onChange={() => handleDone(id)} 
                checked={done}
            />
        </Container>
       
     );
}
 
export default Input;