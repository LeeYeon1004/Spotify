import "./tooltip.style.scss"

function Tooltip({ descriptions }: { descriptions: String }) {
  return (
    <div className="tooltip">
      <div className="descriptions px-[8px] py-[4px]">
        <p className="">{descriptions}</p>
      </div>
    </div>
  );
}

export default Tooltip;
