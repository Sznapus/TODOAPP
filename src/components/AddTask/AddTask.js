import { BiCalendar } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 10%;
    z-index: 1;
    border-bottom: 1px black solid;
`
const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Datapicker = styled.span`
    display: flex;
    position: relative;
    width: 18px;
    height: 19px;
`
const DatapickerToggle = styled(BiCalendar)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: var(--color-gray);
`
const DatapickerInput = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;
    &::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`
const AddButton = styled(FiEdit)`
 cursor: pointer;
`

const AddInput = styled.input`
width: 100%;
    align-self: stretch;
`


const AddTask = ({ handleSubmit, handlePriority, date, minDate, handleDate, value, handleChange }) => {
    return ( 
        <Form onSubmit={handleSubmit} >
            <Container>
                <div>
                    <input type="checkbox" 
                        id='priority' 
                        name='priority' 
                        onChange={handlePriority}
                    />
                    <label htmlFor="priority">Priorytet</label>
                </div>
                <Datapicker>
                    <DatapickerToggle/>
                    <DatapickerInput 
                        type="date" 
                        value={date} 
                        min={minDate} 
                        onChange={handleDate}
                    />
                </Datapicker>
            </Container>
            <Container>
                <AddInput  
                    type="text" 
                    value={value} 
                    onChange={handleChange}  
                    placeholder='Dodaj zadanie...'
                />
                <button type="submit"><AddButton /></button>
            </Container>
        </Form>
     );
}
 
export default AddTask;