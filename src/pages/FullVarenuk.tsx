import { FC, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const FullVarenuk: FC = () => {
  const [varenuk, setVarenuk] = useState<{
    imageUrl: string;
    title: string;
    price: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
    return <></>;
  }

  return (
    <div className="fullVarenuk container">
      <h2>{varenuk.title}</h2>
      <img width={320} height={320} src={varenuk.imageUrl} alt="Varenuk" />
      <p>Смачні та дуже поживні. Склад. Поживна цінність.</p>
      <h4>ціна: {varenuk.price} грн.</h4>
      <Link to="/react-varenuk">
        <button className="button">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullVarenuk;
