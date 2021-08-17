import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {setFilter} from "../../../modules/filter";

import {FilterClassType} from "../../../modules/filter/types";
import {CountryType, InstType, StatusType} from "../../../common/classes/types";

interface FilterButtonProps {
    filter: CountryType | InstType | StatusType | null;
    filterClass: FilterClassType;
    icon: JSX.Element;
    activeClass: FilterClassType | null;
    handleActiveClass: (state: FilterClassType | null) => void;
}

function FilterButton({filter, filterClass, icon, activeClass, handleActiveClass}: FilterButtonProps) {
    const current = useSelector((state: RootState) => state.filter[filterClass]);
    const dispatch = useDispatch();
    const isActive: boolean = filterClass === activeClass;
    const isSelected: boolean = filter === current;

    const onClick: () => void = isActive
        ? () => {
            if (!isSelected) dispatch(setFilter(filterClass, filter));
            handleActiveClass(null);
        }
        : () => {handleActiveClass(filterClass)};


    return (
        <button
            className="filter-button"
            style={{width: isSelected || isActive ? "3.2rem" : "0"}}
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default FilterButton;