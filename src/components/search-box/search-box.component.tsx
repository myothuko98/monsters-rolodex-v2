import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

// interface ISearchboxProps extends IOnchangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }

// interface IOnchangeHandlerProps {
//   onChangeHandler: () => void;
// }

// can be use like this for overloading interface
// interface ISearchboxProps {
//   onChangeHandler: () => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
