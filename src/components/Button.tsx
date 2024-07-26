interface Props {
  children: string;
  // color è facoltativo e solo i valori primary ecc. posso essere utilizati.
  // se non viene utilizzata la proprietà color nel file APP avrà il colore primary come default
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
