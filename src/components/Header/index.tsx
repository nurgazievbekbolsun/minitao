import { NavLink } from "react-router-dom";
import './index.scss';
import { CiSearch } from "react-icons/ci";
import { SlPresent } from "react-icons/sl";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__berx-header">
            <div className="header__left">
              <NavLink to={""}>О компании</NavLink>
              <NavLink to={""}>Оплата</NavLink>
              <NavLink to={""}>Доставка</NavLink>
              <NavLink to={""}>Возврат</NavLink>
              <NavLink to={""}>Отзывы</NavLink>
              <NavLink to={""}>Вопрос-ответ</NavLink>
              <NavLink to={""}>Новости</NavLink>
              <NavLink to={""}>Контакты</NavLink>
            </div>
            <div className="header__rigth">
              <NavLink to={""}>Ежедневно, с 8:00 до 18:00</NavLink>
              <h2>8 800 444 00 65</h2>

              <button>Заказать звонок</button>
            </div>
          </div>
          <div className="header__nij-header">
            <h1>Mini Tao</h1>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="8"
                viewBox="0 0 20 8"
                fill="none"
              >
                <path
                  d="M0.666992 1H18.667M0.666992 7H18.667"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                />
              </svg>
              каталог
            </button>
            <div className="header__block-input">
              <input
                type="text"
                placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
              />
              <CiSearch className="icon" />
            </div>
            <div className="header__icons">
              <div className="header__aksi">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="26"
                  viewBox="0 0 33 26"
                  fill="none"
                >
                  <path
                    d="M16.5 8.3337V23.5M16.5 8.3337C16.078 6.59472 15.3514 5.10802 14.4149 4.06749C13.4784 3.02697 12.3755 2.4809 11.25 2.50051C10.4765 2.50051 9.73459 2.80779 9.18761 3.35476C8.64062 3.90173 8.33333 4.64358 8.33333 5.41711C8.33333 6.19064 8.64062 6.93248 9.18761 7.47945C9.73459 8.02642 10.4765 8.3337 11.25 8.3337M16.5 8.3337C16.922 6.59472 17.6486 5.10802 18.5851 4.06749C19.5216 3.02697 20.6245 2.4809 21.75 2.50051C22.5235 2.50051 23.2654 2.80779 23.8124 3.35476C24.3594 3.90173 24.6667 4.64358 24.6667 5.41711C24.6667 6.19064 24.3594 6.93248 23.8124 7.47945C23.2654 8.02642 22.5235 8.3337 21.75 8.3337M24.6667 13.0003V21.1667C24.6667 21.7855 24.4208 22.379 23.9832 22.8166C23.5457 23.2542 22.9522 23.5 22.3333 23.5H10.6667C10.0478 23.5 9.45434 23.2542 9.01675 22.8166C8.57917 22.379 8.33333 21.7855 8.33333 21.1667V13.0003M6 9.50034C6 9.19093 6.12292 8.89419 6.34171 8.6754C6.5605 8.45662 6.85725 8.3337 7.16667 8.3337H25.8333C26.1428 8.3337 26.4395 8.45662 26.6583 8.6754C26.8771 8.89419 27 9.19093 27 9.50034V11.8336C27 12.143 26.8771 12.4398 26.6583 12.6586C26.4395 12.8773 26.1428 13.0003 25.8333 13.0003H7.16667C6.85725 13.0003 6.5605 12.8773 6.34171 12.6586C6.12292 12.4398 6 12.143 6 11.8336V9.50034Z"
                    stroke="#16191E"
                    stroke-width="1.6"
                    stroke-miterlimit="10"
                  />
                </svg>
                <p>Все акции</p>
              </div>
              <div className="header__voiti">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="26"
                  viewBox="0 0 34 26"
                  fill="none"
                >
                  <rect
                    x="6.8"
                    y="3.3"
                    width="20.4"
                    height="20.4"
                    rx="7.2"
                    stroke="#16191E"
                    stroke-width="1.6"
                  />
                  <path
                    d="M14.1089 13.9468C13.3421 13.18 12.9113 12.14 12.9113 11.0556C12.9113 9.97112 13.3421 8.93109 14.1089 8.16428C14.8758 7.39746 15.9158 6.96667 17.0002 6.96667C18.0847 6.96667 19.1247 7.39746 19.8915 8.16428C20.6583 8.93109 21.0891 9.97112 21.0891 11.0556C21.0891 12.14 20.6583 13.18 19.8915 13.9468C19.1247 14.7137 18.0847 15.1444 17.0002 15.1444C15.9158 15.1444 14.8758 14.7137 14.1089 13.9468Z"
                    stroke="#16191E"
                    stroke-width="1.6"
                  />
                  <path
                    d="M24.3332 22.0556C24.3332 18.3055 21.0499 15.9444 16.9998 15.9444C12.9497 15.9444 9.6665 18.3055 9.6665 22.0556"
                    stroke="#16191E"
                    stroke-width="1.6"
                  />
                </svg>
                <p>Войти</p>
              </div>
              <div className="header__sravne">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="26"
                  viewBox="0 0 34 26"
                  fill="none"
                >
                  <line
                    x1="9.8"
                    y1="7.3"
                    x2="9.8"
                    y2="23.7"
                    stroke="#16191E"
                    stroke-width="1.6"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="17.8"
                    y1="3.3"
                    x2="17.8"
                    y2="23.7"
                    stroke="#16191E"
                    stroke-width="1.6"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="25.8"
                    y1="14.3"
                    x2="25.8"
                    y2="23.7"
                    stroke="#16191E"
                    stroke-width="1.6"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Сравнение</p>
              </div>
              <div className="header__isbran">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="26"
                  viewBox="0 0 33 26"
                  fill="none"
                >
                  <path
                    d="M17 8.5C17 8.5 18.4034 3.5 22.8475 3.5C26.3092 3.5 28.5 6.3666 28.5 9.7626C28.5 14.4594 23.9359 17.5694 17 23.5C10.0642 17.5694 5.5 14.4594 5.5 9.7626C5.5 6.3666 7.69085 3.5 11.1525 3.5C15.5966 3.5 17 8.5 17 8.5Z"
                    stroke="#16191E"
                    stroke-width="1.6"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Избранное</p>
              </div>
              <div className="header__karzina">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="26"
                  viewBox="0 0 34 26"
                  fill="none"
                >
                  <path
                    d="M3.5 3.5H7.06175C7.9082 3.5 8.66299 4.03286 8.94635 4.83047L9.76555 7.13636M9.76555 7.13636L13.5402 17.7612C13.8891 18.7433 14.9337 19.2928 15.9407 19.024L29.016 15.5326C29.8912 15.2989 30.5 14.5062 30.5 13.6003V9.13636C30.5 8.03179 29.6046 7.13636 28.5 7.13636H9.76555Z"
                    stroke="#16191E"
                    stroke-width="1.6"
                  />
                  <path
                    d="M9.36667 22.5C9.36667 23.6782 10.3218 24.6333 11.5 24.6333C12.6782 24.6333 13.6333 23.6782 13.6333 22.5C13.6333 21.3218 12.6782 20.3667 11.5 20.3667C10.3218 20.3667 9.36667 21.3218 9.36667 22.5ZM10.5 22.9H11.5V22.1H10.5V22.9Z"
                    fill="#16191E"
                  />
                  <path
                    d="M22.3667 22.5C22.3667 23.6782 23.3218 24.6333 24.5 24.6333C25.6782 24.6333 26.6333 23.6782 26.6333 22.5C26.6333 21.3218 25.6782 20.3667 24.5 20.3667C23.3218 20.3667 22.3667 21.3218 22.3667 22.5ZM23.5 22.9H24.5V22.1H23.5V22.9Z"
                    fill="#16191E"
                  />
                </svg>
                <p>Корзина</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
