type CardDetails = {
  title: string;
  source: string;
  description: string;
  cusine: string;
  country: string;
  id?: string;
};

export default function Card({
  title,
  source,
  description,
  cusine,
  country,
  id,
}: CardDetails) {
  return (
    <div className="card" id={id}>
      <img src={source} alt="" />
      <h2>{title}</h2>
      <div>
        <h3 className="card_div">{description}</h3>
      </div>
      <div className="card_footer">
        <p id="cusine">{cusine}</p>
        <p id="nation">{country}</p>
      </div>
    </div>
  );
}
