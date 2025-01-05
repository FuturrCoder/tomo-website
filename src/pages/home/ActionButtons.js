import ActionButton from "../../components/ActionButton";

function ActionButtons() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <ActionButton to="/classes" text="Get Started" className="bg-primary text-white"/>
      <ActionButton to="/classes" text="I have an account"/>
    </div>
  );
}

export default ActionButtons;