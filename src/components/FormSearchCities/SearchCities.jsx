import {
  Form,
  FormControl,
  InputGroup
} from "react-bootstrap";

function SearchCities() {
  return (
    <Form>
            <InputGroup>
              <FormControl className="bg-dark text-white" type="search" placeholder="Search" />
            </InputGroup>
    </Form>
  );
}

export default SearchCities;