import { FormControl } from "react-bootstrap";

function SearchInCountries({search}) {
    return <FormControl className="my-3" text='text' placeholder="Search..." onKeyUp={search}/>
}

export default SearchInCountries;