import { composeStories } from '@storybook/react';
import * as stories from './LocalCounter.stories';
import { render, screen } from '@testing-library/react';

const { Base, InitialCount, Play } = composeStories(stories);

describe('LocalCounter', () => {
  test('Base', () => {
    const { container } = render(<Base />);
    expect(container).toMatchSnapshot();
  });

  test('InitialCount', () => {
    const { container } = render(<InitialCount />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('Play', async () => {
    const { container } = render(<Play />);

    await Play.play?.({ canvasElement: container });
    expect(container).toMatchSnapshot();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
