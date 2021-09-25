import {shallow} from 'enzyme';
import {NicknameRaw} from '../Nickname.component';

const setup = (username = '') => {
  return shallow(<NicknameRaw value={username}/>)
};

describe('Nickname component', () => {
  it('renders without crashing', () => {
    const component = setup();

    expect(component).not.toBe(null)
  });

  it('should render user name if given', () => {
    let component = setup();
    
    expect(component.text()).toBe('');
    component = setup('guest0001');
    expect(component.text()).toBe('guest0001');
  });
});
