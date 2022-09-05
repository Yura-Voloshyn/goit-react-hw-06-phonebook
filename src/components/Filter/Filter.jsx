import PropTypes from 'prop-types';
import styled from '@emotion/styled';
const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
