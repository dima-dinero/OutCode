import { createBoard } from '@wixc3/react-board';
import { ExpertCard } from '../../../components/expert-card/expert-card';

export default createBoard({
    name: 'ExpertCard',
    Board: () => (
        <ExpertCard
            profile={{
                hasCases: true,
                description:
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            }}
        />
    ),
    environmentProps: {
        windowWidth: 1088.55625,
    },
});
