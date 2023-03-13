import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullVarenuk: React.FC = () => {
  const [varenuk, setVarenuk] = React.useState<{
    imageUrl: string;
    title: string;
    price: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function ferchVarenuk() {
      try {
        const { data } = await axios.get(
          "https://63ebc7d7be929df00ca23593.mockapi.io/items/" + id
        );
        setVarenuk(data);
      } catch (error) {
        alert("Помилка при отриманні вареників");
        navigate("/");
      }
    }
    ferchVarenuk();
  }, []);

  if (!varenuk) {
    return <>Завантаження...</>;
  }

  return (
    <div className="fullVarenuk container">
      <h2>{varenuk.title}</h2>
      <img width={320} height={320} src={varenuk.imageUrl} alt="Varenuk" />
      <p>Смачні та дуже поживні. Склад. Поживна цінність.</p>
      <h4>ціна: {varenuk.price} грн.</h4>
    </div>
  );
};

export default FullVarenuk;
