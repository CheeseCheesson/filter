import React from "react";
import PropTypes from "prop-types";

export const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const isArray = Array.isArray(items);
    return (
        <ul className="list-group">
            {!isArray &&
                Object.keys(items).map((item) => {
                    return (
                        <li
                            className={
                                "list-group-item" +
                                (selectedItem === items[item] ? " active" : "")
                            }
                            key={items[item][valueProperty]}
                            onClick={() => onItemSelect(items[item])}
                            role="button"
                        >
                            {items[item][contentProperty]}
                        </li>
                    );
                })}
            {isArray &&
                items.map((item) => {
                    return (
                        <li
                            className={
                                "list-group-item" +
                                (selectedItem === item ? " active" : "")
                            }
                            onClick={() => onItemSelect(item)}
                            role="button"
                            key={item[valueProperty]}
                        >
                            {item[contentProperty]}
                        </li>
                    );
                })}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};
