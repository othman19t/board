import React from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

const AddBoardBtn = (props) => {
  return (
    <div className="addboard">
      <div className="half-width">
        <Button variant="primary" onClick={props.SwitchModal} block>
          Add a Board
        </Button>
      </div>
      <div className="half-width">
        <DropdownButton id="dropdown-basic-button" title="Sort By" >
          <Dropdown.Item onClick={props.sortByTitle}>Title</Dropdown.Item>
          <Dropdown.Item onClick={props.sortByDate}>Date</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
export default AddBoardBtn;
