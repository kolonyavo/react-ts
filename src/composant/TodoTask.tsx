import {Task} from './interface';

interface Props {
    task: Task;
    removeTask(descriptionToDelete: string): void;
}

export const TodoTask = ({ task, removeTask }: Props) => {
    return (
        <div className='row'>
            <li>{task.description}</li>
            <button 
                onClick={() => {
                    removeTask(task.description);
                }}
            >X</button>
        </div>
    );
}