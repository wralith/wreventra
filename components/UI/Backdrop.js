function Backdrop(props) {
  return (
    <div onClick={props.onClick} className="t-0 l-0 fixed z-10 h-full w-full bg-black/50 backdrop-blur-md transition-all animate-fade"></div>
  );
}

export default Backdrop;
