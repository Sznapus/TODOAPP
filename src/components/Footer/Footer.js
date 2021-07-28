import styled from "styled-components"

const Container = styled.footer`
    position: fixed;
    left: auto;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: darkgray;
    width: 100%;
    height: 50px;
`

const Text = styled.h3`
    font-size: 1rem;
    color: var(--color-gray);
`

const countTask = (countTask) => {
    switch (countTask) {
        case 0:
            return `Brak zadań`
        case 1:
            return `Masz ${countTask} zadanie`
        case 2:
        case 3:
        case 4:
            return `Masz ${countTask} zadania`
        default:
            return `Masz ${countTask} zadań`
    }
}

const Footer = ({ tasks }) => {
    
const countNotDoneTasks = tasks.filter(task => !task.done).length;
const countDoneTasks = tasks.filter(task => task.done).length;
const infoTask = countTask(countNotDoneTasks);
   
    return ( 
        <Container>
            <Text>{ infoTask }</Text>
            <Text>Zadania ukończone: { countDoneTasks }</Text>
        </Container>
     );
}
 
export default Footer;