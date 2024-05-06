import { ChangeEvent } from "react";

interface SearchProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Search({ handleChange }: SearchProps) {
    return (
        <div className="container mt-5">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="search">
                        <input onChange={(event) => handleChange(event)} type="text" className="form-control" placeholder="Search a breed!" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;