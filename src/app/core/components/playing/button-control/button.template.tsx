function BtnControl({
  children,
  descriptions,
}: {
  children: JSX.Element[] | JSX.Element;
  descriptions: String;
}) {
  return (
    <div className="btn relative">
      <div className="btn-control w-[32px] h-[32px] flex justify-center items-center ">
        {children}
      </div>
      <div className="descriptions px-[8px] py-[4px]">
        <p className="">{descriptions}</p>
      </div>
    </div>
  );
}

export default BtnControl;
