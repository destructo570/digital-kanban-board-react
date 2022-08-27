import React from "react";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as More } from "../assets/icons/more.svg";
import addIcon from "../assets/icons/add.svg";
import DropDown from "../components/form/dropDown/DropDown";
import ActionButton from "../components/navigation/ActionButton";
import Navigation from "../components/navigation/Navigation";

const DUMMY_BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];
export default function NavigationContainer() {
  const onBoardClickedHandler = () => {};
  const createNewBoardHandler = () => {};
  return (
    <Navigation>
      <Wrapper>
        <Logo />
      </Wrapper>
      <Wrapper width="100%" justify="space-between" margin="0 0 0 1em">
        <DropDown
          dataSource={DUMMY_BOARDS}
          onItemClicked={onBoardClickedHandler}
          shouldHide={true}
        />
        <Wrapper>
          <ActionButton
            title="Add new board"
            icon={addIcon}
            handler={createNewBoardHandler}
          />
          <More />
        </Wrapper>
      </Wrapper>
    </Navigation>
  );
}
