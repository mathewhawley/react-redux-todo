import { connect } from 'react-redux';
import { TodoForm } from './TodoForm';

const TodoFormContainer = connect()(TodoForm);

export { TodoFormContainer };
