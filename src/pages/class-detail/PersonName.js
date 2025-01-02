function PersonName(props) {
  return <h3
    className="text-neutral-black text-sm text-center w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
    {props.firstName} {props.lastName}
  </h3>;
}

export default PersonName;