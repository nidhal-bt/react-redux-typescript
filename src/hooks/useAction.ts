import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
import { useAppDispatch } from './useTypedSelector';

export const useAction = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
