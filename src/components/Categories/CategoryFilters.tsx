import { Skeleton } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import utils from '../../app/utils/utils';

function CategoryFilters() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.filters.status);
  const options = useAppSelector((state) => state.filters.options);

  useEffect(() => {
    dispatch(utils.filtersUtils.getFilters('cpu'));
  }, []);

  console.log(options);

  return (
    <Container
      component={'aside'}
      maxWidth={'xs'}
      sx={{ border: '2px solid grey', height: '100%' }}>
      {status === 'pending' ? <Skeleton sx={{width: '100%', height: '100%'}} /> : null}

      {/* 
      {(!isFilter(filters)) ? null : (
        <FormControl>
          <FormLabel>Filters</FormLabel>

          <FormGroup>
            {filters.frequency.map((el) => {
              return (
                <FormControlLabel
                  key={el}
                  control={<Checkbox />}
                  label={`${el} MHz`}
                />
              );
            })}
          </FormGroup>
          <Divider />
          <FormGroup>
            {filters.cores.map((el) => {
              return (
                <FormControlLabel
                  key={el}
                  control={<Checkbox />}
                  label={`${el} core`}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      )}
       */}
    </Container>
  );
}

export default CategoryFilters;
