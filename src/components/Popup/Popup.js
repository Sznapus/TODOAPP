import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 70vw;
    padding: .4rem;
    text-align: center;
    background: rgba( 255, 255, 255);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.4 );
    backdrop-filter: blur( 3.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow: hidden;
    z-index: 1;
    `
const BTN = styled.button`
    &:hover {
        color: var(--color-grayhover);
    }
`

const Popup = ({ removeAll, switchOff }) => {
    return ( 
        <Container>
            <label htmlFor="popup">Czy na pewno chcesz wszystko usunąć?</label>
            <BTN
                type="button" 
                onClick={removeAll}
                >Tak</BTN>
            <BTN 
                type="button" 
                onClick={switchOff}
                >Nie</BTN>
        </Container>
        
     );
}
 
export default Popup;