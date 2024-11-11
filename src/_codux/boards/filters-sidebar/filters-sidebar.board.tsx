import { createBoard } from '@wixc3/react-board';
import { FiltersSidebar } from '../../../components/filters-sidebar/filters-sidebar';

export default createBoard({
    name: 'FiltersSidebar',
    Board: () => <FiltersSidebar />,
});
