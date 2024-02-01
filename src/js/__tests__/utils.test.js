import { random } from '../utils';

test('testing random function from utils', () => {
    const randomList = [1, 2, 'three', '4', 5.5];
    let item = random(randomList);
    expect(randomList).toContain(item);
    }
)
