import { BiTrash, BiBell } from "react-icons/bi";
import styled, { keyframes } from "styled-components";
import Input from './Input';

const List = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    flex-wrap: nowrap;
    border-bottom: 1px black solid;
    width: 100%;
    &:last-child {
      margin-bottom: 50px;
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
`
const Paragraph = styled.p`
  display: flex;
    width: 100%;
    padding: 0 .3rem;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: ${props => props.priority ? 'bold' : '300'};
    text-decoration: ${props => props.done ? 'line-through' : 'auto'};
    &.dateIsOver {
      color: rgba(236, 19, 19, .8);
    }
    &.done {
      color: rgba(128, 128, 128, 0.5);
    }
`
const animationBell = keyframes`
  0% {
    filter: drop-shadow(0px 0px 7px rgb(236 19 19 / 1));
  }
  
  50% {
    color: rgb(230, 202, 202);
    filter: drop-shadow(0px 0px 1px rgb(236 19 19 / 0.6));
  }

  100% {
    filter: drop-shadow(0px 0px 7px rgb(236 19 19 / 1));  
  }
`

const OnBell = styled(BiBell)`
  min-width: 5%;
  min-height: 5%;
  margin: 0 5px;
  color: rgb(240, 240, 240);
  animation: ${animationBell} 2s infinite;
`

const OffBell = styled(BiBell)`
  display: none;
`

const ParagraphDate = styled.p`
  font-size: 0.7rem;
  display: flex;
  flex-wrap: nowrap;
  min-width: 60px;
`

const daysBetweenDates = (currentTime, finishedTime) => {
  currentTime = new Date(currentTime);
  finishedTime = new Date(finishedTime);

  const difference = finishedTime - currentTime;

  return difference / (1000 * 60 * 60 * 24);
}

const timeIsOver = (currentTime, finishedTime, maxDifference) => {
  const difference = daysBetweenDates(currentTime, finishedTime);
  return difference <= maxDifference;
}


const Task = ({ handleDone, handleRemove, tasks, minDate }) => {
  return (
      tasks.map(task => <List key={task.id}>
        <Container>
          <Input 
            id={task.id} 
            done={task.done} 
            handleDone={handleDone}
          />
          <Paragraph 
            className={ task.done ? 'done' : minDate > task.date ? 'dateIsOver' : ''}
            done={task.done} 
            minDate={minDate} 
            date={task.date} 
            priority={task.priority}
          >
            {task.name}{ timeIsOver(Date.now(), task.date, 3) ? <OnBell/> : <OffBell/> }
          </Paragraph>
        </Container>
        <Container>
          <ParagraphDate>
            {task.date}
          </ParagraphDate>
          <button 
            type="button" 
            onClick={() => handleRemove(task.id)}
            className='Task_button'
            >
            <BiTrash />
          </button>
        </Container>
      </List>)
    )
  }
 
export default Task;