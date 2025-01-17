import { useFiltersContext } from '@/context/FiltersContext';
import { SegmentedControl, Text } from '@mantine/core';

export const Transmission = () => {
  const { state, updateFilterProperty } = useFiltersContext();
  return (
    <>
      <Text my={16}>Transmission</Text>

      <SegmentedControl
        color="blue.5"
        radius="lg"
        value={state.transmission}
        onChange={(value) => updateFilterProperty('transmission', value)}
        data={[
          { label: 'Any', value: 'any' },
          { label: 'Manual', value: 'manual' },
          { label: 'Automatic', value: 'automatic' },
        ]}
      />
    </>
  );
};
