/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const [currentName, setCurrentName] = useState("");
    const [currentArrow, setCurrentArrow] = useState("");

    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
            setCurrentName(item);
        } else {
            onSort({
                path: item,
                order: "asc"
            });
        }
        handleArow(selectedSort.order);
    };
    const handleArow = (dir) => {
        dir === "asc" ? setCurrentArrow("up") : setCurrentArrow("down");
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        scope="col"
                        {...{ role: columns[column].path && "button" }}
                    >
                        {columns[column].name}

                        {columns[column].path === currentName ? (
                            <i
                                className={
                                    "bi bi-caret-" + currentArrow + "-fill"
                                }
                            ></i>
                        ) : (
                            ""
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableHeader;
