import { BiBlock } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;
    align-items: center;
`


const SelectSort = ({ value, handleSelect, showMessage }) => {
    return ( 
        <Container>
            <label htmlFor="sort">Sortuj według:</label>
            <select 
                name="sort" 
                id="sort" 
                value={value} 
                onChange={handleSelect} 
                >
                <option value="abc">Alfabetu</option>
                <option value="dataUp">Daty rosnąco</option>
                <option value="dataDown">Daty malejąco</option>
            </select>
            <button 
                onClick={showMessage}>
                <BiBlock />
            </button>
        </Container>
     );
}
 
export default SelectSort;