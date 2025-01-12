import { useFiltersContext } from '@/context/FiltersContext';
import { Button, Text } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import React from 'react';

export const ResetFiltersButton = () => {
  const { resetFilters } = useFiltersContext();

  return (
    <Button variant="subtle" onClick={resetFilters}>
      <IconRefresh size="14px" />{' '}
      <Text component="span" mx={2}>
        Reset
      </Text>
    </Button>
  );
};
