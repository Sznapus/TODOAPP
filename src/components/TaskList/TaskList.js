import Task from './Task/Task'
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  flex: 1;
  overflow: hidden;
`
const Span = styled.span`
  margin: auto 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 100%;
  color: var(--color-gray);
`


const TaskList = ({ tasks, handleDone, handleRemove, minDate }) => {
  return (
    <Container tasks={tasks}>
    {tasks.length > 0 ? 
      <Task 
        tasks={tasks}
        handleDone={handleDone}
        handleRemove={handleRemove} 
        minDate={minDate}
      /> : <Span>Brak zadań</Span>}
    </Container>
  )
}  
 
export default TaskList;