import styled from "styled-components";

const monthsName = [
    'Styczeń', 
    'Luty', 
    'Marzec', 
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec', 
    'Sierpień',
    'Wrzesień',
    'Pażdziernik', 
    'Listopad',
    'Grudzień'    
];
const daysName = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
];

const Container = styled.header`
    display: flex;
    width: 100%;
    background-image: url("https://cdn.pixabay.com/photo/2018/03/29/19/34/northern-lights-3273425_960_720.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    z-index: 1;
`
const ContainerText = styled.div`
    font-size: 1.8rem;
    padding: .8rem;
    color: var(--color-white);
`

const Header = () => {
    let time = new Date();
    let month = time.getMonth();
    let days = time.getDate();
    let day = time.getDay();
    
    const monthName = monthsName[month];
    const dayName = day === 0 ? daysName[6] : daysName[day - 1];

    return ( 
        <Container>
            <ContainerText>
                <h1 className="Header_font">{dayName},</h1>
                <h2 className="Header_font">{days} {monthName}</h2>
            </ContainerText>
        </Container>
     );
}
 
export default Header;