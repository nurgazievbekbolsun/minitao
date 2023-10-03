import "./index.scss";
import { data } from "../../data";
import PradajCard from "../pradajCard";

const Pradaj = () => {
  return (
    <section id="pradaj">
      <div className="container">
        <div className="pradaj">
          <div className="pradaj__block">
            <h2>Хиты продаж</h2>
            <button>Хиты продаж</button>
            <button>Все товары</button>
            <button>Инструменты</button>
            <button>Сантехника</button>
            <button>Для дома</button>
            <button>Для сада</button>
          </div>
          <div className="pradaj__group">
            {data.map((el) => (
              <PradajCard el={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pradaj;