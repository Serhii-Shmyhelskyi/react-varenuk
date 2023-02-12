import "./scss/app.scss";

function App() {
  return (
    <div class="wrapper">
      <div class="header">
        <div class="container">
          <div class="header__logo">
            <img width="38" src="./img/varenuk-logo.svg" alt="varenuk logo" />
            <div>
              <h1>React varenuk</h1>
              <p>самі смачні вареники</p>
            </div>
          </div>
          <div class="header__cart">
            <a href="/cart.html" class="button button--cart">
              <span>320 ₴</span>
              <div class="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <div class="categories">
              <ul>
                <li class="active">Все</li>
                <li>М'ясні</li>
                <li>Вегетаріанська</li>
                <li>Гриль</li>
                <li>Гострі</li>
                <li>Сирні</li>
              </ul>
            </div>
            <div class="sort">
              <div class="sort__label">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортування по:</b>
                <span>популярності</span>
              </div>
              <div class="sort__popup">
                <ul>
                  <li class="active">популярності</li>
                  <li>ціна</li>
                  <li>алфавіту</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 class="content__title">Всі вареники</h2>
          <div class="content__items">
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st2.depositphotos.com/1022597/5430/i/600/depositphotos_54308177-stock-photo-pasta-food.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st4.depositphotos.com/4709981/28156/i/600/depositphotos_281564948-stock-photo-dumplings-on-a-plate-isolated.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st2.depositphotos.com/2390973/11686/i/600/depositphotos_116869662-stock-photo-ukrainian-dumplings-vareniki-with-mashed.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">от 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st4.depositphotos.com/4709981/27745/i/600/depositphotos_277450482-stock-photo-dumplings-on-a-plate-isolated.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st4.depositphotos.com/4709981/28010/i/600/depositphotos_280107452-stock-photo-dumplings-on-a-plate-isolated.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st4.depositphotos.com/4709981/28010/i/600/depositphotos_280107438-stock-photo-dumplings-on-a-plate-isolated.jpg"
                alt="varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st4.depositphotos.com/4709981/28286/i/600/depositphotos_282860372-stock-photo-dumplings-on-a-plate-isolated.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">от 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st4.depositphotos.com/4709981/27936/i/600/depositphotos_279360808-stock-photo-dumplings-on-a-plate-isolated.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>{" "}
            <div class="varenuk-block">
              <img
                width={260}
                height={260}
                class="varenuk-block__image"
                src="https://st2.depositphotos.com/2390973/11549/i/600/depositphotos_115497990-stock-photo-russian-cottage-cheese-dumplings-vareniki.jpg"
                alt="Varenuk"
              />
              <h4 class="varenuk-block__title">Вареники</h4>
              <div class="varenuk-block__selector">
                <ul>
                  <li class="active">тонке</li>
                  <li>традиційне</li>
                </ul>
                <ul>
                  <li class="active">26 шт.</li>
                  <li>30 шт.</li>
                  <li>40 шт.</li>
                </ul>
              </div>
              <div class="varenuk-block__bottom">
                <div class="varenuk-block__price">від 120 ₴</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавити</span>
                  <i>2</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
