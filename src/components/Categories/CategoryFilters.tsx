import { Skeleton } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import utils from '../../app/utils/utils';
import { Category } from '../../types/types';
import FilterList from '../Filters/FilterList';


function CategoryFilters(props: {category: Category}) {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.filters.status);
  const options = useAppSelector((state) => state.filters.options);

  useEffect(() => {
    dispatch(utils.filtersUtils.getFilters(props.category.name.toLowerCase()));
  }, []);



  return (
    <Container
      component={'aside'}
      maxWidth={'xs'}
      sx={{ border: '2px solid grey', height: '100%' }}>
      {status === 'pending' ? <Skeleton sx={{width: '100%', height: '100%'}} /> : <FilterList options={options}/>}

    </Container>
  );
}

export default CategoryFilters;
