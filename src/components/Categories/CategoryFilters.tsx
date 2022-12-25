import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { useAppSelector } from '../../app/hooks';

function CategoryFilters() {
  const filters = useAppSelector((state) => state.data.filters);

  return (
    <Container component={'aside'} maxWidth={'xs'} sx={{border: '2px solid grey', height: '100%'}}>
      <FormControl>
        <FormLabel>Filters</FormLabel>

        <FormGroup>
          {filters.frequency.map((el) => {
            return (
              <FormControlLabel key={el} control={<Checkbox />} label={`${el} MHz`} />
            );
          })}
        </FormGroup>
        <Divider />
        <FormGroup>
          {filters.cores.map((el) => {
            return (
              <FormControlLabel key={el} control={<Checkbox />} label={`${el} core`} />
            );
          })}
        </FormGroup>
      </FormControl>
    </Container>
  );
}

export default CategoryFilters;
