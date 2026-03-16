import ViewRenderer from "./ViewRenderer";

export default function ColumnRenderer({column}){

  const primaryId = column * 100 + 1;
  const overlayId = column * 100 + 2;

  return (
    <>
      <ViewRenderer viewId={primaryId}/>
      <ViewRenderer viewId={overlayId}/>
    </>
  );

}