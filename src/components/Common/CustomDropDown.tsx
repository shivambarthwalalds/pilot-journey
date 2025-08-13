// components/DropDown.tsx
// import { debounce } from "@/utils/debounce";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa"; // For search icon

interface DropDownProps {
  label?: any;
  formik?: any;
  id?: any;
  selected?: any;
  labelClassName?: any;
  inputClassName?: any;
  placeholder?: any;
  required?: boolean;
  options: { label: any; value: any }[];
  onSelect?: (selectedOption: string) => void;
  hideError?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  onSelect,
  label,
  selected,
  labelClassName,
  inputClassName,
  required,
  placeholder,
  formik,
  id,
  hideError = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(selected ?? null);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const formValue = formik?.values[id] || formik?.getFieldProps(id)?.value;
  const error = formik?.errors[id];
  const touched = formik?.touched[id];

  // Debounced search function to improve performance
  const handleSearch = (value: any) => {
    setSearch(value);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update filtered options when search term changes
  useEffect(() => {
    setFilteredOptions(
      options.filter(
        (option) =>
          option.label?.toLowerCase().includes(search.toLowerCase()) ||
          option.value?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  return (
    <div className="relative " ref={dropdownRef}>
      {label && (
        <label className={` flex ${labelClassName}`}>
          {label}
          {required && <p className="text-red-500">*</p>}
        </label>
      )}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={` border border-gray-300 bg-white text-gray-400 p-2 rounded cursor-pointer flex items-center justify-between ${inputClassName}`}
      >
        <div>
          {" "}
          {selectedOption?.label ? (
            <p className="text-black line-clamp-1">{selectedOption?.label}</p>
          ) : (
            placeholder
          )}
        </div>
        {/* <p> {selectedOption?.label || placeholder}</p> */}
        <FaAngleDown />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded border border-gray-300 z-10">
          <div className="p-2 flex items-center space-x-2 border-b">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="w-full border-none outline-none focus:ring-0"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-2 text-gray-500">No options found</div>
            ) : (
              filteredOptions.map((option: any, index: number) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedOption(option);
                    onSelect && onSelect(option);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  {option?.label}
                </div>
              ))
            )}
          </div>
        </div>
      )}
      {touched && error && !hideError && (
        <p className=" text-sm  text-red-500 3xl:text-lg">{error}</p>
      )}
    </div>
  );
};

export default DropDown;
