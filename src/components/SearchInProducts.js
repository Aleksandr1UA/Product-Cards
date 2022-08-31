import { FormControl } from "react-bootstrap";

function SearchInProducts({search}) {
    return <FormControl className="my-3" text='text' placeholder="Search..." onKeyUp={search}/>
}

export default SearchInProducts;